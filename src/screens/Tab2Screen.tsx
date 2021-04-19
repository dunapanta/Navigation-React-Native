import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 2 Screen Effect')
    }, [])

    return (
        <View>
            <Text>Tab 2 Screen</Text>
        </View>
    )
}
