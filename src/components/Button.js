import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  title,
  btnStyle,
  textStyle,
  iconImageSrc,
  onPress = () => {},
  newPrice,
  oldPrice,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          height: 77,
          backgroundColor: 'rgba(15, 15, 15, 1)',
          width: '100%',
          bottom: 0,
          paddingHorizontal: 30,
          justifyContent: newPrice ? 'space-between' : 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        btnStyle,
      ]}>
      {iconImageSrc && (
        <Image
          source={iconImageSrc}
          style={{
            width: 22,
            height: 22,
            marginRight: 4,
          }}
          resizeMode="center"
        />
      )}
      {newPrice && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/rupee.png')}
            style={{width: 15, height: 15}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              color: 'rgba(255, 255, 255, 1)',
              paddingLeft: 2,
              paddingRight: 10,
            }}>
            {newPrice}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 14,
              color: 'rgba(255, 255, 255, 1)',
              textDecorationLine: 'line-through',
            }}>
            {oldPrice}
          </Text>
        </View>
      )}

      <Text
        style={[
          {
            color: 'rgba(254, 254, 254, 1)',
            fontFamily: 'Inter-SemiBold',
            fontSize: 17,
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
