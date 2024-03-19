import {SmallText} from '@common';
import {Container} from '@components';
import React from 'react';
import {View} from 'react-native';

const Profile = () => {
  return (
    <Container padded={true}>
      <View>
        <SmallText text="Profile Screen" />
      </View>
    </Container>
  );
};
export default Profile;
