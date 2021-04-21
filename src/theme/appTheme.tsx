import { StyleSheet } from "react-native";

export const colors = {
    primary: '#7cb342',
    primaryLigth: '#aee571',
    primaryDark: '#4b830d',
    sencondary: '#5e35b1',
    secondaryDark: '#280680'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'cyan',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer:{
        marginVertical: 30,
        //marginHorizontal: 30,
        alignItems: 'center'
    },
    menuButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    menuText:{
        fontSize: 24,
        paddingLeft: 12
    }
});