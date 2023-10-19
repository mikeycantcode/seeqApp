//MessageBox.js
/*
This component will be the component in charge of holding each conversation inside of the message home screen.
It should show the latest message, along with a profile photo. It will be given a profile object, which will contain the most recent message.
Only show the first picture and their name.


*/
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MessageBox = ({ profile }) => {
    const { name, latestMessage, profilePhoto } = profile;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: profilePhoto }}
                style={styles.profileImage}
            />
            <View style={styles.messageInfo}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.messageText}>{latestMessage}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    messageInfo: {
        flex: 1,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    messageText: {
        color: 'gray',
    },
});

export default MessageBox;
