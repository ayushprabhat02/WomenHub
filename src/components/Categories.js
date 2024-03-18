import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Categories = ({title}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => {
    setIsPressed(!isPressed); // Set the press state to true when pressed
  };

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {backgroundColor: isPressed ? '#F45F65' : '#FFFFFF'},
      ]}
      onPressIn={handlePressIn}
      activeOpacity={0.7} // Controls the opacity when pressed
      underlayColor="#BBDEFB" // Sets the background color when pressed
    >
      <Text
        style={[styles.btnText, {color: isPressed ? '#FFFFFF' : '#565656'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#FFFFFF',
    width: 92,
    height: 32,
    borderRadius: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  btnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
});
