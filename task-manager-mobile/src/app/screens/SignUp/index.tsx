import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { CaretLeft } from "phosphor-react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/Highlight";
import { Loader } from "../../components/Loader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Container, Header, Icon } from "./styles";

import { env } from '../../env/index'
import { Toast } from "react-native-toast-notifications";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${env.baseUrl}/user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: username,
          email: email,
          senha: password
        })
      });
  
      const json = await response.json();
      const status = response.status;
  
      if (status === 201) {
        Toast.show(json.message, { type: 'success'});
      } else {
        Toast.show(json.message, { type: 'danger'});
      }
    } catch (error) {
      Toast.show(error.message, { type: 'danger'});
    } finally {
      setLoading(false);
      navigation.navigate('SignIn');
    }
  }, [email, password]);

  return (
    <Container>

      <Highlight alignItems="center" title="Sign up" />

      <Input
        keyboardType="default"
        placeholder="Username"
        autoComplete="name"
        returnKeyType="next"
        onChangeText={setUsername}
      />

      <Input
        keyboardType="email-address"
        placeholder="E-mail"
        autoComplete="email"
        returnKeyType="next"
        onChangeText={setEmail}
      />

      <Input
        keyboardType="default"
        placeholder="Password"
        keyboardAppearance="default"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

    { loading ? 
      <Loader/> : 
      <Button 
        title="Criar conta"
        disabled={loading}
        onPress={handleSignUp} 
        /> 
      }

      <ButtonIcon
        icon={CaretLeft}
        iconSize={33}
        iconColor="#FFF"
        style={{ paddingTop: 20 }}
        onPress={() => navigation.navigate('SignIn')}
      />

    </Container>
  );
};
