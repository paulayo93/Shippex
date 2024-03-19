import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {BottomSheet, Container} from '@components';
import {AuthNavProps} from 'types/navigation.types';
import {
  Black,
  Button,
  DeepDenin600,
  Grey400,
  HeaderText,
  Input,
  RitualCyan200,
  RitualCyan500,
  RoyalBlue600,
  SmallText,
  White,
  iOS,
  isAndroid,
  ms,
} from '@common';
import logoBanner from 'assets/images/logo-text-banner.png';
import {setStatusBar, apiService, height, postLogin, toast} from '@utils';
import {useAppDispatch, userLogin} from '@store';

interface Errors {
  email: {message: string} | null;
  password: {message: string} | undefined;
}

const Login = ({navigation}: AuthNavProps) => {
  const refRBSheet = useRef();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({
    email: null,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(true);
  const dispatch = useAppDispatch();

  const handleBlur = () => {
    if (!!userEmail && !!userPassword && userPassword.length > 4) {
      setHasErrors(false);
      setErrors(prevErrors => ({
        ...prevErrors,
        email: undefined,
        password: undefined,
      }));
    } else {
      setHasErrors(true);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    apiService(postLogin, 'post', {
      usr: userEmail,
      pwd: userPassword,
    })
      .then(data => {
        toast(data.message, 'success');
        console.log('Login Data  ', data);
        dispatch(userLogin({...data.message, isAuthenticated: true}));
      })
      .catch(err => {
        console.log('login err', err);
        toast(err?.message, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setStatusBar(RoyalBlue600);
  }, []);

  useEffect(() => {
    handleBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail, userPassword]);

  return (
    <Container
      backgroundColor={RoyalBlue600}
      padded={true}
      light={true}
      statusBarBgColor={''}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logoBanner} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            text="Login"
            textStyle={styles.buttonText}
            style={styles.button}
            onPress={() => {
              refRBSheet.current?.open();
            }}
          />
        </View>
      </View>
      <BottomSheet
        ref={refRBSheet}
        onClose={() => {
          setStatusBar(RoyalBlue600, 'light-content');
        }}
        onOpen={() => {
          setStatusBar(Black, 'light-content');
        }}
        height={iOS ? height - 70 : height - 80}
        style={undefined}>
        <View style={modalStyles.container}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current?.close();
            }}>
            <SmallText text="Cancel" style={modalStyles.cancel} />
          </TouchableOpacity>

          <View style={{marginTop: 5}}>
            <HeaderText text="Login" style={modalStyles.login} />
            <SmallText
              style={{fontSize: 17, color: RitualCyan500, lineHeight: 24}}
              text="Please enter your First, Last name and your phone number in order
              to register"
            />
          </View>

          <View style={{flex: 1}}>
            <Input
              containerStyle={{marginTop: 24}}
              placeholder="Username / Email"
              onChangeText={setUserEmail}
              error={undefined}
              handleBlur={handleBlur}
            />

            <Input
              containerStyle={{marginTop: 24}}
              placeholder="Password"
              onChangeText={setUserPassword}
              error={undefined}
              secureTextEntry={true}
              handleBlur={handleBlur}
            />
          </View>

          <View style={styles.loginActionWrapper}>
            <Button
              disabled={hasErrors}
              isLoading={isLoading}
              text="Login"
              textStyle={[
                styles.buttonText,
                {color: hasErrors ? Grey400 : White},
              ]}
              style={{
                backgroundColor: hasErrors ? RitualCyan200 : RoyalBlue600,
                width: 350,
              }}
              onPress={handleLogin}
            />
          </View>
        </View>
      </BottomSheet>
    </Container>
  );
};

const modalStyles = StyleSheet.create({
  container: {paddingHorizontal: ms(16), flex: 1},
});

const styles = StyleSheet.create({
  login: {
    fontSize: ms(34),
    fontFamily: 'Inter-SemiBold',
    lineHeight: 41,
    textAlign: 'left',
    marginBottom: 5,
  },
  cancel: {
    fontSize: ms(17),
    lineHeight: 22,
    color: DeepDenin600,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoWrapper: {flex: 1, justifyContent: 'center'},
  logo: {width: ms(207.63), height: ms(36)},
  buttonWrapper: {marginBottom: isAndroid ? 30 : 20},
  buttonText: {
    color: RoyalBlue600,
    fontFamily: 'Inter-Bold',
    fontSize: ms(17),
    lineHeight: 22,
  },
  loginActionWrapper: {marginBottom: iOS ? 40 : 30},
  button: {backgroundColor: White},
});

export default Login;
