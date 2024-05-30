import { registerRootComponent } from 'expo';

import App from './App';

import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const firebaseConfig = {
    apiKey: "AIzaSyC3VHOAUnguAcGRt_-GSrPVFU526q7wznI",
    authDomain: "chatpdfapp.firebaseapp.com",
    projectId: "chatpdfapp",
    storageBucket: "chatpdfapp.appspot.com",
    messagingSenderId: "613503853683",
    appId: "1:613503853683:web:d12170aa6bbe8dd4d57606",
    measurementId: "G-XMVHET41ZH",
    databaseURL: "emlkemkeks",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
    webClientId: '1030245507743-9a10m48g79hntbmcd0gs6h37sf1fflh6.apps.googleusercontent.com', // Your web client ID here
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
