import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator 
    //drawerPosition="right"
    drawerType={width > 600 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
