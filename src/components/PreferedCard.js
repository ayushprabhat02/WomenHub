import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

const PreferedCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/preferedImage.png')}
          style={{width: '100%', height: '100%', borderRadius: 8}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/star.png')}
            style={{width: 15, height: 15, borderRadius: 8, marginRight: 5}}
            resizeMode="cover"
          />
          <Text style={styles.title}>
            4.5 <Text style={{color: '#6F767E'}}>(87)</Text>
          </Text>
        </View>
        <Text style={styles.title2}>The Galleria </Text>
        <Text style={styles.description}>
          6391 Preston st. celina, Delaware....{' '}
        </Text>
        <Button
          title="Book"
          btnStyle={{
            paddingHorizontal: 0,
            height: 24,
            width: 54,
            borderRadius: 6,
            backgroundColor: '#F45F65AB',
          }}
          textStyle={{fontSize: 12, fontFamily: 'Inter-SemiBold'}}
        />
      </View>
    </View>
  );
};

export default PreferedCard;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginHorizontal: 30,
    marginTop: 2,
    height: 124,
    backgroundColor: '#F5F6FA',
    borderRadius: 14,
    flexDirection: 'row',
    overflow: 'hidden', // Prevents overflow of child views
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1, // Takes remaining space in the row
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  title2: {
    color: '#1A1D1F',
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },
  description: {
    color: '#9A9FA5',
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    // backgroundColor: 'green',
  },
});
