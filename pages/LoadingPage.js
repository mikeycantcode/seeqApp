import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedLoadingS from '../components/AnimatedLoadingS'; // Make sure to import it correctly

const LoadingPage = () => {
    return (
        <View style={styles.container}>
            <AnimatedLoadingS />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // you can change it as you like
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingPage;
