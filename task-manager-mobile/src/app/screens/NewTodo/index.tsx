import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import { Toast } from 'react-native-toast-notifications';

import { Highlight } from '../../components/Highlight';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';
import { Loader } from '../../components/Loader';

import { env } from '../../env';


export function NewTodo() {
  const navigation = useNavigation();
  const { user, token } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = () => {
    if (token) {
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
          prioridade: 3
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
    }
  }

  return (
    <Container>

      <Highlight title='Novo Nota'/>

      <Input placeholder="Nome da atividade" onChangeText={setName}/>

      <Input placeholder="Descricao da atividade" onChangeText={setDescription}/>
      
      { loading ? <Loader/> : <Button title='Criar' style={{ marginTop: 20 }} onPress={() => handleAddTodo()} disabled={loading} /> }
      
    </Container>
  );
}
