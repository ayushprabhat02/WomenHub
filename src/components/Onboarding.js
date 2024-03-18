import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const Onboarding = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        width: width,
      }}>
      <View
        style={{
          flexDirection: item.id == 2 ? 'column-reverse' : 'column',
          // flex: 0.82,
          justifyContent: 'flex-end',
        }}>
        <Image
          source={item.imgSrc}
          style={{
            width: width,
            height: 406,
            marginTop: item.id == 2 ? '8%' : '30%',
          }}
          resizeMode="contain"
        />

        <View style={{paddingHorizontal: 30}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
              fontFamily: 'Montserrat-Regular',
              color: '#263238',
              paddingTop: 53,
              lineHeight: 30,
            }}>
            {item.title}
          </Text>
          {item.id != 2 && (
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
                color: '#263238',
                paddingTop: 12,
                lineHeight: 30,
              }}>
              {item.subTitle}
            </Text>
          )}

          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              fontFamily: 'Montserrat-SemiBold',
              color: '#263238',
              lineHeight: 30,
            }}>
            {item.subTitleOutline}
          </Text>
          <View
            style={{
              maxWidth: 120,
              borderBottomWidth: 5,
              borderBottomColor: '#F45F65',
              top: -6,
              zIndex: -4,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
