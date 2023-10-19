import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Vibration,
} from 'react-native';
import MessageBox from '../components/MessageBox'; // Make sure this path is correct
import AnimatedLoadingS from '../components/AnimatedLoadingS';

// Embedded dummy data
const profiles = [
    {
        name: 'John',
        latestMessage: 'Hey, how are you?',
        profilePhoto: 'https://example.com/john.jpg',
    },
    {
        name: 'Jane',
        latestMessage: 'What are you up to?',
        profilePhoto: 'https://example.com/jane.jpg',
    },
    {
        name: 'Mike',
        latestMessage: 'Are you coming to the party?',
        profilePhoto: 'https://example.com/mike.jpg',
    },
    {
        name: 'Sara',
        latestMessage: 'Let\'s catch up soon!',
        profilePhoto: 'https://example.com/sara.jpg',
    },
];

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={profiles}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => Vibration.vibrate()}>
                        <MessageBox profile={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50, // Move the Flexbox down by 50 units
    },
});


export default MessageScreen;
