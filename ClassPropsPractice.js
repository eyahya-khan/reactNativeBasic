import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ClassPropsPractice extends Component {
    render() {
        return (
            // for class component no need to pass props as parameter
            // use props directly
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.age}</Text>
                <Text>{this.props.city}</Text>
            </View>
        )
    }
}
