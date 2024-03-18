import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  setTimeout(() => {
    navigation.replace('OnboardingScreen');
  }, 3000);

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../assets/splashImage.png')}
        style={{width: width, height: height, backgroundColor: '#EAC5C6'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
