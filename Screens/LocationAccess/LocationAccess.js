import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity,  View } from 'react-native'
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "./styles"
import * as Location from 'expo-location';
const LocationAccess = ({navigation, route}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [btnDisabled, setEnabled] = useState(true);
  useEffect(() => {
      const unsbuscribe = navigation.setOptions({
        headerBacktitle: "Location Access",
        headerStyle: {
          backgroundColor: "#5D92B1",
        },
        headerTintColor: "#1f3559",
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft: 15,
        },
        headerLeft: () => (
          <TouchableOpacity 
                onPress={ () => navigation.push('home')}>
                <AntDesign 
                    name="leftcircle" size={30} 
                    color="#1f3559"
                    style={{
                      marginLeft: 10,
                    }} />
          </TouchableOpacity> 
        )
      })
    return () => {
      unsbuscribe
    }
  }, [])

  const locationAcessRequest = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setEnabled(true);
      navigation.push("home")
  };

  return (
  <View style={styles.container}>
    <Image
    style={styles.image}
    source={require('../.././assets/location.png')} />
    <Text style={styles.logoTitle}>
      Waze needs location
      Permission to work
    </Text>
    <Text style={styles.logoSubTitle}>
      To know what's happening on the road, get
      alerts about traffic, ploice and more - Waze
      needs to access your
      location
    </Text>
    <View style={{ bottom:0, position:'absolute', marginBottom: 10}}>
      {/* x if location is not enabled, check if it is enabled */}
      {/* Need more logic to onclick give location acess */}
      <TouchableOpacity 
        style={styles.buttonOpacity}
        i
        onPress={() => alert("please enable location in device settings")}
        raised title="Register">
        <Text style={styles.buttonTitle}>
          { location  ? (
            <FontAwesome name="check-circle" style={{marginRight: 10}} 
                    size={20} color="#1ba895" />
          ): (
            <AntDesign name="closecircle" style={{marginRight: 10}} 
                    size={20} color="darkred" />
          )}
          
          Trun on GPS
        </Text>
     </TouchableOpacity>
     <TouchableOpacity 
        style={styles.button}
        onPress={() => locationAcessRequest() }
        raised title="Register">
        <Text style={styles.buttonTitle}>Give Waze location access</Text>
      </TouchableOpacity>
    </View>
    <View style={{height: 100}} />
    
  </View>
  )
}

export default LocationAccess