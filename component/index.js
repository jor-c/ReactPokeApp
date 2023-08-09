import { DefaultTheme } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { RectButton } from 'react-native-gesture-handler';

import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';


const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=150&offset=0";
const pokeFire = 'type/fire/'
const firstGenPokemonPath = `${pokePath}${pokeQuery}`;
const firstGenPokemonPathFire = `${pokePath}${pokeFire}`;


const index = ({pokemonAPIPath}) => {
    const [firstGenPokeDetails, setfirstGenPokeDetails] = useState([]);
    const [PokemonCount, setPokemonCount] = useState(0);

    useEffect(() => {
      const fetchFirstGenPoke = async () => {
        const firstGenPokeIDResponse = await fetch(pokemonAPIPath);
        const firstGenPokeIDBody = await firstGenPokeIDResponse.json();

        const firstGenPokeDetails = await Promise.all(
          firstGenPokeIDBody.pokemon.map(async (p) => {
            const pokeDetails = await fetch(p.pokemon.url);
            return await pokeDetails.json();
          })  
        );
        
        setfirstGenPokeDetails(firstGenPokeDetails);
        setPokemonCount(firstGenPokeDetails.length); 
      };

      fetchFirstGenPoke(); 

    }, []);

    const renderPoke = ({item}) => {
      return (
        <View style={{marginTop: 100}}>
          <Text style={styles.pokemonContainer}>{item.name.toUpperCase()}</Text>
          <Image
            style={{width:200, height:200, alignSelf:'center'}}
            source = {
              {
                uri: item.sprites.front_default
              }
            }
          />
        </View>
      );
    };

    return(
      <View style = {styles.container}>
        <Text style={styles.countText}>{`Pokémon Count: ${PokemonCount}`}</Text>
        <FlatList 
          data={firstGenPokeDetails} 
          renderItem={renderPoke}
        />
      </View>
    );
};

export default index

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  pokemonContainer: {
    fontSize: 24,
    fontStyle:'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  countText: {
    // color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
});