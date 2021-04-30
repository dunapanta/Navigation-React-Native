import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  color: string;
}

export const TouchableIcon = ({iconName, color}: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Icon name={iconName} size={100} color={color} />
    </TouchableOpacity>
  );
};
