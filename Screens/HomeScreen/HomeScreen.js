import React, {useState} from 'react'
import { Platform , Dimensions } from 'react-native'
import styles from './styles'
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAvoidingView } from 'react-native';

const windowWidth = Math.round(Dimensions.get('window').width);

const HomeScreen = ({navigation, route}) => {
    const [kwInput, setKwInput] = useState('');
    const [destination, setDistnation] = useState(null);
    console.log(kwInput)
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Where to ?'
        fetchDetails={true}
        styles= {{
              textInput: {
              height: 48,
              width: windowWidth - 25,
              borderRadius: 30,
              top: 40,
              overflow: 'hidden',
              backgroundColor: '#A4D3EE90',
              marginTop: 0,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }
        }}
        textInputProps={{
          leftIcon: <MaterialIcons name="search" size={24} color="gray" />,
          rightIcon: <MaterialIcons name="search" size={24} color="gray" />
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setDistnation({value:{data,details}})
          console.log(data, details);
        }}
        query={{
          key: '',
          language: 'en',
        }}
      />
    </KeyboardAvoidingView>
    )
}

export default HomeScreen


