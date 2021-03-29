import React, {useState} from 'react'
import { Platform, Text, View, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import { MaterialIcons, FontAwesome5  } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import { Input } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';
const HomeScreen = ({navigation, route}) => {
  /*
  receive two important props via react nativagtion
  1) user location from locationAcess screen:
  this can be upgraded to redux global state managment easily
  2) Gets selected destination from SearchScreen via route
  console.log(route.params) for more details
  */
    const userLocation = route.params?.location?.coords
    let userDestination = route.params?.userDestination?.details?.geometry?.location
    if(userDestination){
      userDestination = {
        latitude: userDestination.lat, longitude: userDestination.lng
      }
    }
    
    const inintialRegion = userDestination ? userDestination : userLocation;
    const coordinates = [userLocation, userDestination]
    console.log(userDestination)
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {!userDestination ? (
        <View>
          <MapView style={styles.map} 
                  initialRegion={{
                    latitude: inintialRegion.latitude,
                    longitude: inintialRegion.longitude,
                    latitudeDelta: 0.082,
                    longitudeDelta: 0.031,
                  }}
                  mapType={"terrain"}
                  followsUserLocation={true}
                  showsMyLocationButton={true}
                  showsCompass={true}
                  showsPointsOfInterest={true}
                  showsBuildings={true}
                  showsIndoorLevelPicker={true}
                  showsTraffic={true}
          >
          <MapView.Marker
            coordinate={{ latitude:userLocation.latitude,longitude:userLocation.longitude}}
          >
            <MaterialIcons  style={styles.iconMarker} name="navigation" size={35} color="deepskyblue" />
          </MapView.Marker>
          </MapView>
          <View style={styles.textInputCustom}>
            <Input 
              placeholder="Where to ?" 
              leftIcon =  {<MaterialIcons name="search" size={30} color="gray" />}
              rightIcon = {<FontAwesome5 name="microphone" size={30} color="darkred" />}
              onFocus = { () => navigation.push('search', {location: route.params?.location})}
            />
            {/* dummy input field on focus navigate to SearchScreen */}

          </View>
        </View>
      ): (
        <View>
           <MapView style={styles.map} 
                  initialRegion={{
                    latitude: inintialRegion.latitude,
                    longitude: inintialRegion.longitude,
                    latitudeDelta: 8,
                    longitudeDelta: 8,
                  }}
                  mapType={"terrain"}
                  
          >
            <MapView.Marker
              coordinate={ userLocation }
              >
                <MaterialIcons name="circle" size={25} color="deepskyblue" />
            </MapView.Marker>
            <MapView.Marker
              coordinate={ userDestination }
              >
            </MapView.Marker>
            <MapViewDirections
              origin={userLocation}
              destination={userDestination}
              apikey={'GOOGLE_CLOUD_DESTIATIONS_API_KEY'}
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
              onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
            }
            }
            />
          </MapView>
          <View style={styles.textInputCustom}>
            <Input 
              placeholder="Where to ?" 
              leftIcon =  {<MaterialIcons name="search" size={30} color="gray" />}
              rightIcon = {<FontAwesome5 name="microphone" size={30} color="darkred" />}
              onFocus = { () => navigation.push('search', {location: route.params?.location})}
            />
            {/* dummy input field on focus navigate to SearchScreen */}

          </View>
        </View>
              )}
      
    </KeyboardAvoidingView>
    )
}

export default HomeScreen


