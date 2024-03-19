import {SmallText} from '@common';
import {Container} from '@components';
import React from 'react';
import {View} from 'react-native';

const Wallet = () => {
  return (
    <Container padded={true}>
      <View>
        <SmallText text="Wallet Screen" />
      </View>
    </Container>
  );
};
export default Wallet;
