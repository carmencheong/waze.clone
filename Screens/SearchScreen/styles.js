import { StyleSheet, Dimensions } from 'react-native';

// minimum window hieght so keyboard does not push content up
export const minWindowHeight = Math.round(Dimensions.get('window').height);
export const windowWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    goBack: {
      borderRadius: 40,
      alignItems: "center",
      alignContent: "center",
      backgroundColor: '#c5c5c5',
      alignSelf: "center",
      top: 40,
      marginBottom: 7,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      width: 35,
      height: 35,
      opacity: .85,

    },
    textInputCustom: {
      height: 48,
      width: windowWidth - 70,
      borderRadius: 30,
      top: 40,
      backgroundColor: '#9BC4E2',
      marginBottom: 50,
      marginLeft: 5,
      marginRight: 5,
      overflow: 'hidden',
    },
    listViewCustom: {
      marginTop: 40,
      backgroundColor:'#9BC4E2',
      marginTop: 5,
    },
    descriptionCustom: {
      fontWeight: '800',
      fontSize: 17,
      color:"#1f3559",
    },
    rowCustom: {
      backgroundColor:'#9BC4E2',
    },
    poweredCustom: {
      backgroundColor:'#9BC4E2',
    },
    poweredContainerCustom: {
      backgroundColor:'#9BC4E2',
    }
});
