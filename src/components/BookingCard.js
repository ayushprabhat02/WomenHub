import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CounterButton from './CounterButton';
import Ratting from './Ratting';

const BookingCard = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        height: 216,
        backgroundColor: 'rgba(242, 243, 247, 1)',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 40,
      }}>
      <View
        style={{
          justifyContent: 'space-evenly',
          flex: 1,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(242, 243, 247, 1)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'rgba(26, 29, 31, 1)',
              fontFamily: 'Inter-SemiBold',
              fontSize: 16,
              flex: 1,
            }}>
            Full arms + underarms waxing
          </Text>
          <CounterButton counter={counter} setCounter={setCounter} />
        </View>

        <Ratting />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {fontWeight: '700'}]}>
            Starts at 299rs{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: 'rgba(26, 29, 31, 1)',
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <Text style={styles.text}>1 hour 20 mins</Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: 'rgba(26, 29, 31, 1)',
          }}>
          Chocolate & honey wax
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              fontSize: 13,
              fontWeight: '700',
              color: 'rgba(244, 95, 101, 1)',
            }}>
            View Detail
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(26, 29, 31, 1)',
  },
});
