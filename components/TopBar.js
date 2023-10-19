import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';


const TopBar = () => {
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
            <Text style={styles.text2}>type in your type, we do the rest</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150, // Change this to the height you want
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 40,
    },
    text: {
        fontFamily: 'Rubik-Light',
        fontSize: 50,
    },
    text2: {
        fontFamily: 'Rubik-Light',
        fontSize: 13,
    },
});

export default TopBar;
