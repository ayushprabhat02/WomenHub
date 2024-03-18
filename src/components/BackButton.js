import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BackButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/Back.png')}
        style={{
          width: 45,
          height: 45,
          marginVertical: 45,
          marginLeft: 26,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
