import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreateAcountScreen from '../screens/CreateAcountScreen';
import Login from '../screens/Login';
import CalendarNotification from '../screens/Notification/CalendarNotification';
import OnboardingScreen from '../screens/OnboardingScreen';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import BottomTabNavigation from './BottomTabNavigation';
import MessageNotification from '../screens/Notification/MessageNotification';
import NotificationSetting from '../screens/Notification/NotificationSetting';

const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="CreateAcountScreen" component={CreateAcountScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeBottomTab" component={BottomTabNavigation} />
      <Stack.Screen
        name="CalendarNotification"
        component={CalendarNotification}
      />
      <Stack.Screen
        name="MessageNotification"
        component={MessageNotification}
      />
      <Stack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
