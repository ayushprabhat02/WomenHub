import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const CreateAcountScreen = props => {
  const {navigation, route} = props;
  const {screenOption} = route.params;
  console.log('-----navigation------', navigation);

  return (
    <View style={styles.container}>
      {/* back Button */}
      <BackButton onPress={() => navigation.goBack()} />

      {/* title */}
      <Text style={styles.title}>Let’s Get Started</Text>

      {/* group of btns*/}
      <View
        style={{
          marginTop: '30%',
          height: 180,
          // backgroundColor: 'green',
          justifyContent: 'space-evenly',
        }}>
        <Button
          btnStyle={[
            styles.facebookBtn,
            {backgroundColor: 'rgba(66, 103, 178, 1)'},
          ]}
          onPress={() => {}}
          title="Facebook"
          iconImageSrc={require('../../assets/facebook.png')}
        />
        <Button
          btnStyle={[
            styles.facebookBtn,
            {backgroundColor: 'rgba(29, 161, 242, 1)'},
          ]}
          onPress={() => {}}
          title="Twitter"
          iconImageSrc={require('../../assets/twitter.png')}
        />
        <Button
          btnStyle={[
            styles.facebookBtn,
            {backgroundColor: 'rgba(234, 67, 53, 1)'},
          ]}
          onPress={() => {}}
          title="Google"
          iconImageSrc={require('../../assets/google.png')}
        />
      </View>

      {/* footer text */}
      <Text style={styles.text}>
        Already have an account?{' '}
        <Text
          style={{color: 'rgba(29, 30, 32, 1)', fontWeight: '600'}}
          onPress={() =>
            navigation.navigate('Login', {screenOption: screenOption})
          }>
          Signin
        </Text>
      </Text>

      {/* main btn */}
      <Button
        btnStyle={{position: 'absolute'}}
        onPress={() =>
          navigation.navigate('Register', {screenOption: screenOption})
        }
        title="Create an Account"
      />
    </View>
  );
};

export default CreateAcountScreen;

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
