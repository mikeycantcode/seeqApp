import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';

const GoogleAuthButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.googleButton}>
            <View style={styles.iconContainer}>
                <Image
                    source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }}
                    style={styles.googleLogo}
                />
            </View>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 10,
        elevation: 3, // For Android
        shadowColor: '#000', // For iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    iconContainer: {
        borderRadius: 12,
        padding: 6,
        marginRight: 12,
    },
    googleLogo: {
        width: 24,
        height: 24,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});

export default GoogleAuthButton;
