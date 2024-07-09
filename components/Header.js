import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../styles/AppStyle'

import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

const Header = () => {
    
    const [appIsReady, setAppIsReady] = useState(false);
    const fetchFonts = () => {
        return Font.loadAsync({
            'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf')
        });
    };

    useEffect(() => {
        async function loadFonts() {
            await SplashScreen.preventAutoHideAsync();
            await fetchFonts();
            setAppIsReady(true);
        }
        loadFonts();
    }, []);
    
    if (!appIsReady) {
        SplashScreen.hideAsync();
    }
    
    return (
        <View style={globalStyle.headerContenair}>
            <Text style={[globalStyle.headerTitle, styles.title ]}>Rando 974</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Pacifico-Regular'
    }
})