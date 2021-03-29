import { StyleSheet, Dimensions } from 'react-native';


// minimum window hieght so keyboard does not push content up
export const minWindowHeight = Math.round(Dimensions.get('window').height);
export const windowWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
container: {
        flex: 1,
    },
    map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
    iconMarker: {
      borderRadius: 40,
      alignItems: "center",
      alignContent: "center",
      borderColor: "deepskyblue",
      backgroundColor: 'gray',
      width: 35,
      height: 35,
      opacity: .85,

    },
    textInputCustom: {
      position: "absolute",
      height: 48,
      width: windowWidth - 30,
      flexDirection: 'row',
      borderRadius: 30,
      alignSelf: "center",
      bottom: 20,
      backgroundColor: '#9BC4E2',
      marginTop: 10,
      marginBottom: 7,
      marginLeft: 5,
      marginRight: 5,
      overflow: 'hidden',
    },
});
