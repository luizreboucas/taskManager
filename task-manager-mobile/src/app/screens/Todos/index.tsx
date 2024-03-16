import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import { ListEmpty } from '../../components/ListEmpty';
import { ButtonIcon } from '../../components/ButtonIcon';

import { ITodoModel } from '../../models/ITodoModel'
import { Plus } from 'phosphor-react-native';
import theme from '../../theme';
import { useAuth } from '../../hooks/AuthContext';
import { Toast } from 'react-native-toast-notifications';

import { env } from '../../env/index'

export function Todos() {

  const navigation = useNavigation();

  const [todos, setTodos] = useState<ITodoModel[]>();
  const [refreshing, setRefreshing] = useState(false);

  const { user, token, signOut } = useAuth();

  const emptyList = (message: string) => (
    <ListEmpty message={message}/>
  );

  const getTodos = () => {
    fetch(`${env.baseUrl}/task/${user._id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => response.json())
    .then(json => {
      setTodos(json);
    })
    .catch(error => {
      Toast.show(error.message, { type: 'danger'});
    })
    .finally(() => {
      setRefreshing(false);
    });
  };

  const logOut = () => {
    signOut();
  }

  useEffect(() => {
    getTodos();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getTodos();
  };

  return (
    <Container>
      
      <Header showBackButton={true} onPress={() => logOut()}/>
      
      <Highlight
        title='Notas'
      />

      <FlatList
        data={todos}
        keyExtractor={(item: ITodoModel) => item._id }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          todos ? (
            <GroupCard
              key={item._id}
              title={item.nome}
              subtitle={item.descricao}
              isFirst={index === 0}
              isLast={index === todos.length - 1}
              priority={item.prioridade}
            />
          )
          : null
        )}
        contentContainerStyle={todos?.length === 0 && { flex: 1 }}
        ListEmptyComponent={emptyList("Que tal cadastrar uma nova atividade?")}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.COLORS.WARNING]}
            tintColor={theme.COLORS.WARNING}
          />
        }
      />

      <ButtonIcon icon={Plus} iconSize={28} iconColor={theme.COLORS.LOW_PRIORITY} onPress={() => navigation.navigate("NewTodo")}/>

    </Container>
  );
}
