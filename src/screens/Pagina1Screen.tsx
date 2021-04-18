import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/appTheme'

//poner tipos a properties
interface Props extends StackScreenProps<any, any>{

}

export const Pagina1Screen = ( {navigation }: Props ) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 1 Screen </Text>
            <Button 
                title="Navegar Página 2"
                onPress={ () => navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}
