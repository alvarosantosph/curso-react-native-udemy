import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default props => {
    
    const [nome, setNome] = useState('Digite seu nome')

    return (
    <View>
        <Text>Nome: </Text>
        <TextInput style={style.Input}
        placeholder="Digite seu nome"
        value={nome} 
        onChangeText={nome => setNome(nome)}>
        </TextInput>

    </View>
    )
}

const style = StyleSheet.create({
    Input: {
        borderStyle: 'solid',
        borderWidth: 1,
        width: 250,
        height: 40
    }
})