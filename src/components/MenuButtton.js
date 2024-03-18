import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MenuButtton = ({imgSrc, backgroundColor, styles, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          width: 30,
          height: 30,
          borderRadius: 30,
        },
        styles,
      ]}>
      <Image
        source={imgSrc}
        style={{
          width: 24,
          height: 24,
        }}
        resizeMode="center"
      />
    </TouchableOpacity>
  );
};

export default MenuButtton;

const styles = StyleSheet.create({});
