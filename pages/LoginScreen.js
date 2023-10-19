import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';


import LoginButton from '../components/loginComponents/LoginButton';
import GoogleAuthButton from '../components/loginComponents/GoogleAuthButton';
import StaticLoadingScreen from '../components/StaticLoadScreen';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ onLogin, onSignup, handleGoogleLogin }) => {
    const fadeAnim = new Animated.Value(1);

    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/videos/testbg1.mp4')}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={0.8}
                ignoreSilentSwitch={"obey"}
            />
            <StaticLoadingScreen />
            <Text style={styles.termsText}>
                By signing up, you agree to the terms and conditions laid out at seeq.prod.app
            </Text>
            <Animated.View style={{ opacity: fadeAnim }}>
                <GoogleAuthButton onPress={handleGoogleLogin} />
                <LoginButton onPress={handleGoogleLogin} />

            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    termsText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 2,
        marginRight: width * 0.1,
        marginLeft: width * 0.1,
    }
});

export default LoginScreen;
