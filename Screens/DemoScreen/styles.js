import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  loginBtn: {
      backgroundColor: 'white',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      width: 350,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#c5c5c5",
      alignItems: "center",
      justifyContent: 'center'
  },
  startBtn: {
      backgroundColor: '#00bfff',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      width: 350,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: 'center'
  },
  startBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff"
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#808080"
    }
});