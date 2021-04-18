import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

    //Usando Hook
    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            title: 'Atrás', //Esta propiedad tiene mas peso del que se establecio de manera global
            headerBackTitle: 'Atrás' // En IOS
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 Screen </Text>
            <Button 
                title="Navegar Página 3"
                onPress={ () => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
