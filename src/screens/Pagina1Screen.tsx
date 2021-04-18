import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from '../theme/appTheme';

//poner tipos a properties
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen </Text>
      <Button
        title="Navegar Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button
        title="Persona Screen"
        onPress={() => navigation.navigate('PersonaScreen')}
      />
      <Text>Navegar con Argumentos</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
        style={{...styles.button, backgroundColor: '#ff886f'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Daniel',
            })
          }>
          <Text style={styles.text}>Daniel</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Esteban',
            })
          }>
          <Text style={styles.text}>Esteban</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
