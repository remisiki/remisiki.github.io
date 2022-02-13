import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import $ from 'jquery'
import {
  HomeScreen,
  InfoScreen,
  ReposScreen,
  GameScreen,
  GalleryScreen,
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

$(window).on('scroll', function() {
  const re = "#";
  var y = $(this).scrollTop();
  var h = $(this).height();
  // var sections = $('#sidecontent').find('a:not([href^="http"])').toArray();
  $('.totop').toggleClass('slide-in', y > h)
  // for (var i = 0; i < sections.length; i++) {
  //   sections[i] = (sections[i].toString().match(/^.*(#.*)/)[1]);
  // }
  // for (var i = 0; i < sections.length; i++) {
  //   var prev_h = $(sections[i]).offset().top - 150;
  //   var next_h;
  //   if (i == sections.length - 1) {
  //     next_h = $(document).height();
  //   }
  //   else {
  //     next_h = $(sections[i + 1]).offset().top - 150;
  //   }
  //   var sec = sections[i] + "section";
  //   if ((y >= prev_h) && (y < next_h)) {
  //     $(sec).css({
  //       "border-color": "#2083e0",
  //     });
  //   }
  //   else {
  //     $(sec).css({
  //       "border-color": "#eee",
  //     });
  //   }
  // }
});

function App() {
  const totop = require("./assets/page-top.webp");
  return (
    // <NavigationContainer theme={DefaultTheme}>
    <NavigationContainer theme={MyTheme}>
      <section id="top">
        <NavigationBlock />
      </section>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Group
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
          <Stack.Screen 
            name="Info" 
            component={InfoScreen} 
          />
          <Stack.Screen 
            name="Repos" 
            component={ReposScreen}
          />
          <Stack.Screen 
            name="Game" 
            component={GameScreen}
          />
          <Stack.Screen 
            name="Gallery" 
            component={GalleryScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
      <a href="#">
        <img src={totop} className="totop" />
      </a>
    </NavigationContainer>
  );
}

export default App;