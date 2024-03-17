import {Container, Content, Header} from '@components';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  ms,
  SemiBoldText,
  SmallText,
  SearchInputBox,
  BgGray,
  TextButton,
  RitualCyan100,
  Blue100,
  RoyalBlue600,
  White,
} from '@common';

const Title = () => (
  <View style={styles.titleWrapper}>
    <SmallText text="Hello," style={styles.smallText} />
    <SemiBoldText text="Ibrahim Shaker" style={styles.semiBoldText} />
  </View>
);

const ShipmentScreen = () => {
  return (
    <Container padded={true} light={false}>
      <Content style={{paddingTop: ms(15)}}>
        <Header />
        <Title />
        <View style={styles.searchWrapper}>
          <SearchInputBox
            placeholder="Search"
            // value={'Text'}
            onChange={value => console.log(value)}
            style={{backgroundColor: RitualCyan100}}
          />
        </View>
        <View style={styles.actionWrapper}>
          <TextButton text={'Filters'} onPress={() => null} />
          <TextButton
            text={'Add Scan'}
            style={{backgroundColor: RoyalBlue600}}
            textStyle={{color: White}}
            icon={require('../../../assets/images/scan.png')}
            onPress={() => null}
          />
        </View>
        <View>
          <View>
            <SmallText text="AWB" />
            <SemiBoldText text="41785691423" />
            <SmallText text="Cairo" />
            <SmallText text="Alexandria" />
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchWrapper: {
    paddingVertical: ms(24),
  },
  titleWrapper: {
    marginTop: ms(25),
  },
  smallText: {
    opacity: 0.6,
  },
  semiBoldText: {
    fontSize: ms(28),
  },
});
export default ShipmentScreen;
