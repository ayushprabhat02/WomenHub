import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const WelcomeCard = ({navigation}) => {
  const [screenOption, setScreenOption] = useState();

  const handleServiceProvider = () => {
    const option = 'SERVICE_PROVIDER';
    setScreenOption(option);
    navigateToCreateAccount(option);
  };

  const handleLogedIn = () => {
    const option = 'LOGGED_IN';
    setScreenOption(option);
    navigateToCreateAccount(option);
  };

  const navigateToCreateAccount = option => {
    navigation.navigate('CreateAcountScreen', {screenOption: option});
  };

  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 244,
        borderRadius: 10,
        justifyContent: 'center',
      }}>
      <Text style={styles.title}>Look Good, Feel Good</Text>
      <Text style={styles.text}>
        Create your individual & unique style and look amazing everyday.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
          onPress={handleServiceProvider}
          btnStyle={styles.btnStyle}
          title="Service Provider"
          textStyle={styles.btnTextStyle}
        />
        <Button
          onPress={handleLogedIn}
          btnStyle={[
            styles.btnStyle,
            {backgroundColor: 'rgba(244, 95, 101, 1)'},
          ]}
          title="Women"
          textStyle={[styles.btnTextStyle, {color: 'rgba(255, 255, 255, 1)'}]}
        />
      </View>
      <TouchableOpacity onPress={handleLogedIn}>
        <Text
          style={[styles.btnTextStyle, {textAlign: 'center', marginTop: 20}]}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(29, 30, 32, 1)',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: 'rgba(143, 149, 158, 1)',
    textAlign: 'center',
  },
  btnStyle: {
    width: 152,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 246, 250, 1)',
    position: 'relative',
  },
  btnTextStyle: {
    color: 'rgba(143, 149, 158, 1)',
    fontFamily: 'Inter-Regualar',
  },
});
