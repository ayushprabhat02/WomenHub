import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceRangeSlider = () => {
  const {width} = Dimensions.get('window');
  const [rangeValues, setRangeValues] = useState([0, 100]);
  const [minPrice, maxPrice] = rangeValues;

  const handleValuesChange = values => {
    setRangeValues(values);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.price}>${minPrice}</Text>
        <Text style={styles.price}>${maxPrice}</Text>
      </View>
      <MultiSlider
        values={rangeValues}
        sliderLength={width - 60}
        onValuesChange={handleValuesChange}
        min={0}
        max={100}
        step={1}
        snapped
        selectedStyle={{backgroundColor: '#F44336', height: 3}}
        unselectedStyle={{backgroundColor: '#9B9B9B', height: 3}}
        markerStyle={{
          backgroundColor: '#F45F65',
          alignItems: 'center',
          justifyContent: 'center',
          height: 22,
          width: 22,
          alignItems: 'center',
        }}
        containerStyle={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  price: {fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: '#222222'},
});

export default PriceRangeSlider;
