import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import firebase from '@react-native-firebase/app';
import 'firebase/auth';


const { height, width } = Dimensions.get('window');

const PrivacyBar = ({ title, content }) => (
    <View style={styles.privacyBar}>
        <Text style={styles.barTitle}>{title}</Text>
        <Text style={styles.barContent}>{content}</Text>
    </View>
);

const EditBox = ({ profile }) => {
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user !== null) {
            setEmail(user.email);
        }
    }, []);

    return (
        <View style={styles.container}>
            <PrivacyBar title="Your Email" content={email} />
            <PrivacyBar title="Display Name" content="userDataStore.name" />
            <PrivacyBar title="Age" content="userDataStore.age" />
            <PrivacyBar title="Location" content="stolen" />
            <PrivacyBar title="Sex" content="I have lots of it (no i was lying im scared of women)" />
            {/* Add as many PrivacyBars as you want here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 0.93,
        backgroundColor: '#f9f9f9',  // Slightly darker than white
        borderRadius: 15,  // More rounded corners
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    privacyBar: {
        width: '100%',
        padding: 15,
        backgroundColor: 'white',  // White background
        borderRadius: 10,  // Rounded corners
        marginVertical: 5,
        elevation: 1, // For a subtle shadow on Android
        shadowColor: "#000", // iOS shadow
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    barTitle: {
        fontWeight: '600',  // Semi-bold
        fontSize: 16,
        marginBottom: 5,
    },
    barContent: {
        color: 'gray',
        fontSize: 14,
    },
});

export default EditBox;
