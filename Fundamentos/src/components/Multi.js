import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function Comp() {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

export const Comp1 = () => (
    <Text style={Estilo.txtG}>Comp #02</Text>
)

export const Comp2 = () => (
    <Text style={Estilo.txtG}>Comp #03</Text>
)

//export { Comp1, Comp2 }