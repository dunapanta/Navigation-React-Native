import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1 Screen Effect')
    }, [])

    return (
        <View>
            <Text>Tab 1 Screen</Text>
        </View>
    )
}
