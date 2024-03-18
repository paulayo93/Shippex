import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ms, SemiBoldText, SmallText, RoyalBlue600} from '@common';
import unchecked from 'assets/images/unchecked.png';
import checked from 'assets/images/checked.png';

const lisHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: ms(16),
  },
  headerText: {fontSize: ms(22)},
  actionContainer: {flexDirection: 'row', alignItems: 'center'},
  actionText: {fontSize: ms(18), color: RoyalBlue600, marginLeft: 5},
});
const ShipmentListHeader = ({isChecked, onPress}) => {
  return (
    <View style={lisHeaderStyles.container}>
      <SemiBoldText style={lisHeaderStyles.headerText} text="Shipments" />
      <View style={lisHeaderStyles.actionContainer}>
        <View>
          <TouchableOpacity onPress={() => onPress()}>
            <View
              style={{
                marginRight: 5,
              }}>
              <Image
                style={{width: ms(20.4455), height: ms(20.33)}}
                source={isChecked ? checked : unchecked}
              />
            </View>
          </TouchableOpacity>
        </View>
        <SmallText style={lisHeaderStyles.actionText} text="Mark All" />
      </View>
    </View>
  );
};

export default ShipmentListHeader;
