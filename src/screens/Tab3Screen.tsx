import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab 3  Screen Effect')
    }, [])

    return (
        <View>
            <Text>Tab 3 Screen</Text>
        </View>
    )
}
