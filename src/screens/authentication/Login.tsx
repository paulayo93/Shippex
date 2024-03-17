import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {Container, Content} from '@components';
import {AuthNavProps} from 'types/navigation.types';
// import {apiService} from 'utils';

interface Errors {
  email: {message: string} | null;
  password: {message: string} | undefined;
}

const Login = ({navigation}: AuthNavProps) => {
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({
    email: null,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(true);

  return (
    <Container padded={true} scroll={false} light={false} statusBarBgColor={''}>
      <Content>
        <View>
          <Text>Login</Text>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
