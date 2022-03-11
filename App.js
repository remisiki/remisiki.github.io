import React, { useState, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import $ from 'jquery';
import {
  HomeScreen,
  InfoScreen,
  ReposScreen,
  GameScreen,
  NavigationBlock,
} from './components';
import './components/translation/i18n';
import { toggleDarkMode, getTheme } from './components/control/dark';

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
  $('#menuHome').addClass("menu-item-selected");
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
  $('a[href^=http]').attr("target", "_blank");
  const dark_prefer = localStorage.getItem('dark_prefer')
  if (dark_prefer == "true") {
      $('#moon').addClass('title-selected');
      toggleDarkMode();
  }
  else if (
    dark_prefer == null &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
      $('#moon').addClass('title-selected');
    toggleDarkMode();
  }
};

function App() {
  const totop = require("./assets/page-top.webp");
  // useEffect(() => {
  //   checkDarkMode();
  // }, []);
  return (
    // <NavigationContainer theme={DefaultTheme}>
    <NavigationContainer theme={MyTheme}>
      <header>
        <NavigationBlock darkModeHandler={toggleDarkMode} />
      </header>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Group
          screenOptions={{ headerShown: false}}
          initialParams={{ darkModeHandler: toggleDarkMode() }}
        >
          <Stack.Screen 
            name="Home" 
          >
            {props => <HomeScreen {...props} theme={getTheme} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Info" 
          >
            {props => <InfoScreen {...props} darkModeHandler={toggleDarkMode} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Repos" 
          >
            {props => <ReposScreen {...props} darkModeHandler={toggleDarkMode} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Game" 
          >
            {props => <GameScreen {...props} darkModeHandler={toggleDarkMode} theme={getTheme} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
      <a onClick={() => $('html, body').animate({ scrollTop: 0 }, 'fast')} style={{cursor: "pointer"}}>
        <img src={totop} className="totop" />
      </a>
    </NavigationContainer>
  );
}

export default App;