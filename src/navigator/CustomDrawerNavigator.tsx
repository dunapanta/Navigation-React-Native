import React from 'react';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView} from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';

import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator 
    //drawerPosition="right"
    drawerType={width > 600 ? 'permanent' : 'front'}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
                }}
                style={styles.avatar}
                />
            </View>
        </DrawerContentScrollView>
    )
}
