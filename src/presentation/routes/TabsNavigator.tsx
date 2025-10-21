import React from 'react'
import { MyBalanceScreen } from '../screens/MyBalanceScreen';
import { MyBetsScreen } from '../screens/MyBetsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TabsNavigator = () => {
   return (
    <Tab.Navigator>
      <Tab.Screen name="MyBalance" component={MyBalanceScreen} />
      <Tab.Screen name="MyBets" component={MyBetsScreen} />
    </Tab.Navigator>
  );
}

