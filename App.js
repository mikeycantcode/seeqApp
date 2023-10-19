import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import LoadingPage from './pages/LoadingPage';
import MessageScreen from './pages/MessageScreen';
import ProfileScreen from './pages/ProfileScreen';
import LoginScreen from './pages/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Tab = createBottomTabNavigator();  // Add this line


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);  // New state variable



  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // Get the user info
      console.log("got here");
      const userInfo = await GoogleSignin.signIn();
      console.log("got here 2")
      // Create a new Firebase credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

      // Login to Firebase with the Google credentials
      await auth().signInWithCredential(googleCredential);

      setIsLoggedIn(true);
    } catch (error) {
      console.log('Google Sign-In Error:', error);
    }
  };


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Logic for signup can go here, like navigating to a SignupScreen
    console.log('Signup button pressed');  // Placeholder
  };





  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);  // Hide the Loading Screen after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoadingScreen) {
    return <LoadingPage />;
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} onSignup={handleSignup} handleGoogleLogin={handleGoogleLogin} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,  // This line hides the labels
          tabBarStyle: {
            backgroundColor: '#011C27', // This sets the background color
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="find-replace" color={focused ? '#658E9C' : 'lightgray'} size={size * 1.2} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="tray-full" color={focused ? '#658E9C' : 'lightgray'} size={size * 1.2} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="account-outline" color={focused ? '#658E9C' : 'lightgray'} size={size * 1.2} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  otherScreens: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
