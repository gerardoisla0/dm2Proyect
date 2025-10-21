import React from 'react'
import { MyBalanceScreen } from '../screens/MyBalanceScreen';
import { MyBetsScreen } from '../screens/MyBetsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
   return (
     <Drawer.Navigator>
      <Drawer.Screen name="MyBalance" component={MyBalanceScreen} />
      <Drawer.Screen name="MyBets" component={MyBetsScreen} />
    </Drawer.Navigator>
  );
}