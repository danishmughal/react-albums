// Index.ios.js - place code in here for iOS

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native'; // Deconstructed Import
import Header from './src/components/header';


// Create a component
const App = () => (
    <Header />   // Self-closing tag
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
