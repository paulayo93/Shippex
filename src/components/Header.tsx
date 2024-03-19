import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ms} from '@common';
import avatar from 'assets/images/avatar.png';
import notification from 'assets/images/notification.png';
const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View>
        <Image style={styles.avatarImage} source={avatar} />
      </View>
      <View>
        <Image
          style={styles.logoHeader}
          source={require('../../assets/images/logo-header.png')}
        />
      </View>
      <View>
        <Image style={styles.avatarImage} source={notification} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImage: {
    width: ms(40),
    height: ms(40),
  },
  logoHeader: {
    width: ms(95.16),
    height: ms(16),
    marginTop: 3,
  },
});
export default Header;
