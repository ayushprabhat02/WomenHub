import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Calendar from '../screens/Calendar';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = props => {
  const {navigation, route} = props;
  const screenOptionName = route.params.screenOption;
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 72,
          backgroundColor: 'rgba(15, 15, 15, 1)',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          // alignSelf: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const icons = {
            Home: 'home-outline',
            Notification: 'notifications-outline',
            Calendar: 'calendar-outline',
            Profile: 'person-outline',
            Wallet: 'wallet',
          };

          const icon = icons[label];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          console.log(state.routeNames[0]);

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // borderWidth: 1,
                // borderColor: 'red',
              }}>
              {isFocused && route.name == 'Home' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      height: 8,
                      width: 8,
                      borderRadius: 50,
                      backgroundColor: 'rgba(244, 95, 101, 1)',
                      marginRight: 8,
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 15,
                      color: 'rgba(244, 95, 101, 1)',
                      marginTop: 4,
                      lineHeight: 18,
                    }}>
                    {label}
                  </Text>
                </View>
              ) : isFocused ? (
                <Icon name={icon} size={20} color={'rgba(244, 95, 101, 1)'} />
              ) : (
                <Icon name={icon} size={20} color={'#FFF'} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" options={{screenOption: screenOptionName}}>
        {() => <Home screenOption={screenOptionName} />}
      </Tab.Screen>
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
