import React, {useEffect, useRef} from 'react';
import Svg, {Circle, G} from 'react-native-svg';
import {View, TouchableOpacity, Image, Animated} from 'react-native';

const NextButton = ({percentage, scrollTo}) => {
  const size = 92;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Svg width={size} height={size}>
        <G rotation="-270" origin={center}>
          <Circle
            stroke="#E6E7E8"
            fill="#E0D1D836"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="rgba(38, 50, 56, 1)"
            fill="#E0D1D836"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={{
          position: 'absolute',
          width: 68,
          height: 68,
          backgroundColor: 'rgba(244, 95, 101, 1)',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Image
          source={require('../../assets/arrow.png')}
          style={{
            width: 22,
            height: 22,
            padding: 20,
          }}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
