import React, { Component, createRef } from 'react'
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import { Input, Image} from 'react-native-elements';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { View} from 'react-native';
import {auth, db} from "../../firebase";
import styles  from "./styles";
import { TapGestureHandler } from 'react-native-gesture-handler';


class RegisterScreen extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
            name: "",
            password: "",
            email: "",
            imageURL: "",
            uuid: "",
        };
    componentDidMount() {
           setTimeout( () => {this.handleChangeScreenTitle()}, 3000); 
    }
    
    handleChangeScreenTitle() {
        const {navigation} = this.props
        navigation.setOptions({
            headerBackTitle:"Login",
        });
    };

    handleActiveUsersCollection = async (username) => {
        const { uuid } = this.state;
        const unsubscribe= db.collection("activeUsers")
        .add({
            username: username,
            uuid: uuid,
        })
        .then(
            console.log("USER_ADDED_TO_activeUsers_Collection")
        )
        .catch(
            console.log("ERROR_ADDING_USESR_TO_ACTIVEUSERS_COLLECTION")
        )
        return unsubscribe;
    };

    handleRegisterUsers = async () => {
        const {email, password, name, imageURL} = this.state;
        await auth.createUserWithEmailAndPassword(email, password)
        .then( authUser => {
            authUser.user.updateProfile({
                displayName: name, 
                photoURL: imageURL || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }),
            this.setState({uuid: auth.currentUser.uid})
        },
        ).catch((error) => alert(error.message));
    };

    render() {
        const { name, password, email, imageURL} = this.state;
        const {navigation, route} = this.props;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar style="Light" />
                <Text h3 style={styles.googleBtnText}>
                    Register
                </Text>
                <View style={styles.inputContainer} >
                    <Input 
                        placeholder="Full Name"
                        autofocus
                        type='text'
                        leftIcon ={
                            <MaterialIcons 
                                name="lock" 
                                size={24} 
                                color="gray" />
                        }
                        containerStyle={styles.input}
                        onChangeText ={ (n) => this.setState({name: n})}
                    />
                    <Input 
                        placeholder="Email"
                        type='email'
                        leftIcon ={
                            <MaterialIcons 
                                name="lock" 
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
                    <Input 
                        placeholder="Enter your profile URL (optional)"
                        type='profile'
                        leftIcon ={
                            <MaterialIcons 
                                name="lock" 
                                size={24} 
                                color="gray" />
                        }
                        containerStyle={styles.input}
                        onChangeText ={ (iu) => this.setState({imageURL: iu})}
                    />
                </View>
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => this.handleRegisterUsers()}
                raised title="Register">
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
                <View style={{hieght:100}} />
            </KeyboardAvoidingView>
        )
    }
}

export default RegisterScreen;