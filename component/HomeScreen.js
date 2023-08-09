import React from "react";
import { StyleSheet, View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import NormalScreen from './normal'; // Import the NormalScreen component
import FireScreen from './fire'; // Import the FireScreen component
import WaterScreen from './water';
import GrassScreen from './grass';


const HomeScreen = () => {
    const navigation = useNavigation(); // Get the navigation object

    const navigateToNormalScreen = () => {
        navigation.navigate('Normal Pokemon'); // Navigate to the NormalScreen
    };

    const navigateToFireScreen = () => {
        navigation.navigate('Fire Pokemon'); // Navigate to the NormalScreen
    };

    const navigateToWaterScreen = () => {
        navigation.navigate('Water Pokemon'); // Navigate to the NormalScreen
    };

    const navigateToGrassScreen = () => {
        navigation.navigate('Grass Pokemon'); // Navigate to the NormalScreen
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
            style={[styles.box, { backgroundColor: '#D3D3D3' }]}
            onPress={navigateToNormalScreen} // Call the function when pressed
            >
            <Text style={styles.buttonText}>Normal Pokemon</Text>
            <NormalScreen />
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.box, { backgroundColor: '#FFA500' }]}
            onPress={navigateToFireScreen}
            >
            <Text style={styles.buttonText}>Fire Pokemon</Text>
            <FireScreen />
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.box, { backgroundColor: '#89CFF0' }]}
            onPress={navigateToWaterScreen}
            >
            <Text style={styles.buttonText}>Water Pokemon</Text>
            <WaterScreen />
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.box, { backgroundColor: '#90EE90' }]}
            onPress={navigateToGrassScreen}
            >
            <Text style={styles.buttonText}>Grass Pokemon</Text>
            <GrassScreen />
        </TouchableOpacity>
      </View>
    );
  };


export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC0CB', // Set the background color to #FFC0CB
      alignItems :'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    optionsContainer: {
      position: 'absolute',
      bottom: 80,
    },
    optionsRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      color: '#000', // Set the text color to #000
    },
    box: {
        width: 300,
        height: 120,
        marginVertical: 20,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        justifyContent: "center", // Centers the text vertically
        alignItems: "center",

    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },

  });