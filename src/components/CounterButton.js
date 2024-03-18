import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CounterButton = ({counter, setCounter}) => {
  return (
    <View
      style={{
        height: 30,
        width: 70,
        borderWidth: 1,
        borderColor: 'rgba(244, 95, 101, 1)',
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        onPress={() => (counter > 0 ? setCounter(counter - 1) : null)}
        style={styles.text}>
        -
      </Text>
      <Text style={[styles.text, {color: 'rgba(0, 0, 0, 1)', fontSize: 14}]}>
        {counter}
      </Text>
      <Text onPress={() => setCounter(counter + 1)} style={styles.text}>
        +
      </Text>
    </View>
  );
};

export default CounterButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: 'rgba(244, 95, 101, 1)',
  },
});
