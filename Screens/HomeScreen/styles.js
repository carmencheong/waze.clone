import { StyleSheet, Dimensions } from 'react-native';


// minimum window hieght so keyboard does not push content up
const minWindowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
container: {
        height: '100%',
        backgroundColor: "white",
        minHeight: minWindowHeight,
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    button: {
        backgroundColor: '#67C8FF',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 300,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonGoogle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 300,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#c5c5c5",
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    googleBtnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    headLine: {
    fontSize: 27,
    color: "black",
    fontWeight: "800"

    }
});
