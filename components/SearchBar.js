import React from 'react';
import { View, Text, TextInput, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Sub-component: Input Box
const SearchInputBox = ({ searchText, setSearchText, editable }) => (
    <TextInput
        editable={editable}
        style={styles.searchInput}
        placeholder="Find your match..."
        onChangeText={setSearchText}
        value={searchText}
    />
);

// Sub-component: Reload Button
const ReloadButton = ({ handleReload }) => (
    <TouchableOpacity style={styles.reloadButton} onPress={handleReload}>
        <MaterialCommunityIcons name="refresh" color="#6C757D" size={24} />
    </TouchableOpacity>
);

// Main SearchBar component
const SearchBar = ({ searchText, setSearchText, searchActive, handleSearch, handleReload, inputAnim }) => {
    const inputStyle = {
        transform: [
            {
                translateY: inputAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -120]
                })
            }
        ]
    };

    return (
        <View style={styles.searchArea}>
            <Animated.View style={[styles.searchBoxContainer, inputStyle]}>
                <SearchInputBox searchText={searchText} setSearchText={setSearchText} editable={!searchActive} />
                {searchActive && <ReloadButton handleReload={handleReload} />}
            </Animated.View>
            <View style={styles.buttonContainer}>
                {!searchActive && (
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchArea: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
    },
    searchBoxContainer: {
        width: '100%',
    },
    searchInput: {
        height: 45,
        borderColor: '#ADB5BD',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 18,
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
    },
    reloadButton: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -25 }],
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    searchButton: {
        backgroundColor: '#495057',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 50,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
});

export default SearchBar;
