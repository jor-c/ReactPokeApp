import React from "react";
import { StyleSheet, View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Index from 'E:/uer/Expo/PokemonApp2/component/index';

const WaterScreen = () => {

    const customPokemonPath = "https://pokeapi.co/api/v2/type/water";
    
    const navigation = useNavigation(); // Get the navigation object

    const navigateToHomeScreen = () => {
      navigation.navigate('Home'); // Navigate to the NormalScreen
    };

    return(
        <View style={styles.Container}>
            <Index pokemonAPIPath = {customPokemonPath}/>
            {/* <Text style={[styles.contentContainer]}>This is Water Screen</Text> */}
            <TouchableOpacity
              style={[styles.footerContainer, { backgroundColor: '#fff' }]}
              onPress={navigateToHomeScreen} // Call the function when pressed
              >
              <Text>Back to Home</Text>
              </TouchableOpacity>
        </View>
    )
}

export default WaterScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    justifyContent: 'flex-end',  
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center", // Centers the text vertically
    alignItems: "center", // Centers the text horizontally
    alignContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    height: 50,
    flex: 1/20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "center",
    borderTopWidth: 0,
    borderColor: "#000",
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
    textAlign : 'center',
  },
  
});