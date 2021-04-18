import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

    //Usando Hook
    const navigator = useNavigation()

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 2 Screen </Text>
            <Button 
                title="Navegar Página 3"
                onPress={ () => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
