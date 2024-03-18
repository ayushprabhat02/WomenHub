import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MenuButtton from '../components/MenuButtton';
import ImageAvatar from '../components/ImageAvatar';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
import BottomSheet from '../components/BottomSheet';
import DiscountCard from '../components/DiscountCard';
import PreferedCard from '../components/PreferedCard';

const Home = props => {
  const {navigation, screenOption} = props;

  console.log('screenOption======', screenOption);

  const [isModalOpen, setIsModelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (screenOption === 'LOGGED_IN') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#E7E8EA', zIndex: -2}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingTop: 30,
        }}>
        <MenuButtton
          styles={{width: 45, height: 45}}
          imgSrc={require('../../assets/menu.png')}
          backgroundColor={'rgba(255, 223, 224, 1)'}
        />
        <MenuButtton
          styles={{width: 45, height: 45}}
          imgSrc={require('../../assets/Bag.png')}
          backgroundColor={'rgba(245, 246, 250, 1)'}
        />
      </View>

      <Text
        style={{
          paddingTop: 24,
          fontSize: isLoggedIn ? 20 : 28,
          fontFamily: isLoggedIn ? 'Montserrat-Bold' : 'Montserrat-SemiBold',
          color: 'rgba(29, 30, 32, 1)',
          lineHeight: 30,
          paddingHorizontal: 30,
        }}>
        {isLoggedIn ? 'Hi, Robert' : 'The Beauty'}
      </Text>

      <Text
        style={{
          paddingTop: 5,
          fontSize: 15,
          fontFamily: 'Inter-Regular',
          fontWeight: '400',
          color: 'rgba(143, 149, 158, 1)',
          lineHeight: 16,
          paddingBottom: 20,
          paddingHorizontal: 30,
        }}>
        Welcome to Womenhub.
      </Text>

      {/* image avatar */}
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 28,
          paddingHorizontal: 30,
        }}>
        <ImageAvatar
          backgroundColor={'rgba(244, 95, 101, 1)'}
          title="Makeup(5)"
          titleColor={'rgba(1, 0, 53, 1)'}
          imgSrc={require('../../assets/Rectangle.png')}
        />
        <ImageAvatar
          backgroundColor={'rgba(255, 255, 255, 1)'}
          title="Hair(5)"
          titleColor={'rgba(1, 0, 53, 1)'}
          imgSrc={require('../../assets/Rectangle.png')}
        />
        <ImageAvatar
          backgroundColor={'rgba(255, 255, 255, 1)'}
          title="Skin(5)"
          titleColor={'rgba(1, 0, 53, 1)'}
          imgSrc={require('../../assets/Rectangle.png')}
        />
        <ImageAvatar
          backgroundColor={'rgba(255, 255, 255, 1)'}
          title="Nail(5)"
          titleColor={'rgba(1, 0, 53, 1)'}
          imgSrc={require('../../assets/Rectangle.png')}
        />
      </View>
      {/* Search box */}
      <View style={{paddingHorizontal: 30}}>
        <SearchBox
          mic
          setIsModelOpen={setIsModelOpen}
          imgSrc={require('../../assets/Filter.png')}
        />
      </View>
      {/* bottomsheet */}
      {isModalOpen && <BottomSheet setIsModelOpen={setIsModelOpen} />}

      <ScrollView>
        {/* Discount card */}
        <DiscountCard />

        {/* Prefered Card */}
        {isLoggedIn ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 30,
                paddingTop: 30,
                marginBottom: 20,
              }}>
              <Text style={styles.preferredText}>Preferred</Text>
              <Text style={styles.viewAllText}>View All</Text>
            </View>
            <PreferedCard />
          </>
        ) : (
          <View style={{paddingHorizontal: 30}}>
            <Card />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  preferredText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#1C1C1C',
  },
  viewAllText: {
    fontFamily: 'Montserrat-Regular',
    color: '#1C1C1CD4',
    fontSize: 14,
  },
});
