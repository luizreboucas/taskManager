import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

import { Container } from './styles';

import { Toast } from 'react-native-toast-notifications';

import { Highlight } from '../../components/Highlight';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';

import { env } from '../../env';
import theme from '../../../app/theme';


export function NewTodo({ route }) {

  const id = route?.params ? route.params.id : undefined;

  const navigation = useNavigation();
 
  const { user, token } = useAuth();
 
  const [name, setName] = useState("");
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = () => {
    if (id == undefined) {
      setLoading(true);
      fetch(`${env.baseUrl}/task`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          usuario: user._id,
          nome: name,
          descricao: description,
          prioridade: Number(value)
        })
      })
      .then((response) => response.json())
      .then(() => {
        Toast.show("Cadastrado com sucesso", { type: 'success', animationType: 'zoom-in' });
      })
      .catch(error => {
        Toast.show(error.message, { type: 'danger'});
      })
      .finally(() => {
        setLoading(false);
        navigation.goBack();
      });
    } else {
      setLoading(true);
      fetch(`${env.baseUrl}/task/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          nome: name,
          descricao: description,
          prioridade: Number(value)
        })
      })
      .then((response) => response.json())
      .then(() => {
        Toast.show("Atulizada com sucesso", { type: 'success', animationType: 'zoom-in' });
      })
      .catch(error => {
        Toast.show(error.message, { type: 'danger'});
      })
      .finally(() => {
        setLoading(false);
        navigation.goBack();
      });
    }
  }

  return (
    <Container>
      <Header showBackButton={true} onPress={() => navigation.goBack()}/>

      <Highlight title={ id != undefined ? 'Atualizar Nota' : 'Novo Nota' }/>

      <Input placeholder="Nome da atividade" onChangeText={setName}/>

      <Input placeholder="Descricao da atividade" onChangeText={setDescription}/>

      <Text style={styles.label}>
          Prioridade
      </Text>

      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: theme.COLORS.WHITE }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          activeColor={theme.COLORS.WHITE}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Selecione a prioridade' : '...'}
          searchPlaceholder="Buscar"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      
      { loading ? <Loader/> : <Button title={ id != undefined ? 'Atualizar' : 'Criar' } style={{ marginTop: 20 }} onPress={() => handleAddTodo()} disabled={loading} /> }
      
    </Container>
  );
}

const data = [
  { label: 'Alta', value: '1' },
  { label: 'Média', value: '2' },
  { label: 'Baixa', value: '3' }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    padding: 16,
  },
  dropdown: {
    height: 56,
    borderColor: theme.COLORS.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 12,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 8,
    fontSize: 16,
    color: theme.COLORS.WHITE
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#FFF'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFF'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});