import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import TopBar from '../components/TopBar';


const HomeScreen = () => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition(...);
    }, []);

    return (
        <View style={styles.container}>
            <TopBar />
            <MapView
                style={styles.map}
                region={region}
                mapType="satellite"
            // onRegionChange={setRegion}
            >
                {/* Map Markers and Routes */}
            </MapView>
            {/* Additional components like BottomSheet for ride details can be added here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HomeScreen;
