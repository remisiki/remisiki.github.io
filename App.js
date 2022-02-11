import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';
import HomeScreen from './components/Home'
import InfoScreen from './components/Info'
import ReposScreen from './components/Repos'

function LogoTitle(props) {
  return (
    /*<Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />*/
    <Text {...props}> a{props}</Text>
  );
}

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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Remisiki\'s Home', /*headerTitle: (props) => <LogoTitle {...props} />,*/
              /*title: 'Second Page', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
              headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert('Left Menu Clicked')}
              style={{marginLeft: 10}}>
              <Text style={{color: 'white'}}>Left Menu</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Right Menu Clicked')}
              style={{marginRight: 10}}>
              <Text style={{color: 'white'}}>Right Menu</Text>
            </TouchableOpacity>
          ), */
    }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Info',/* headerTitle: (props) => <LogoTitle {...props} /> */}} />
        <Stack.Screen name="Repos" component={ReposScreen} options={{ title: 'Repos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;