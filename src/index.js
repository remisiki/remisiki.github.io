import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/translation/i18n';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { NavigationBlock } from './components/widgets/NavigationBlock';
import { ScrollHandler } from './components/control/scroll';
import { Title } from './components/control/Title';
import './components/control/init';

const HomeScreen = React.lazy(() => import('./components/Home'));
const InfoScreen = React.lazy(() => import('./components/Info'));
const ReposScreen = React.lazy(() => import('./components/Repos'));
const GameScreen = React.lazy(() => import('./components/Game'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
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
    <div onClick={() => {window.scrollTo(0, 0);}} >
      <img id="totop" />
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
