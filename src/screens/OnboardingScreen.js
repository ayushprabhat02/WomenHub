import React, {useState, useRef} from 'react';
import {FlatList, View, Text} from 'react-native';
import Onboarding from '../components/Onboarding';
import Slides from '../db/Slides';
import NextButton from '../components/NextButton';

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else navigation.navigate('Welcome');
  };

  const slidesRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E0D1D836',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 0.82}}>
        <FlatList
          ref={slidesRef}
          data={Slides}
          renderItem={({item}) => <Onboarding item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true} // Enable vertical scrolling inside FlatList
          pagingEnabled={true} // Enable paging for better horizontal scrolling
          keyExtractor={item => item.id.toString()}
          bounces={false}
          onViewableItemsChanged={viewableItemsChanged}
        />
      </View>

      {/* skip and nextBtn */}
      <View
        style={{
          flex: 0.18,
          paddingHorizontal: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          bottom: 10,
        }}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{
            paddingLeft: 32,
            fontSize: 16,
            fontWeight: '400',
            fontFamily: '',
            color: '#00000040',
            lineHeight: 21,
          }}>
          Skip
        </Text>
        <NextButton
          percentage={(currentIndex + 1) * (100 / Slides.length)}
          scrollTo={scrollTo}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
