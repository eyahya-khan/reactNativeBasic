import React from 'react'
import { Text, View } from 'react-native'

function PropsPractice(props) {
    return (
            // for function component always pass 'props' as parameter
        <View>
            <Text>{props.name}</Text>
            <Text>{props.age}</Text>
            <Text>{props.city}</Text>
        </View>
    )
}

export default PropsPractice
