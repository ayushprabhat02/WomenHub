import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuButtton from './MenuButtton';

const Header = ({
  leftIconBackground,
  leftImgSrc,
  rightImgSrc,
  headerTitle,
  headerStyle,
  shareImageSrc,
  onPress = () => {},
  onPressOnRightBtn = () => {},
}) => {
  const defaultLeftImgSrc = require('../../assets/backMenuArrow.png');
  const defaultRightImgSrc = require('../../assets/Bag.png');
  return (
    <View>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          headerStyle,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MenuButtton
            onPress={onPress}
            styles={{width: 45, height: 45}}
            imgSrc={leftImgSrc || defaultLeftImgSrc}
            backgroundColor={leftIconBackground}
          />
          <Text
            style={{
              paddingLeft: 16,
              fontFamily: 'Montserrat-Regular',
              fontSize: 16,
              color: 'rgba(0, 0, 0, 1)',
            }}>
            {headerTitle}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {shareImageSrc && (
            <MenuButtton
              styles={{width: 45, height: 45}}
              imgSrc={shareImageSrc}
              backgroundColor={'rgba(245, 246, 250, 1)'}
            />
          )}

          <MenuButtton
            onPress={onPressOnRightBtn}
            styles={{marginLeft: 10, width: 45, height: 45}}
            imgSrc={rightImgSrc || defaultRightImgSrc}
            backgroundColor={'rgba(245, 246, 250, 1)'}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
