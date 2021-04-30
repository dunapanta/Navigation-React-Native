import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Button, Text, View} from 'react-native';

import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

//Interface con la estructura que tiene params (poner tipo rapido)
/* interface RoutParams {
    id: number,
    nombre: string
} */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  //console.log(JSON.stringify(props, null, 3))
  //const params = route.params as RoutParams

  const {authState, changeUsername} = useContext(AuthContext);
  const {username} = authState;

  const {params} = route;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
