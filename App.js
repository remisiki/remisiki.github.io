import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import $ from 'jquery'
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

window.onload = function() {
  $('#Home').addClass("title-selected");
  switch ($('#Home').text()) {
    case "Home":
      $('#en').addClass("title-selected");
      break;
    case "ホーム":
      $('#ja').addClass("title-selected");
      break;
    case "主頁":
      $('#zh').addClass("title-selected");
      break;
    default:
      break;
  }
};

function App() {
  return (
    // <NavigationContainer theme={DefaultTheme}>
    <NavigationContainer theme={MyTheme}>
      <NavigationBlock />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            // headerTitle: (props) => <NavigationBlock {...props} name="Remisiki's Home" />,
            headerLeft: () => null,
            title: null,
          }} 
        />
        <Stack.Screen 
          name="Info" 
          component={InfoScreen} 
          options={{ 
            // headerTitle: (props) => <NavigationBlock {...props} name="Info" />,
            headerLeft: () => null,
            title: null,
          }} 
        />
        <Stack.Screen 
          name="Repos" 
          component={ReposScreen} 
          options={{ 
            // headerTitle: (props) => <NavigationBlock {...props} name="Repos" />, 
            headerLeft: () => null,
            title: null,
          }} 
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ 
            // headerTitle: (props) => <NavigationBlock {...props} name="Game" />, 
            headerLeft: () => null,
            title: null,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;