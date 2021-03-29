import React, { useState } from 'react'
import { Text, KeyboardAvoidingView, TouchableOpacity, Platform,  View } from 'react-native'
import styles from "./styles";
import { AntDesign, FontAwesome5  } from "@expo/vector-icons";
import { Divider } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const SearchScreen = ({navigation, route}) => {
    // For later use to track user selected destinations
    const [kwInput, setKwInput] = useState('');
    const [destination, setDistnation] = useState(null);
    return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
       <GooglePlacesAutocomplete
        placeholder='Where to ?'
        fetchDetails={true}
        // too much for 16 days sprint. Not needed
        renderLeftButton= {() => (
          <TouchableOpacity 
                  onPress={ () => navigation.goBack()}>
                  <AntDesign 
                      name="arrowleft" size={35} 
                      color="gray"
                      style={styles.goBack} />
          </TouchableOpacity> 
          )}
        styles= {{
            textInput: styles.textInputCustom,
            listView: styles.listViewCustom,
            description: styles.descriptionCustom,
            row: styles.rowCustom,
            powered: styles.poweredCustom,
            poweredContainer: styles.poweredContainerCustom,
        }}
        // not working for some reason, it is just a 16 days sprint no need to debug it
        textInputProps={{
          autoFocus: true,
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          /* 
          When user select a valid option , navigate back
          To home " mapview " and send selected destination
          details to home screen using route.params
          State is implemented for future use when the app
          needs to track user selected destinations as
          waze app does.
          */
          // setDistnation({value:{data,details}})
          navigation.push('home', {userDestination:{details},
                                  location: route?.params?.location})
        }}
        query={{
          key: 'GOOGLE_CLOUD_PLACES_API_KEY',
          language: 'en',
        }}
      />
    </KeyboardAvoidingView>
  )
}

export default SearchScreen


