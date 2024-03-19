import {SmallText} from '@common';
import {Container} from '@components';
import React from 'react';
import {View} from 'react-native';

const Scan = () => {
  return (
    <Container padded={true}>
      <View>
        <SmallText text="Scan Screen" />
      </View>
    </Container>
  );
};
export default Scan;
