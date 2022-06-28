import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { MovieDetail } from '../screens/MovieDetail';

const {
  Navigator,
  Screen
} = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: {
    id: number
  }
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Home'
    >
      <Screen name="Home" component={Home} />
      <Screen name="MovieDetail" component={MovieDetail} />
    </Navigator>
  );
}