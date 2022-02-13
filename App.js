import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import {
  HomeScreen,
  InfoScreen,
  ReposScreen,
  GameScreen,
  NavigationBlock,
} from './components';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#6782e6',
    // background: '#333',
    background: 'rgba(255, 255, 255, 0)',
    // background: '#45474d',
    card: '#6782e6',
    text: '#ffffff',
    border: '#dcdee3',
    notification: '#ffffff',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer theme={DefaultTheme}>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: (props) => <NavigationBlock {...props} name="Remisiki's Home" />,
          }} 
        />
        <Stack.Screen 
          name="Info" 
          component={InfoScreen} 
          options={{ 
            headerTitle: (props) => <NavigationBlock {...props} name="Info" />,
          }} 
        />
        <Stack.Screen 
          name="Repos" 
          component={ReposScreen} 
          options={{ 
            headerTitle: (props) => <NavigationBlock {...props} name="Repos" />, 
          }} 
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ 
            headerTitle: (props) => <NavigationBlock {...props} name="Game" />, 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;