import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Content, Title } from './styles';

import { authRequest } from '../../store/modules/auth/actions';

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const contentInputRef = useRef<TextInput>(null);
  const authorInputRef = useRef<TextInput>(null);

  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().email().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await dispatch(authRequest(data));

        // Alert.alert('Cadastro realizado com sucesso!');

        // navigation.navigate('Main');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Content>
            <Title>Login</Title>

            <Form ref={formRef} onSubmit={handleLogin}>
              <Input
                autoCapitalize="none"
                name="username"
                placeholder="Usuário"
                returnKeyType="next"
                onSubmitEditing={() => {
                  contentInputRef.current?.focus();
                }}
              />

              <Input
                ref={contentInputRef}
                autoCapitalize="none"
                name="password"
                placeholder="Senha"
                returnKeyType="next"
                secureTextEntry
                onSubmitEditing={() => {
                  authorInputRef.current?.focus();
                }}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                ENTRAR
              </Button>
            </Form>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
