import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

//import Comp, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import FlexBoxV1 from './components/layout/FlexBoxV1'
//import FlexBoxV2 from './components/layout/FlexBoxV2'
//import FlexBoxV4 from './components/layout/FlexBoxV4'
import Mega from './components/mega/Mega'

//function App() {
    //return <Text>Primeiro Componente</Text>
//}

//const App = function() {
    //return <Text>Primeiro Componente</Text>
//}

//const App = () => <Text>Primeiro Componente</Text>

const App = () => (
    <SafeAreaView style={style.content}>

        {/*<Titulo principal="Cadastro" secundario="Tela de Cadastro do Produto" />*/}
        {/*<Aleatorio min={1} max={30} />*/}
        {/*<MinMax min={3} max={20} />*/}
        {/*<Primeiro />*/}
        {/*<Comp />*/}
        {/*<Comp1 />*/}
        {/*<Comp2 />*/}
        {/*<Botao />*/}
        {/*<Contador inicial={0} />*/}
        {/*
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"></Membro>
            <Membro nome="Carlos" sobrenome="Arruda"></Membro>
        </Familia>

        <Familia>
            <Membro nome="Ana" sobrenome="Silva"></Membro>
            <Membro nome="Julia" sobrenome="Silva"></Membro>
        </Familia>
        */}
        {/*<ListaProdutos />*/}
        {/*<ListaProdutosV2 />*/}
        {/*<DigiteSeuNome />*/}
        {/*<FlexBoxV1 />*/}
        {/*<FlexBoxV2 />*/}
        {/*<FlexBoxV3 />*/}
        {/*<FlexBoxV4 />*/}
        <Mega qtdeNumeros={12} />

    </SafeAreaView>
)

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})

export default App;