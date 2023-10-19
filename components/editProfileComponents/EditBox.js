import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';


const { height, width } = Dimensions.get('window');

const EditBox = ({ profile }) => {
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);

    const renderImageItem = ({ item }) => (
        <View style={styles.imageBox}>
            {item ? <Image source={item} style={styles.image} resizeMode="cover" /> : null}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={[...profile.imageLocations, ...Array(6 - profile.imageLocations.length).fill(null)]}
                renderItem={renderImageItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                style={styles.imageList}
            />
            <TextInput
                style={styles.nameInput}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.bioInput}
                value={bio}
                onChangeText={setBio}
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 0.93,
        height: height * 0.65,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageList: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageBox: {
        width: width * 0.3,  // 30% of screen width
        height: width * 0.5, // keep it square
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 2

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    nameInput: {
        width: '90%',
        fontSize: 20,
        marginVertical: 10,
        borderBottomWidth: 1,
    },
    bioInput: {
        width: '90%',
        fontSize: 16,
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});

export default EditBox;
