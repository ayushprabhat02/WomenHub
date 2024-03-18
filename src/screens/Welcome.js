import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeCard from '../components/WelcomeCard';

const Welcome = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 140,
        backgroundColor: 'rgba(248, 248, 248, 1)',
        paddingHorizontal: 34,
      }}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 36,
          color: 'rgba(0, 0, 0, 1)',
          textAlign: 'center',
          marginBottom: 118,
        }}>
        WOMEN<Text style={{color: 'rgba(244, 95, 101, 1)'}}>HUB</Text>
      </Text>
      <WelcomeCard navigation={navigation} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
