import React from 'react'
import { View, TouchableOpacity, Image,  Text } from 'react-native'
import CustomSlider from './Components/CustomSlider';
import styles from "./styles";

const sliderContent = [
  {
    imageURL: require('../../assets/demo1.jpg'),
    text: "Hi! Ready to find the best route ?"
  },
  {
    imageURL: require('../../assets/demo2.jpg'),
    text: "Waze beats traffic with high accuracy."
  },
  {
    imageURL: require('../../assets/demo3.jpg'),
    text: "Ready to get started with waze ?"
  },
]

const DemoScreen = ({navigation, route}) => {
  return (
      <View style={styles.container}>
        {/* slider */}
        <CustomSlider sliderContent={sliderContent} />
        <View style={{ bottom:0, position:'absolute', marginBottom: 10}}>
          <TouchableOpacity 
            style={styles.startBtn}
            i
            onPress={() => navigation.push('locationAccess')}
            raised title="Register">
            <Text style={styles.startBtnText}>ابدأ</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.loginBtn}
            onPress={() => navigation.push('login') }
            raised title="Register">
            <Text style={styles.loginBtnText}> تسجيل دخول</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default DemoScreen;
