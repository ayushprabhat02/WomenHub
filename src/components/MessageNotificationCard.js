import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MessageNotificationCard = ({title, message, iconSource}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={iconSource}
          style={{width: 22, height: 22}}
          resizeMode="center"
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 14,
            color: '#202244',
          }}>
          {title}
        </Text>
        <Text
          style={{fontFamily: 'Inter-Regular', fontSize: 14, color: '#545454'}}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default MessageNotificationCard;

const styles = StyleSheet.create({
  container: {
    height: 78,
    backgroundColor: '#F5F6FA',
    marginBottom: 20,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  iconContainer: {
    height: 52,
    width: 52,
    backgroundColor: '#FEFEFE',
    borderRadius: 50,
    elevation: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
