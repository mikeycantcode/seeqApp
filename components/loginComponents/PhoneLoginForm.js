import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneLoginForm = () => {
    const [areaCode, setAreaCode] = useState('');
    const [firstThree, setFirstThree] = useState('');
    const [lastFour, setLastFour] = useState('');

    const onSubmit = () => {
        const phoneNumber = `${areaCode}${firstThree}${lastFour}`;
        // Handle submission logic here
        console.log('Phone Number:', phoneNumber);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Phone Login</Text>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Area Code"
                    value={areaCode}
                    onChangeText={setAreaCode}
                    keyboardType="number-pad"
                    maxLength={3}
                    style={styles.input}
                />
                <TextInput
                    placeholder="First 3"
                    value={firstThree}
                    onChangeText={setFirstThree}
                    keyboardType="number-pad"
                    maxLength={3}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Last 4"
                    value={lastFour}
                    onChangeText={setLastFour}
                    keyboardType="number-pad"
                    maxLength={4}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        borderRadius: 30,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '600',
    },
    inputGroup: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: 65,
        margin: 5,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 3,
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#011C27',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 3,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});

export default PhoneLoginForm;
