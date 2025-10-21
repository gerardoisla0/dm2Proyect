import React from 'react'
import { MyBalanceScreen } from '../screens/MyBalanceScreen';
import { MyBetsScreen } from '../screens/MyBetsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
   return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyBalance" component={MyBalanceScreen} />
      <Tab.Screen name="MyBets" component={MyBetsScreen} />
    </Tab.Navigator>
  );
}