import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Vibration, Text } from 'react-native';

import MessageBox from '../components/MessageBox'; // Make sure this path is correct
import AnimatedLoadingS from '../components/AnimatedLoadingS';

// Embedded dummy data
const profiles = [
];

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Current Queue</Text>
            <View style={styles.queueContainer}>
                <FlatList
                    data={profiles}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => Vibration.vibrate()}
                            style={styles.queueItem}
                            activeOpacity={0.9}
                        >
                            <MessageBox profile={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    queueContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 10,
    },
    queueItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    // Add other necessary styles for your components
});

export default MessageScreen;
