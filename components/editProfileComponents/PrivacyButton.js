import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const EditProfileButton = ({ showPrivacy, setShowPrivacy }) => {
    const backgroundColor = showPrivacy ? '#fff' : '#fff';
    const textColor = showPrivacy ? '#011C27' : '#011C27';

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={() => setShowPrivacy(!showPrivacy)}
        >
            <Animated.Text style={[styles.buttonText, { color: textColor }]}>
                {showPrivacy ? 'Privacy & Settings' : 'Privacy & Settings'}
            </Animated.Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#D1D9E0',
        elevation: 3, // for Android
        shadowColor: "#000", // for iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default EditProfileButton;
