import React, { useState, useCallback } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/Highlight";
import { Loader } from "../../components/Loader";
import { Container, Header, Icon } from "./styles";

import { useAuth } from "../../hooks/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      setLoading(true);
      await signIn({ email, password });
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn]);

  return (
    <Container>
      <Header>
        <Icon />
      </Header>

      <Highlight alignItems="center" title="Sign in" />

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

      { loading ? <Loader/> : <Button title="Sign in" onPress={handleSignIn} disabled={loading} /> }
    </Container>
  );
};
