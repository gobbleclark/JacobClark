import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import { IonApp, IonRouterOutlet } from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import './theme/variables.css';
import { calendar, personCircle, map, informationCircle, search, searchCircle, people, home, settings, golfOutline } from 'ionicons/icons';
import CreateMemory from './components/CreateMemory';
const App = () => (
  <>
  <IonApp>
    {/* <Navbar /> */}
    <FetchUser>
      <Container>
      <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/create-memory" component={CreateMemory} />
              <Route component={NoMatch} />
              </Switch>
            </IonRouterOutlet>
      <IonTabBar color="primary" slot="bottom">
        <IonTabButton tab="home" href="/">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search/friends">
          <IonIcon icon={searchCircle} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
            <IonTabButton tab="memories" href="/create-memory">
            <IonIcon icon={golfOutline} />
            <IonLabel>Add Memory</IonLabel>
            </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
      </Container>
    </FetchUser>
  </IonApp>
  </>
);

export default App;