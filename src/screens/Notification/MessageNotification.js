import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import MessageNotificationCard from '../../components/MessageNotificationCard';

const MessageNotification = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        onPress={() => navigation.goBack()}
        headerTitle={'Message Notifications'}
        leftIconBackground={'rgba(255, 223, 224, 1)'}
        leftImgSrc={require('../../../assets/backMenuArrow.png')}
        rightImgSrc={require('../../../assets/dots-vertical.png')}
      />
      <Text style={[styles.preferredText, {paddingTop: 16}]}>Today</Text>
      <MessageNotificationCard
        title="Today’s Special Offers"
        message="You Have made a Payment..."
        iconSource={require('../../../assets/ICON.png')}
      />
      <Text style={styles.preferredText}>Yesterday</Text>
      <MessageNotificationCard
        title="Credit card connected"
        message="Credit card has been linked..."
        iconSource={require('../../../assets/Fill1.png')}
      />
      <Text style={styles.preferredText}>Nov 22, 2023</Text>
      <MessageNotificationCard
        title="Email verified"
        message="Your email has been linked to..."
        iconSource={require('../../../assets/Fill2.png')}
      />
      <MessageNotificationCard
        title="Account Setup Successful !"
        message="Your account has been Created.."
        iconSource={require('../../../assets/Fill2.png')}
      />
    </View>
  );
};

export default MessageNotification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E8EA',
    flex: 1,
    padding: 30,
  },
  preferredText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#1C1C1C',
    marginTop: 10,
    marginBottom: 16,
  },
});
