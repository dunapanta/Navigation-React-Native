import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 Screen Effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>Iconos</Text>
      <Text>
        <TouchableIcon iconName="cut-outline" color="#920" />
        <TouchableIcon iconName="barbell-outline" color="#990" />
        <TouchableIcon iconName="bonfire-outline" color="#909" />
        <TouchableIcon iconName="car-sport-outline" color="#200" />
        <TouchableIcon iconName="headset-outline" color="#600" />
      </Text>
    </View>
  );
};
