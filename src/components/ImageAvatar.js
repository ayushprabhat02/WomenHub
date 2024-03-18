import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ImageAvatar = ({
  imgSrc,
  title,
  titleColor,
  backgroundColor = 'white',
  width = 95,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[{width: width, marginRight: 14}, style]}>
      <View
        style={{
          height: width,
          width: width,
          backgroundColor: backgroundColor,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* width set to -6 for outline */}
        <View
          style={{
            width: width,
            height: width,
            overflow: 'hidden',
            borderRadius: 50,
          }}>
          <Image
            source={imgSrc}
            style={{
              width: width,
              height: width,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          paddingTop: 6,
          fontSize: 12,
          fontFamily: 'Montserrat-SemiBold',
          color: titleColor,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ImageAvatar;

const styles = StyleSheet.create({});
