import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'

export default props => {

    function lista() {
        return produtos.map(p => {
            return (
            <Text key={p.id}>{p.id} - {p.nome} - R$ {p.preco}</Text>
            )
        })
    }

    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {produtos.map(p => {
                return <Text key={p.id}>{p.id} - {p.nome} - R$ {p.preco}</Text>
            })}

            {lista()}
        </>
    )
}