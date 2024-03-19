import {Status} from '@components';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  ms,
  SemiBoldText,
  SmallText,
  RitualCyan100,
  RitualCyan700,
  RitualCyan500,
  capitalize,
} from '@common';
import {LeftIconSmall} from 'assets/icons/icons';
import unchecked from 'assets/images/unchecked.png';
import checked from 'assets/images/checked.png';
import box from 'assets/images/box.png';
import expand from 'assets/images/expand.png';

const shipmentStyles = StyleSheet.create({
  container: {
    backgroundColor: RitualCyan100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  box: {width: ms(40), height: ms(40)},
  detailContainer: {marginHorizontal: 5},
  awb: {fontSize: 13, color: RitualCyan700},
  trackingNumber: {fontSize: 18},
  destinationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fromText: {color: RitualCyan500, fontSize: 13},
  expand: {width: 24, height: 24},
  checkbox: {width: ms(16.6666), height: ms(16)},
});

const ShipmentCard = ({name, origin_city, destination_city, isChecked}) => {
  const [toggleCheck, setToggleCheck] = useState(false);
  let onToggleCheck = () => {
    setToggleCheck(!toggleCheck);
  };
  useEffect(() => {
    setToggleCheck(isChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <View style={shipmentStyles.container}>
      <View>
        <TouchableOpacity onPress={() => onToggleCheck()}>
          <View
            style={{
              marginRight: 10,
            }}>
            <Image
              style={shipmentStyles.checkbox}
              source={toggleCheck ? checked : unchecked}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image style={shipmentStyles.box} source={box} />
      </View>

      <View style={shipmentStyles.detailContainer}>
        <SmallText style={shipmentStyles.awb} text="AWB" />
        <SemiBoldText style={shipmentStyles.trackingNumber} text={name} />
        <View style={shipmentStyles.destinationContainer}>
          <SmallText
            style={shipmentStyles.fromText}
            text={capitalize(origin_city)}
          />
          <LeftIconSmall />
          <SmallText
            text={capitalize(destination_city)}
            style={shipmentStyles.fromText}
          />
        </View>
      </View>

      <Status />

      <View>
        <Image style={shipmentStyles.expand} source={expand} />
      </View>
    </View>
  );
};

export default ShipmentCard;
