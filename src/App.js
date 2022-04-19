import React, { Suspense } from 'react';
import './components/translation/i18n';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import { NavigationBlock } from './components/widgets/NavigationBlock';
import { ScrollHandler } from './components/control/scroll';
import { Title } from './components/control/Title';
import './components/control/init';

const HomeScreen = React.lazy(() => import('./components/Home'));
const InfoScreen = React.lazy(() => import('./components/Info'));
const ReposScreen = React.lazy(() => import('./components/Repos'));
const GameScreen = React.lazy(() => import('./components/Game'));

function App() {
  return (
    <>
      <Title />
      <header>
        <NavigationBlock />
      </header>
      <HashRouter>
        <ScrollHandler />
        <Switch>
          <Route
            path="/profile"
            component={() => {
              return (
                <Suspense>
                  <InfoScreen />
                </Suspense>
              );
            }}
          />
          <Route
            path="/project"
            component={() => {
              return (
                <Suspense>
                  <ReposScreen />
                </Suspense>
              );
            }}
          />
          <Route
            path="/game"
            component={() => {
              return (
                <Suspense>
                  <GameScreen />
                </Suspense>
              );
            }}
          />
          <Route
            path="/"
            component={() => {
              return (
                <Suspense>
                  <HomeScreen />
                </Suspense>
              );
            }}
          />
        </Switch>
      </HashRouter>
      <img id="totop" alt="go to page top" onClick={() => {window.scrollTo(0, 0);}} />
    </>
  );
}

export default App;