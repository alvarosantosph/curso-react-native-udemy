import React from 'react'
import { Button, View } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec!!!')
    }

    return (
        <View>
            <Button 
                title="Executar" 
                onPress={executar}>
            </Button>

            <Button 
                title="Executar" 
                onPress={function() {
                    return console.warn('Exec2!!!')
                }}>
            </Button>

            <Button 
                title="Executar" 
                onPress={() => {
                    return console.warn('Exec3!!!')
                }}>
            </Button>

        </View>
    )
}