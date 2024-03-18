import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header';
import MenuButtton from '../components/MenuButtton';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        onPress={() => navigation.goBack()}
        onPressOnRightBtn={() => navigation.navigate('NotificationSetting')}
        headerTitle={'Notifications'}
        leftIconBackground={'rgba(255, 223, 224, 1)'}
        leftImgSrc={require('../../assets/backMenuArrow.png')}
        rightImgSrc={require('../../assets/Settings.png')}
      />

      {/* body */}
      <View
        style={{
          height: 324,
          backgroundColor: 'rgba(245, 246, 250, 1)',
          marginTop: 36,
          borderRadius: 20,
          padding: 24,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Calendar Notifications</Text>
          <MenuButtton
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
            onPress={() => navigation.navigate('CalendarNotification')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Tips Notifications</Text>
          <MenuButtton
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Message Notifications</Text>
          <MenuButtton
            onPress={() => navigation.navigate('MessageNotification')}
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Service Notifications</Text>
          <MenuButtton
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Payment Notifications</Text>
          <MenuButtton
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;

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
