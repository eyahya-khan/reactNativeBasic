import React from 'react'
import { View } from 'react-native'

function FlexDimention() {
//two dimention-----1.flexDimension means ratio (flex:100) 
//2.fixedDimension means height and width(height:50,width:80)
    return (
        <View style={{backgroundColor:'white',flex:100, height:90}}>
        <View style={{backgroundColor:'red', flex:20}}></View>
        <View style={{backgroundColor:'green',flex:30}}></View>
        <View style={{backgroundColor:'blue', flex:50}}></View>
        </View>
    )
}

export default FlexDimention
