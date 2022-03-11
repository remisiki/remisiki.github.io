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


function toggleDarkMode() {
  if (themeIsDark()) {
    $('body').addClass('dark-body');
    $('article').addClass('dark-content');
    $('aside').addClass('dark-content');
    $('p:not(.green-text):not(.red-text):not(.brown-text)').addClass('dark-content');
    $('h1').addClass('dark-content');
    $('h3').addClass('dark-content');
    $('.cell').addClass('dark-content');
    $('.cell .content').addClass('dark-content');
    $('.yellow-marker-thin').addClass('yellow-marker-thin-dark');
  }
  else {
    $('body').removeClass('dark-body');
    $('article').removeClass('dark-content');
    $('aside').removeClass('dark-content');
    $('p:not(.green-text):not(.red-text):not(.brown-text)').removeClass('dark-content');
    $('h1').removeClass('dark-content');
    $('h3').removeClass('dark-content');
    $('.cell').removeClass('dark-content');
    $('.cell .content').removeClass('dark-content');
    $('.yellow-marker-thin').removeClass('yellow-marker-thin-dark');
  }
}

function getTheme() {
  return themeIsDark() ? "dark" : "light";
}

function themeIsDark() {
  return ($('#moon').hasClass('title-selected'));
}

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