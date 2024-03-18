import {StyleSheet, TextInput, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

const Input = ({
  label,
  error,
  password,
  userStatus = true,
  passwordCheck = true,
  passwordStatusLabel = 'Strong',
  onFocus = () => {},
  ...props
}) => {
  const [username, setUsername] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '400',
          color: 'rgba(143, 149, 158, 1)',
          lineHeight: 14,
          fontFamily: 'Inter-Regular',
          paddingLeft: 4,
        }}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type Here..."
        onChangeText={text => setUsername(text)}
        value={username}
        onFocus={() => onFocus()}
        {...props}
      />
      {userStatus && !password && (
        <Image
          source={require('../../assets/check.png')}
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
          resizeMode="contain"
        />
      )}
      {password && passwordCheck && (
        <Text
          style={{
            color: 'rgba(52, 197, 89, 1)',
            position: 'absolute',
            right: 0,
            bottom: 0,
            fontFamily: 'Inter-Regular',
            fontSize: 11,
            fontWeight: '400',
          }}>
          {passwordStatusLabel}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    height: 61,
    justifyContent: 'flex-start',
    paddingTop: 20,
    marginBottom: 20,
    marginLeft: 42,
    marginRight: 37,
    // backgroundColor: 'green',
  },
  input: {
    paddingTop: 6, // Adjust the paddingTop value as needed
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(231, 232, 234, 1)',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '500',
    fontSize: 15,
    color: 'rgba(29, 30, 32, 1)',
  },
});
