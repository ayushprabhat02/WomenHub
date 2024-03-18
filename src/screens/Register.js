import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Input from '../components/Input';
import SwitchComponent from '../components/SwitchComponent';

const Register = props => {
  const {navigation, route} = props;
  const {screenOption} = route.params;
  return (
    <View style={styles.container}>
      {/* back Button */}
      <BackButton onPress={() => navigation.goBack()} />

      {/* title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* group of btns*/}
      <View style={{marginTop: '26%'}}>
        <Input label="Username" />
        <Input label="Password" password />
        <Input label="Email Address" />
      </View>

      {/* switch */}
      <SwitchComponent
        styles={{
          paddingLeft: 44,
        }}
        trueColor="#34C759"
      />

      {/* main btn */}
      <Button
        btnStyle={{position: 'absolute'}}
        onPress={() => navigation.navigate('Register')}
        title="Sign Up"
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(29, 30, 32, 1)',
    lineHeight: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: 'rgba(143, 149, 158, 1)',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 145,
  },
  facebookBtn: {
    marginHorizontal: 40,
    width: 'auto',
    height: 50,
    borderRadius: 10,
  },
});
