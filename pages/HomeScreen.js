import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import * as Font from 'expo-font';
import TopBar from '../components/TopBar';
import MainPageScroller from '../components/MainPageScroller'; // Import MainPageScroller
import SearchBar from '../components/SearchBar';
import SwipeDirections from '../components/homeScreenComponents/SwipeDirections'; // Import SwipeDirections


const HomeScreen = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false); //fonts usual stuff
    const [searchText, setSearchText] = useState(''); //prop for the search text
    const [searchActive, setSearchActive] = useState(false); // search active prop
    const inputAnim = useRef(new Animated.Value(0)).current;
    const topBarAnim = useRef(new Animated.Value(1)).current; // Initialize to 1 for full opacity
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
                'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
                'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
                'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf')
            });
            setFontsLoaded(true);
        };
        loadFonts();
    }, []);

    const handleReload = () => {
        resetSearch();
        resetAnimations();
    };

    const resetSearch = () => {
        setSearchActive(false);
        setSearchText('');
        setProfiles([]);
    }

    const resetAnimations = () => {
        Animated.parallel([
            Animated.timing(inputAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(topBarAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            })
        ]).start();
    }

    const getProfiles = (searchTerms) => {
        // Here, you'd make your API call or other logic to get the profiles
        // based on the search terms. For now, leaving it empty.

        return [{
            userId: 2020292393,
            imageLocations: [require('../assets/testing/test2.jpeg'), require('../assets/testing/test1.jpg'), require('../assets/testing/IMG_0310.jpg')],
            name: 'Kevin',
            bio: 'The bitches call me vest kid',
            age: '23'
        }, {
            userId: 2019192393,
            imageLocations: [require('../assets/testing/test2.jpeg'), require('../assets/testing/test1.jpg'), require('../assets/testing/IMG_0310.jpg')],
            name: 'Mevin',
            bio: 'Wahh wahh',
            age: '23'
        }, {
            userId: 24920292393,
            imageLocations: [require('../assets/testing/test2.jpeg'), require('../assets/testing/test1.jpg'), require('../assets/testing/IMG_0310.jpg')],
            name: 'Levin',
            bio: 'The bitches call me vest kid',
            age: '23'
        }, {
            userId: 2019492393,
            imageLocations: [require('../assets/testing/test2.jpeg'), require('../assets/testing/test1.jpg'), require('../assets/testing/IMG_0310.jpg')],
            name: 'Austin',
            bio: 'Wahh wahh',
            age: '23'
        }]; // Placeholder: This would be the list of profiles you receive from the API or other source.
    };

    const handleSearch = () => {
        // Your existing search logic
        const cleanedSearch = searchText.replace(/[^a-zA-Z0-9 ]/g, ' ');
        const words = cleanedSearch.split(' '); // assuming words are separated by space
        const cleanedWords = [];

        words.forEach(word => {
            const trimmedWord = word.trim(); // Remove leading and trailing spaces

            // Only process words that are not empty strings
            if (trimmedWord) {
                console.log(trimmedWord);
                cleanedWords.push(trimmedWord);
            }
        });

        const resultJSON = {
            'cleanedWords': cleanedWords
        };

        const receivedProfiles = getProfiles(cleanedWords);
        setProfiles(receivedProfiles);
        setSearchActive(true);
        runSearchAnimation();
    };

    const runSearchAnimation = () => {
        Animated.parallel([
            Animated.timing(inputAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(topBarAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            })
        ]).start();
    }

    if (!fontsLoaded) return <Text>Loading...</Text>;

    const topBarStyle = { opacity: topBarAnim };

    return (
        <View style={styles.container}>
            <Animated.View style={topBarStyle}>
                <TopBar />
            </Animated.View>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                searchActive={searchActive}
                handleSearch={handleSearch}
                handleReload={handleReload}
                inputAnim={inputAnim}
            />

            {searchActive && (
                <View style={styles.mainScrollerContainer}>
                    <MainPageScroller profiles={profiles} />
                </View>
            )}
            {!searchActive && <SwipeDirections />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 25, // Give a little more room at the top
    },
    mainScrollerContainer: {
        position: 'relative',
        top: -100,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    }
});

export default HomeScreen;
