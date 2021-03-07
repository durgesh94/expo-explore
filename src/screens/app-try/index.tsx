import React from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

export default class App extends React.Component {
    state = {
        isReady: false,
    };

    componentDidMount() {
        SplashScreen.preventAutoHideAsync();
    }

    render() {
        console.log(this.state.isReady);
        if (!this.state.isReady) {
            return (
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('./assets/splash2.png')}
                        onLoad={this._cacheResourcesAsync}
                    />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, margin: 50 }}>
                {/* <Image source={require('./assets/icon.png')} /> */}
                {/* <Image source={require('./assets/icon.png')} /> */}
                <Text>Loaded {this.state.isReady}</Text>
            </View>
        );
    }

    _cacheSplashResourcesAsync = async () => {
        console.log("3")
        const gif = require('./assets/splash3.png');
        return Asset.fromModule(gif).downloadAsync();
    };

    _cacheResourcesAsync = async () => {
        console.log("hide")
        SplashScreen.hideAsync();

        try {
            const images = [
                require('./assets/icon.png'),
                require('./assets/icon.png'),
            ];

            const cacheImages = images.map(image => {
                return Asset.fromModule(image).downloadAsync();
            });

            await Promise.all(cacheImages);
        } catch (e) {
            console.warn(e);
        } finally {
            console.log("set ready")
            this.setState({ isReady: true });
        }
    };
}