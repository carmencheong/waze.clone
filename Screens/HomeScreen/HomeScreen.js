import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import {auth, db } from "../../firebase"
const HomeScreen = ({navigation, route}) => {
    console.log(auth?.currentUser?.uid)
    return (
    <View style={styles.container}>
        <Text>this is home Screen</Text>
    </View>
    )
}

export default HomeScreen


