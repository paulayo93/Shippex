import {Container, Header} from '@components';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {
  ms,
  SearchInputBox,
  TextButton,
  RitualCyan100,
  RoyalBlue600,
  White,
} from '@common';
import scan from 'assets/images/scan.png';
import {apiService, getShipmentsList} from '@utils';
import {ShipmentListHeader, Title, ShipmentCard} from './partials';

const ShipmentScreen = () => {
  const [shipmentList, setShipmentList] = useState([]);
  const [toggleMarkAll, setToggleMarkAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const markAll = () => {
    let temporaryList = [];
    setToggleMarkAll(!toggleMarkAll);
    for (let i = 0; i < shipmentList.length; i++) {
      let item = shipmentList[i];
      if (!item.isChecked) {
        temporaryList.push({...item, isChecked: true});
      } else if (item.isChecked) {
        temporaryList.push({...item, isChecked: false});
      }
    }
    setShipmentList(temporaryList);
  };
  const getShipmentData = async () => {
    setIsLoading(true);
    try {
      const data = await apiService(getShipmentsList, 'get');

      if (data.message.length) {
        setIsLoading(false);

        setShipmentList(data.message);
      }
    } catch (err) {
      setIsLoading(false);
      console.log('Log error message', err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier

    getShipmentData();
  }, []);
  return (
    <Container padded={true} light={false}>
      <View style={styles.content}>
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
            icon={scan}
            onPress={() => null}
          />
        </View>
        <ShipmentListHeader isChecked={toggleMarkAll} onPress={markAll} />
        <View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => {
                  setToggleMarkAll(false);
                  getShipmentData();
                }}
              />
            }
            data={shipmentList}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View style={{paddingBottom: ms(12)}}>
                  <ShipmentCard
                    key={item.name}
                    name={item.name}
                    origin_city={item.origin_city}
                    destination_city={item.destination_city}
                    isChecked={item.isChecked}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {paddingVertical: ms(20)},
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchWrapper: {
    paddingVertical: ms(24),
  },
  smallText: {
    opacity: 0.6,
  },
  semiBoldText: {
    fontSize: ms(28),
  },
});
export default ShipmentScreen;
