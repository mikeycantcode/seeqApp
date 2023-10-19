import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrivacyBar = ({ title, content }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textInfo}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.contentText}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10, // Rounded corners
        backgroundColor: '#F7F7F7', // Slightly darker than white
        marginBottom: 10,
    },
    textInfo: {
        flex: 1,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    contentText: {
        color: 'gray',
    },
});

export default PrivacyBar;
