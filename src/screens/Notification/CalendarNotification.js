import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BookingCard from '../../components/BookingCard';
import Button from '../../components/Button';
import CalendarComponent from '../../components/CalendarComponent';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import ImageAvatar from '../../components/ImageAvatar';
import Ratting from '../../components/Ratting';

const imageSrc = [
  {imgSrc: require('../../../assets/notificationSlide1.png')},
  {imgSrc: require('../../../assets/notificationSlide1.png')},
  {imgSrc: require('../../../assets/notificationSlide1.png')},
];

const callendarData = [
  // Monday
  {
    day: 'Mon',
    date: 'Aug 16',
    slots: [
      {
        period: 'Morning',
        time: [
          '9:00',
          '9:15',
          '9:30',
          '9:45',
          '10:00',
          '10:15',
          '10:30',
          '11:00',
        ],
      },
      {period: 'Afternoon', time: ['12:00', '12:15', '12:30']},
      {period: 'Evening', time: ['17:00', '17:15', '17:30']},
    ],
  },

  // Tuesday
  {
    day: 'Tue',
    date: 'Aug 17',
    slots: [
      {period: 'Morning', time: ['9:00', '9:15']},
      {period: 'Afternoon', time: ['12:00', '12:15', '12:30']},
      {period: 'Evening', time: ['17:00', '17:15', '17:30']},
    ],
  },
];

const BookingAppointmentScreen = () => {
  return (
    <ScrollView contentContainerStyle={{marginBottom: 50}}>
      <Text
        style={{
          fontFamily: 'Inter-SemiBold',
          fontSize: 18,
          color: 'rgba(26, 29, 31, 1)',
          marginBottom: 16,
        }}>
        Choose a slot
      </Text>
      <CalendarComponent callendarData={callendarData} />
    </ScrollView>
  );
};

const CalendarNotification = ({navigation}) => {
  const [showBookingAppointment, setShowBookingAppointment] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => navigation.goBack()}
        shareImageSrc={require('../../../assets/ShareBlack.png')}
        leftIconBackground={'rgba(245, 246, 250, 1)'}
        headerStyle={{
          alignItems: 'center',
          position: 'absolute',
          top: 30,
          left: 30,
          right: 30,
          zIndex: 1000,
          elevation: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 280, // Adjust this value according to the height of the header
          padding: 30,
          backgroundColor: 'rgba(231, 232, 234, 1)',
          flexGrow: 1,
          paddingBottom: 80,
        }}>
        {/* carousel */}
        <Carousel imageSrc={imageSrc} />

        {/* Title */}
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 29,
            color: 'rgba(26, 29, 31, 1)',
          }}>
          The Galleria
        </Text>

        {/* Rating */}
        <Ratting />

        {/* discount label */}
        <View style={styles.discountLabel}>
          <Image
            source={require('../../../assets/trophy-02.png')}
            style={{width: 24, height: 24, marginRight: 14}}
            resizeMode="stretch"
          />
          <View>
            <Text style={styles.discountLabelText}>
              Save 15% on your booking & cashback up...
            </Text>
            <Text style={styles.discountLabelTextSecondary}>Get Plus Now</Text>
          </View>
        </View>

        {showBookingAppointment ? (
          <BookingAppointmentScreen />
        ) : (
          <>
            {/* image avatar */}
            <View style={styles.imageAvatarContainer}>
              <ImageAvatar
                backgroundColor={'rgba(244, 95, 101, 1)'}
                title="Makeup(5)"
                titleColor={'rgba(244, 95, 101, 1)'}
                imgSrc={require('../../../assets/Rectangle.png')}
                width={90}
              />
              {/* Add more ImageAvatar components as needed */}
            </View>

            {/* booking card */}
            <BookingCard />
          </>
        )}
      </ScrollView>

      {showBookingAppointment ? (
        <Button
          title="Book Appointment"
          btnStyle={{position: 'absolute'}}
          onPress={() => {}}
        />
      ) : (
        <Button
          title="Continue"
          btnStyle={{position: 'absolute'}}
          newPrice={3016}
          oldPrice={3186}
          onPress={() => setShowBookingAppointment(true)}
        />
      )}
    </View>
  );
};

export default CalendarNotification;

const styles = StyleSheet.create({
  discountLabel: {
    // height: 52,
    backgroundColor: 'rgba(242, 243, 247, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 14,
    marginTop: 22,
    borderRadius: 10,
    marginBottom: 22,
    flex: 1,
  },
  discountLabelText: {
    fontFamily: 'Inter-SemiBold',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
  },
  discountLabelTextSecondary: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 1)',
  },
  imageAvatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 28,
  },
});
