import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import BackButton from './BackButton';
import SearchBox from './SearchBox';
import Button from './Button';
import Categories from './Categories';
import Slider from './Slider';

const BottomSheet = ({setIsModelOpen}) => {
  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideUp();
  }, []);

  const closeModal = () => {
    slideDown();

    setTimeout(() => {
      setIsModelOpen(false);
    }, 500);
  };

  return (
    <Pressable onPress={closeModal} style={styles.container}>
      <Pressable>
        {/* bottomsheet view */}
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{translateY: slide}],
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 46,
            }}>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('../../assets/backMenuArrow.png')}
                style={{width: 10, height: 16}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingLeft: 22,
                fontFamily: 'Montserrat-Regular',
                fontWeight: '600',
                fontSize: 20,
                color: '#000000',
              }}>
              Filters
            </Text>
          </View>
          <Text style={styles.title}>Location</Text>
          <SearchBox
            containerStyle={{borderRadius: 24}}
            placeholder="add your location"
            imgSrc={require('../../assets/Location.png')}
          />
          {/* Venue Type */}
          <Text style={[styles.title, {paddingTop: 20}]}>Venue Type</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Categories title="Male" />
            <Categories title="Female" />
          </View>
          {/* PRice Range */}
          <Text style={[styles.title, {paddingTop: 20}]}>Price range</Text>
          <Slider />
          {/* Categories */}
          <Text style={[styles.title, {paddingTop: 20}]}>Categories</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Categories title="Hair" />
            <Categories title="Skin" />
            <Categories title="Nail" />
            <Categories title="Facial" />
            <Categories title="Makeup" />
          </View>
          {/* footer btn */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 26,
            }}>
            <Button
              title="Clear All"
              btnStyle={{
                width: 168,
                height: 46,
                paddingHorizontal: 0,
                borderRadius: 10,
                backgroundColor: '#D9D9D9',
              }}
              textStyle={{fontSize: 16, color: '#000000'}}
            />
            <Button
              title="Apply "
              btnStyle={{
                width: 168,
                height: 46,
                paddingHorizontal: 0,
                borderRadius: 10,
              }}
              textStyle={{fontSize: 16}}
            />
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    zIndex: 100, // Adjust this value as needed
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 650,
    width: '100%',
    backgroundColor: '#F1EDEF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#000000',
    paddingBottom: 10,
  },
});
