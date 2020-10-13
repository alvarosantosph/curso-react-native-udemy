import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    txtG: {
        fontSize: 32,
        textAlign: "center",
    },
    botoes: {
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    }
})