import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';

//poner tipos a properties
//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        width > 600 ? (
          ''
        ) : (
          <TouchableOpacity
            style={{paddingLeft: 20}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu-outline" size={30} color="#721" />
          </TouchableOpacity>
        ),
    });
  }, [width]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen </Text>
      <Button
        title="Navegar Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
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
            <Icon name="person-outline" size={30} color="#136" />
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
