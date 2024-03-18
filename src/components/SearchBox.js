import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchBox = ({
  setIsModelOpen,
  mic,
  containerStyle,
  placeholder = 'Search...',
  imgSrc,
}) => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={[
          {
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            flex: 1,
          },
          containerStyle,
        ]}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Search.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'rgba(143, 149, 158, 1)'}
          value={searchInput}
          onChangeText={text => setSearchInput(text)}
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: 'Inter-Regular',
            lineHeight: 16,
            marginLeft: 10,
            color: 'black',
          }}
        />
      </View>
      {mic && (
        <TouchableOpacity
          onPress={() => setIsModelOpen(true)}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'rgba(244, 95, 101, 1)',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 13,
          }}>
          <Image
            source={imgSrc}
            style={{
              width: 24,
              height: 24,
            }}
            resizeMode="center"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
