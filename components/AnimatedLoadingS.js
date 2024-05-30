
import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';

const AnimatedLoadingS = () => {
    const animatedValue = useRef(new Animated.Value(0.5)).current;
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


    useEffect(() => {
        const animate = Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0.5,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ])
        );
        animate.start();
    }, []);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.text,
                    { opacity: animatedValue },
                ]}
            >
                DDNOW
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'top',
    },
    text: {
        fontFamily: 'Rubik-Light',
        fontSize: 40,
    },
});

export default AnimatedLoadingS;
