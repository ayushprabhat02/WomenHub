import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = () => {
  return (
    <View
      style={{
        height: 297,
        backgroundColor: 'white',
        marginTop: 23,
        borderRadius: 23,
        justifyContent: 'center',
        zIndex: -3,
      }}>
      <Image
        source={require('../../assets/Rectangle.png')}
        style={{
          //   width: 20,
          height: 228,
          alignSelf: 'center',
          marginBottom: 14,
        }}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row', paddingLeft: 30}}>
        <TouchableOpacity style={styles.likesContainer}>
          <Image
            source={require('../../assets/Like.png')}
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode="contain"
          />
          <Text style={{fontSize: 16, color: 'rgba(92, 102, 114, 1)'}}>57</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likesContainer}>
          <Image
            source={require('../../assets/comment.png')}
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode="contain"
          />
          <Text style={{fontSize: 16, color: 'rgba(92, 102, 114, 1)'}}>57</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likesContainer}>
          <Image
            source={require('../../assets/share.png')}
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode="contain"
          />
          <Text style={{fontSize: 16, color: 'rgba(92, 102, 114, 1)'}}>57</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  likesContainer: {
    height: 26,
    width: 51,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 13,
  },
});
