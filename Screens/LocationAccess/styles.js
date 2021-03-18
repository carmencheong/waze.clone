import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D92B1"
  },
   image: {
    height: 150,
    width: 150,
  },
  logoTitle: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    width: 200,
    color: "white",
    fontWeight: "800"
  },
  logoSubTitle: {
      textAlign: 'center',
      marginTop: 50,
      width: 300,
      fontSize: 15,
      fontWeight: "800",
      color: "#35586C"

  },
    button: {
        backgroundColor: '#dceaf5',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 350,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonOpacity: {
        backgroundColor: '#dceaf5',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 350,
        opacity: .25,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
      fontSize: 15
    }
});