import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import ProfileBox from '../components/ProfileBox';
import EditBox from '../components/editProfileComponents/EditBox';
import EditProfileButton from '../components/editProfileComponents/EditProfileButton';
import PrivacyButton from '../components/editProfileComponents/PrivacyButton';  // Add this line
import MainPageScroller from '../components/MainPageScroller';
import PrivacyBox from '../components/editProfileComponents/PrivacyBox';  // Uncomment this when PrivacyBox is ready
import * as Font from 'expo-font';

const ProfileScreen = () => {
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


    const [isEditing, setIsEditing] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const fadeAnimEdit = new Animated.Value(0);
    const fadeAnimProfile = new Animated.Value(1);
    const fadeAnimPrivacy = new Animated.Value(0); // Add this line

    const runAnimation = (animatedValue, toValue) => {
        Animated.timing(animatedValue, { toValue, duration: 500, useNativeDriver: true }).start();
    };

    useEffect(() => {
        if (isEditing) {
            runAnimation(fadeAnimProfile, 0);
            runAnimation(fadeAnimEdit, 1);
            setShowPrivacy(false);
        } else {
            runAnimation(fadeAnimProfile, 1);
            runAnimation(fadeAnimEdit, 0);
        }

        if (showPrivacy) {
            runAnimation(fadeAnimProfile, 0);
            runAnimation(fadeAnimPrivacy, 1);
            setIsEditing(false);
        } else {
            runAnimation(fadeAnimPrivacy, 0);
        }

    }, [isEditing, showPrivacy]);

    return (
        <View style={styles.otherScreens}>
            <Animated.View style={{ opacity: fadeAnimProfile }}>

            </Animated.View>
            <Animated.View style={{ opacity: fadeAnimEdit }}>

            </Animated.View>
            <Animated.View style={{ opacity: fadeAnimPrivacy }}>

            </Animated.View>
            <View style={styles.buttonContainer}>
                <EditProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
                <PrivacyButton showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    otherScreens: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Rubik-Light',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
});

export default ProfileScreen;