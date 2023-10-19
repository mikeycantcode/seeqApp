import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';

const StaticLoadingScreen = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
                'Rubik-BlackItalic': require('../assets/fonts/Rubik-BlackItalic.ttf'),
                'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
                'Rubik-BoldItalic': require('../assets/fonts/Rubik-BoldItalic.ttf'),
                'Rubik-Italic': require('../assets/fonts/Rubik-Italic.ttf'),
                'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
                'Rubik-LightItalic': require('../assets/fonts/Rubik-LightItalic.ttf'),
                'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
                'Rubik-MediumItalic': require('../assets/fonts/Rubik-MediumItalic.ttf'),
                'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf')
            });
            setFontsLoaded(true);
        };
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SEEQ</Text>
            <Text style={styles.slogantext}>type in your type, we do the rest</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: "Rubik-Light",
        fontWeight: '200',
        fontSize: 49,
        color: '#fff'
    },
    slogantext: {
        fontFamily: "Rubik-Light",
        fontWeight: '100',
        fontSize: 16,
        color: '#fff'
    }
});

export default StaticLoadingScreen;
