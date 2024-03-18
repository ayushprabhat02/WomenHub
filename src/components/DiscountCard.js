import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

const DiscountCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Get <Text style={{color: 'rgba(244, 95, 101, 1)'}}>25%</Text>
        </Text>
        <Text style={styles.description}>
          Voucher for your next haircut services
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
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/discountImage.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default DiscountCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
    height: 142,
    backgroundColor: '#F5F6FA',
    borderRadius: 14,
    flexDirection: 'row',
    overflow: 'hidden', // Prevents overflow of child views
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1, // Takes remaining space in the row
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: '#000',
    fontWeight: '600',
  },
  description: {
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    lineHeight: 20,
  },
  imageContainer: {
    width: 160,
    // backgroundColor: 'green',
  },
});
