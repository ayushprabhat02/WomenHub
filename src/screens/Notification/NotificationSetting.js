import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../components/Header';
import MenuButtton from '../../components/MenuButtton';
import SwitchComponent from '../../components/SwitchComponent';

const NotificationSetting = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        onPress={() => navigation.goBack()}
        onPressOnRightBtn={() => navigation.navigate('NotificationSetting')}
        headerTitle={'Notifications Setting'}
        leftIconBackground={'rgba(255, 223, 224, 1)'}
        leftImgSrc={require('../../../assets/backMenuArrow.png')}
        rightImgSrc={require('../../../assets/Settings.png')}
      />

      {/* body */}
      <View
        style={{
          //   height: 324,
          backgroundColor: 'rgba(245, 246, 250, 1)',
          marginTop: 36,
          borderRadius: 20,
          justifyContent: 'center',
          paddingBottom: 36,
        }}>
        <SwitchComponent label="Calendar Notifications" />
        <SwitchComponent label="Tips Notifications" />
        <SwitchComponent label="Message Notifications" />
        <SwitchComponent label="Service Notifications" />
        <SwitchComponent label="Payment Notifications" />
        <SwitchComponent label="Sound" />
        <SwitchComponent label="Vibrate" />
        <SwitchComponent label="App Update" />
        <SwitchComponent label="Promo & Discount" />
      </View>
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(231, 232, 234, 1)',
    padding: 30,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
  },
});
