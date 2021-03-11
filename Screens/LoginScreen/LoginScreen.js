import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Input } from 'react-native-elements'
import { auth } from "../../firebase"; 
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import  styles  from "./styles";

class loginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    
    componentDidMount() {
       setTimeout(()=> { this.handleAutoSignIn()}, 200);
    }

    componentDidUpdate() {

    }


    handleAutoSignIn = async () => {
        const {navigation} = this.props;
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                navigation.replace("Home");
            } 
        });
         return unsubscribe;
    };

    handleSignIn = async () => {
        setTimeout(() => {
        const {email, password} = this.state;
        const {navigation} = this.props;
        auth
        .signInWithEmailAndPassword(email,password)
        .then(
            navigation.push("Home")
        )
        .catch((error) => alert(error));
        navigation.navigate("Login")
         }, 1000);
    };


    render() {
    const {navigation, route} = this.props
    const {password, email} = this.state;
        return (
            <View behavior="padding" style={styles.container}>
                <View style={{height: 50}} />
                <View>
                 <Avatar rounded
                        size="xlarge"
                        source={require('../.././assets/loginLogo.jpg')}
                    />
                    <Text style={styles.headLine}>Welcome back, Wazer!</Text>
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
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                        <View style={{backgroundColor: "#c5c5c5", height: 2, flex: 1, alignSelf: 'center', marginLeft: 45}} />
                        <Text style={{ alignSelf:'center', color: "#c5c5c5", paddingHorizontal:5, fontSize: 24 }}>OR</Text>
                        <View style={{backgroundColor: "#c5c5c5", height: 2, flex: 1, alignSelf: 'center', marginRight: 45}} />
                    </View>
                    <TouchableOpacity 
                        style={styles.buttonGoogle}
                        onPress={ () => navigation.push("register")} 
                        type="outline" title="Register">
                            <AntDesign 
                                    name="googleplus" 
                                    size={30} 
                                    containerStyle={{marginRight: 20}}
                                    color="red" />
                        <Text style={styles.googleBtnText}> 
                                    Log in with Google
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    }
};

export default loginScreen;