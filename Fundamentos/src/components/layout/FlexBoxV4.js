import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
    <View style={style.FlexV4}>
        <View style={style.V0}></View>
        <View style={style.V1}></View>
        <View style={style.V2}></View>
    </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#c4c',
    }, 
    V0: {
        backgroundColor: '#36c9a7',
        height: 300,
    },
    V1 : {
        flexGrow: 1,
        backgroundColor: '#ff801a',
    }, V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1',
    }
})