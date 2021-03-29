import React, { Component } from 'react';
import { View, Text, Platform, 
        KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Avatar, Input } from 'react-native-elements'
import { auth } from "../../firebase"; 
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import  styles  from "./styles";
import * as GoogleSignIn from 'expo-google-sign-in';
class loginScreen extends Component {
   constructor(props){
   super(props);
   this.state = {
      email: "",
      password: "",
      isAndroid : Platform.OS == "android" ? true: false
    };
   }
   // code for google sign up
   componentDidMount() {
  // need testing to integrate google sign up
  //  if (this.state.isAndroid){
  //   setTimeout(()=> { this.initAsyncGoogleSignIn()}, 200);
  //  }
   }

 // Google signin ^.^
 initAsyncGoogleSignIn = async () => {
  await GoogleSignIn.initAsync({
    behavior: 'web',
    clientId: '393652483933-65elpn0hff7g93eg71qmml0c74np2h97.apps.googleusercontent.com',
  });
  this._syncUserWithStateAsync();
  };
  _syncUserWithStateAsync = async () => {
  await GoogleSignIn.signInSilentlyAsync();
  };

  signInGoogle = async () => {
  try {
    await GoogleSignIn.askForPlayServicesAsync();
    if (type === 'success') {
    this._syncUserWithStateAsync();
    }
  } catch ({ message }) {
    alert('login: Error:' + message);
  }
  };




   handleAutoSignIn = async () => {
   const {navigation} = this.props;
    await auth.onAuthStateChanged((authUser) => {
     if (authUser){
     navigation.push("locationAccess");
     } 
   });
   };

   handleSignIn = async () => {
   setTimeout(() => {
   const {email, password} = this.state;
   const {navigation} = this.props;
   auth
   .signInWithEmailAndPassword(email,password)
   .then(
     navigation.navigate("locationAccess")
   )
   .catch((error) => { alert(error)
   navigation.navigate("login")
   })
    }, 1000);
   };

   render() {
   const { navigation } = this.props;
   const {isAndroid} = this.state;
   return (
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
     <View>
        <View style={{justifyContent:"flex-start"}}>
          <Avatar rounded
            size="xlarge"
            source={require('../.././assets/loginLogo.jpg')}
          />
          <Text style={styles.headLine}>Welcome back, Wazer!</Text>
        </View>
        <Input 
          placeholder="Email" 
          autoFocus
          blurOnSubmit
          name="email"
          leftIcon ={
          <MaterialIcons 
            name="mark-email-read" 
            size={24} 
            color="gray" />
          }
          type="email"
          containerStyle={styles.input}
          onChangeText={(e) => this.setState({email: e}) }/>
        <Input 
          placeholder="Password"
          secureTextEntry
          blurOnSubmit
          underlineColorAndroid="transparent"
          name="password"
          type="password"
          leftIcon ={
          <MaterialIcons 
            name="lock" 
            size={24} 
            color="gray" />
          }
          containerStyle={styles.input}
          onChangeText={
          (p) => this.setState({password: p})
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => this.handleSignIn()}>
      <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.push("register")} 
        type="outline" title="Register">
        <Text style={styles.buttonTitle}>Register</Text>
      </TouchableOpacity>
      {isAndroid && (
      <View>
      <View style={{
        flexDirection: 'row',
        marginTop: 10, 
        marginBottom: 10}}>
        <View style={{
        backgroundColor: "#c5c5c5",
        height: 2, 
        flex: 1, alignSelf: 'center',
        marginLeft: 45}} />
        <Text 
        style={{ alignSelf:'center', 
        color: "#c5c5c5", 
        paddingHorizontal:5, 
        fontSize: 24 }}>
        OR
        </Text>
        <View 
        style={{backgroundColor: "#c5c5c5",
        height: 2, 
        flex: 1, 
        alignSelf: 'center', 
        marginRight: 45}} />
      </View>
      <TouchableOpacity 
        style={styles.buttonGoogle}
        onPress={ () => signInGoogle() } 
        type="outline" title="Register">
        <AntDesign name="googleplus" size={30} 
          containerStyle={{marginRight: 20}}
           color="red" />
        <Text style={styles.googleBtnText}> Log in with Google</Text>
      </TouchableOpacity>
      </View>
      )}
    </KeyboardAvoidingView>
   )
   }
};

export default loginScreen;
