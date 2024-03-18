import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import MenuButtton from '../components/MenuButtton';
import ProfileHeader from '../components/ProfileHeader';
import Button from '../components/Button';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*Profile Header */}
      <View style={{marginBottom: 30}}>
        <ProfileHeader />
      </View>
      {/* body */}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'rgba(245, 246, 250, 1)',
          borderRadius: 20,
          padding: 24,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>My orders</Text>
            <Text style={styles.description}>Already have 12 orders</Text>
          </View>
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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>Shipping addresses</Text>
            <Text style={styles.description}>3 ddresses</Text>
          </View>
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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>Payment methods</Text>
            <Text style={styles.description}>Visa **34</Text>
          </View>
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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>Promocodes</Text>
            <Text style={styles.description}>You have special promocodes</Text>
          </View>

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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>Notification</Text>
            <Text style={styles.description}>3 notification</Text>
          </View>

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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>My reviews</Text>
            <Text style={styles.description}>Reviews for 4 items</Text>
          </View>

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
            height: 72,
          }}>
          <View>
            <Text style={styles.text}>Settings</Text>
            <Text style={styles.description}>Name, email, password</Text>
          </View>

          <MenuButtton
            imgSrc={require('../../assets/forwardArrow.png')}
            backgroundColor={'rgba(255, 223, 224, 1)'}
          />
        </View>

        {/* Logount Btn */}
        <Button
          title={'Logout'}
          btnStyle={{backgroundColor: '#F5F6FA'}}
          textStyle={{color: '#F45F65', fontFamily: 'Montserrat-Regualr'}}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(231, 232, 234, 1)',
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 50,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#1A1D1F',
  },
  description: {
    color: '#9B9B9B',
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    paddingTop: 5,
  },
});
