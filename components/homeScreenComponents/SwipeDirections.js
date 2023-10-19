import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SwipeDirections = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const loopAnimation = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0.8,
                duration: 1000,
                useNativeDriver: false,
                delay: 500,
            }),
        ]).start(() => loopAnimation()); // Loop the animation indefinitely
    };

    useEffect(() => {
        loopAnimation();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.instructionBox, { opacity: fadeAnim }]}>
                <View style={styles.directionContainer}>
                    <Text style={styles.actionText}>Swipe Right: Like</Text>
                </View>
                <View style={styles.directionContainer}>
                    <Text style={styles.actionText}>Swipe Up: Next Profile</Text>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 300,
    },
    instructionBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Lightened background color
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: 'black', // Adding a shadow
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5, // Android shadow
    },
    directionContainer: {
        marginBottom: 5,
    },
    actionText: {
        fontSize: 14,
        color: 'grey',
    },
});

export default SwipeDirections;
