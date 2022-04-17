import React, { useState, useEffect, Suspense } from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import { NavigationBlock } from './components';
const HomeScreen = React.lazy(() => import('./components/Home'));
const InfoScreen = React.lazy(() => import('./components/Info'));
const ReposScreen = React.lazy(() => import('./components/Repos'));
const GameScreen = React.lazy(() => import('./components/Game'));
import './components/translation/i18n';
import { toggleDarkMode, getTheme, checkDarkMode } from './components/control/dark';

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
  checkDarkMode();
};

function App() {
  const totop = require("./assets/page-top.webp");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    checkDarkMode();
  }, [i18n.language]);
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
          <Stack.Screen name="Home" options={{ title: t("t") }}>
            {props => 
              <Suspense fallback={<div></div>} >
                <HomeScreen {...props} theme={getTheme} />
              </Suspense>
            }
          </Stack.Screen>
          <Stack.Screen name="Info" options={{ title: t("t") }}>
            {props => 
              <Suspense fallback={<div></div>} >
                <InfoScreen {...props} darkModeHandler={toggleDarkMode} />
              </Suspense>
            }
          </Stack.Screen>
          <Stack.Screen name="Repos" options={{ title: t("t") }}>
            {props => 
              <Suspense fallback={<div></div>} >
                <ReposScreen {...props} darkModeHandler={toggleDarkMode} />
              </Suspense>
            }
          </Stack.Screen>
          <Stack.Screen name="Game" options={{ title: t("t") }}>
            {props => 
              <Suspense fallback={<div></div>} >
                <GameScreen {...props} darkModeHandler={toggleDarkMode} theme={getTheme} />
              </Suspense>
            }
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