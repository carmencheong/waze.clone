
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import LocationAccess from "./Screens/LocationAccess/LocationAccess";
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor:"#2C6BED"},
    headerTitleStyle: {color: "white"},
    headerTintColor:"white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator ScreenOption={globalScreenOptions}>
        <Stack.Screen 
          name="splash"  
          component={LoadingScreen} 
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="locationAccess"  
          component={LocationAccess} 
          options ={{  title: "Location Access"}}
          />
        <Stack.Screen 
            name="login"
            options={{headerShown: false}}
            component={LoginScreen} 
          />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
