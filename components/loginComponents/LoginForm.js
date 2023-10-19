import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import PhoneLoginForm from './PhoneLoginForm'; // Make sure to import your PhoneLoginForm component



const LoginForm = ({ onLoginWithPhone, onLoginWithGoogle }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [showPhoneLoginForm, setShowPhoneLoginForm] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(0));

    const fadeTransition = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };



    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Rubik-Black': require('../../assets/fonts/Rubik-Black.ttf'),
                'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
                'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
                'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
                'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf')
            });
            setFontsLoaded(true);
        };
        loadFonts();
    }, []);

    useEffect(() => {
        if (showPhoneLoginForm) {
            fadeTransition();
        }
    }, [showPhoneLoginForm]);

    if (showPhoneLoginForm) {
        return (
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <PhoneLoginForm />
            </Animated.View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Login Method</Text>

            {/* Login with Phone Number Button */}
            <TouchableOpacity style={styles.phoneButton} onPress={() => setShowPhoneLoginForm(true)}>
                <Text style={styles.phoneButtonText}>Login with Phone Number</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'Rubik-Light',
    },
    phoneButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 10,
    },
    phoneButtonText: {
        color: 'white',
        fontFamily: 'Rubik-Light',
    },
});

export default LoginForm;
