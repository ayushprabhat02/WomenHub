import {View, Text, Image} from 'react-native';
import React from 'react';

const Ratting = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../assets/star.png')}
        style={{width: 16, height: 16, marginRight: 5}}
        resizeMode="stretch"
      />
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 15,
          color: 'rgba(111, 118, 126, 1)',
        }}>
        <Text style={{color: 'rgba(26, 29, 31, 1)', fontWeight: '700'}}>
          4.5
        </Text>{' '}
        (4.2M bookings)
      </Text>
    </View>
  );
};

export default Ratting;
