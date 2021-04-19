import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {styles} from '../theme/appTheme';
import { Tabs } from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      //drawerPosition="right"
      drawerType={width > 600 ? 'permanent' : 'front'}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
