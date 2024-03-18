import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageAvatar from './ImageAvatar';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <ImageAvatar
        imgSrc={require('../../assets/profile.png')}
        style={{width: 84, height: 84, marginBottom: 10}}
      />
      <View style={{marginLeft: 15}}>
        <Text style={styles.profileNameText}>Matilda Brown</Text>
        <Text style={styles.profileEmailText}>matildabrown@mail.com</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileNameText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#F45F65',
    lineHeight: 22,
  },
  profileEmailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#9B9B9B',
    lineHeight: 22,
  },
});
