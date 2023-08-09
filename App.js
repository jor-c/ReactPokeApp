import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './component/HomeScreen';
import SettingScreen from './component/SettingScreen';
import normal from './component/normal';
import fire from './component/fire';
import water from './component/water';
import grass from './component/grass';



const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <View style={styles.Container}>
      <NavigationContainer style={styles.Container}>
        
          <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }} style={styles.Container}>
            
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Normal Pokemon" component={normal} />
              <Drawer.Screen name="Fire Pokemon" component={fire} />
              <Drawer.Screen name="Water Pokemon" component={water} />
              <Drawer.Screen name="Grass Pokemon" component={grass} />
            
          </Drawer.Navigator>
        
      </NavigationContainer>
    </View>  
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFC0CB', 
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
});




