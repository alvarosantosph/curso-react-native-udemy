import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import Numeros from './Numeros'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [],
    }

    //alterarQuantidadeNumero(qtde) {
        //this.setState({ qtdeNumeros: qtde })
    //}

    alterarQuantidadeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumeroContido(n)], []) 
        .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numeros key={num} num={num} />
        })
    }

    //constructor(props){
        //super(props)
        //this.alterarQuantidadeNumero = this.alterarQuantidadeNumero.bind(this)
    //}

    //constructor(props) {
        //super(props)

        //this.state = {
            //qtdeNumeros: props.qtdeNumeros + 1000,
        //}
    //}

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena:  
                </Text>

                <TextInput keyboardType={'numeric'} style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    height: 40,
                }}
                placeholder="Qtde de Números" 
                value={`${this.state.qtdeNumeros}`} 
                //onChangeText={qtde => this.alterarQuantidadeNumero(qtde)}>
                onChangeText={this.alterarQuantidadeNumero}>
                </TextInput>

                <View style={{
                    margin: 5,
                }}>
                    <Button color="#841584" title="Gerar" onPress={this.gerarNumeros} />
                </View>

                {/*<Text>
                    {this.state.numeros.join(',')}
                </Text> */}

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>

            </>
        )
    }

}