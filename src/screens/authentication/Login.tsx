import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {BottomSheet, Container} from '@components';
import {AuthNavProps} from 'types/navigation.types';
import {
  Black,
  Button,
  RoyalBlue600,
  SmallText,
  White,
  iOS,
  isAndroid,
  ms,
} from '@common';
import logoBanner from 'assets/images/logo-text-banner.png';
import {setStatusBar, apiService, height} from '@utils';

interface Errors {
  email: {message: string} | null;
  password: {message: string} | undefined;
}

const Login = ({navigation}: AuthNavProps) => {
  const refRBSheet = useRef();

  const [errors, setErrors] = useState<Errors>({
    email: null,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(true);

  useEffect(() => {
    setStatusBar(RoyalBlue600);
  }, []);

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
        <View>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current?.close();
            }}>
            <SmallText text="cancel" style={{}} />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  button: {backgroundColor: White},
});

export default Login;
