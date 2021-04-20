import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import { TopTabNavigator } from './TopTapNvigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabNavigatorIOS />
  ) : (
    <BottomTabNavigatorAndroid />
  );
};

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabNavigatorAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}
      >
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

const TabIOS = createBottomTabNavigator();

const BottomTabNavigatorIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0, // android
        },
        labelStyle: {
          fontSize: 16,
        },
      }}
      // icono GLOBAL
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <TabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};
