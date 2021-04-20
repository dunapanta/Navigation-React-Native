import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 Screen Effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>Iconos</Text>
      <Text>
      <Icon name="cut-outline" size={100} color="#900" />
      </Text>
      
    </View>
  );
};
