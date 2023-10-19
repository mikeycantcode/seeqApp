import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icons

const LoginButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 0,
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
    loginButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export default LoginButton;
