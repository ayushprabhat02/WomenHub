import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';

const SwitchComponent = ({
  label = 'Remember me',
  styles,
  trueColor = '#F45F65',
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          paddingTop: 28,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 22,
        },
        styles,
      ]}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Montserrat-Regular',
          fontWeight: '500',
          color: '#000000',
        }}>
        {label}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: trueColor}}
        thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({});
