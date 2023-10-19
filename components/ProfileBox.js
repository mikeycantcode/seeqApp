import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


// Get screen dimensions
const { height, width } = Dimensions.get('window');

const ProfileBox = ({ profile }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [previousImageIndex, setPreviousImageIndex] = useState(null); // To store previous image index
    const [isImageLoading, setIsImageLoading] = useState(false);

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


    const handlePress = () => {
        setPreviousImageIndex(currentImageIndex);
        setIsImageLoading(true);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profile.imageLocations.length);
    };

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    const renderProgressBar = () => {
        return (
            <View style={styles.progressBar}>
                {profile.imageLocations.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.progressBarItem,
                            index <= currentImageIndex ? styles.progressBarFilled : styles.progressBarEmpty,
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handlePress}>
            <View style={styles.box}>

                {isImageLoading && previousImageIndex !== null && (
                    <Image
                        source={profile.imageLocations[previousImageIndex]} // Use the previous image as a placeholder
                        style={styles.image}
                        resizeMode="stretch"
                    />
                )}
                <Image
                    source={profile.imageLocations[currentImageIndex]}
                    onLoad={handleImageLoad}
                    style={isImageLoading ? { display: 'none' } : styles.image}
                    resizeMode="stretch"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(1,28,39,0.75)']}
                    style={styles.gradient}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{profile.name}</Text>
                        <Text style={styles.bio}>{profile.bio}</Text>
                    </View>
                </LinearGradient>
                {renderProgressBar()}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        borderWidth: 0,
        borderColor: 'black',
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'relative',
    },
    textContainer: {
        position: 'absolute',  // positioned absolutely
        top: 0,                // aligned to the top
        left: 0,               // aligned to the left
        right: 0,              // and right
        bottom: 20,             // and bottom
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: 27,
        fontFamily: 'Rubik-Medium',
        color: 'white',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 20,
    },
    image: {
        height: height * 0.67, // 75% of screen height
        width: width * 0.93,  // 25% of screen width
        margin: 1,
        borderRadius: 20,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Rubik-Regular',
        color: 'white',
    },
    progressBar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        height: 5,
        zIndex: 2,
        borderRadius: 20,
    },
    progressBarItem: {
        flex: 1,
        height: '100%',
        marginHorizontal: 8,
        borderRadius: 50,
    },
    progressBarFilled: {
        backgroundColor: '#fafafa',
    },
    progressBarEmpty: {
        backgroundColor: '#658E9C',
    },
});

export default ProfileBox;
