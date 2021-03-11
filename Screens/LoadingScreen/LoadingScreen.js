import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import styles from "./styles";
import { ImageBackground } from 'react-native';
export class LoadingScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isReady: false
        };
    };

    componentDidMount() {
        setTimeout( () => {this.handleNavigateToAuth()}, 3500);
    }

    handleNavigateToAuth = () => {
        const { navigation } = this.props;
        navigation.push('login')
    }

    async _cacheResourcesAsync() {
            const images = [require('../.././assets/splash.png')];

            const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
            }); 
            return Promise.all(cacheImages);
        }
    
    render() {
        const { isReady } = this.state;
        return (
           <View style={styles.container}>
                    {!isReady &&(
                            <AppLoading
                            startAsync={this._cacheResourcesAsync}
                            onFinish={() => this.setState({ isReady: true })}
                            onError={console.warn}
                            />
                    )}
                <Image
                style={styles.image}
                source={require('../.././assets/waze.png')} />
                <Text style={styles.logoTitle}>WAZE</Text>
                <Text style={styles.logoSubTitle}>OUTSMARTING TRAFFIC, TOGETHER.</Text>
           </View>
        )
    }
}

export default LoadingScreen
