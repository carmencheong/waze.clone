import React, { Component, createRef } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import { Input, Avatar } from 'react-native-elements';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { View} from 'react-native';
import {auth, db} from "../../firebase";
import styles  from "./styles";


class RegisterScreen extends Component {
    constructor(props){
     super(props);
    }
    
    state = {
      password: "",
      email: "",
     };
    componentDidMount() {

    }

    handleRegisterUsers = async () => {
     const {email, password} = this.state;
     await auth.createUserWithEmailAndPassword(email, password)
     .then(
      navigation.push('login')
     )
     .catch((error) => alert(error.message));
    };

    handleRegisterWithGoogle = async () => {
    }

    render() {
     const { email } = this.state;
     const { navigation } = this.props;
     return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <View style={styles.inputContainer} >
       <View style={{justifyContent:"flex-start"}}>
            <TouchableOpacity 
                onPress={ () => navigation.goBack()}>
                <AntDesign 
                    name="left" size={30} 
                    color="gray"
                    style={{
                    marginBottom: 20 }} />
            </TouchableOpacity> 
            <Avatar rounded
                size="xlarge"
                source={require('../.././assets/wazerfam.jpg')}
                />
            <Text style={styles.headLine}>Join Wazers Fam!</Text>
        </View>
        <Input placeholder="Email" type='email'
            leftIcon ={
             <MaterialIcons 
              name="mark-email-read" 
              size={24} 
              color="gray" />
            }
            value={email}
            containerStyle={styles.input}
            onChangeText ={ (e) => this.setState({email: e})}
        />
        <Input 
            placeholder="Password"
            secureTextEntry
            leftIcon ={
             <MaterialIcons 
              name="lock" 
              size={24} 
              color="gray" />
            }
            type='password'
            containerStyle={styles.input}
            onChangeText ={ (p) => this.setState({password: p})}
        />
       </View>
       <TouchableOpacity 
        style={styles.button} 
        onPress={() => this.handleRegisterUsers()}
        raised title="Register">
        <Text style={styles.buttonTitle}>Register</Text>
       </TouchableOpacity>
      </KeyboardAvoidingView>
     )
    }
}

export default RegisterScreen;