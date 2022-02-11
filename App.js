import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './assets/index.css';

function LogoTitle(props) {
  return (
    /*<Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />*/
    <Text {...props}> a{props}</Text>
  );
}

function DetailsScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <br />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <br />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function InfoScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <div id="content" className="wrapper doc">
      <article style={style.article}>
        {/*<article>Test </article>*/}
        <h1>About me</h1>
        <p>
          HogeHoge
        </p>
        {/*<Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />*/}
      </article>
      <aside className="sidebar" id="sidebar">
        {/*<a href="#" onclick="javascript:foldSideBar(); return false;">
          <div id="fold"><img src="./index_files/assets/images/fold.png" id="foldpng"></div></a>*/}
        <div id="sidecontent">
        <h3>
            <span lang="en">Contents</span>
        </h3>
        <ul id="side1">
          <a href="#" onClick={() => {
            navigation.navigate('Home', {
              // itemId: 86,
              // otherParam: 'anything you want here',
            });
          }}>
            <span lang="en">Home</span>
          </a>
          <a href="#" onClick={() => {
            navigation.navigate('Info', {
              // itemId: 86,
              // otherParam: 'anything you want here',
            });
          }}>
            <span lang="en">Info</span>
          </a>
          <a href="#">
            <span lang="en">Repo</span>
          </a>
        </ul>
        </div>
      </aside>
    </div>
  );
}

function HomeScreen({route, navigation}) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <div id="content" className="wrapper doc">
      <article style={style.article}>
        {/*<article>Test </article>*/}
        <h1>Home Screen</h1>
        <p>
          Hello! HOGE
        </p>
        {/*<Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />*/}
      </article>
      <aside className="sidebar" id="sidebar">
        {/*<a href="#" onclick="javascript:foldSideBar(); return false;">
          <div id="fold"><img src="./index_files/assets/images/fold.png" id="foldpng"></div></a>*/}
        <div id="sidecontent">
        <h3>
            <span lang="en">Contents</span>
        </h3>
        <ul id="side1">
          <a href="#" onClick={() => {
            navigation.navigate('Info', {
              // itemId: 86,
              // otherParam: 'anything you want here',
            });
          }}>
            <span lang="en">Info</span>
          </a>
          <a href="#">
            <span lang="en">Repo</span>
          </a>
        </ul>
        </div>
      </aside>
    </div>
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
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
