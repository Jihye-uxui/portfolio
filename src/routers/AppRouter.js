import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { APP_FOLDER_NAME } from '../globals/globals';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import PageHome from '../pages/PageHome';
import PageWork from '../pages/PageWork';
import PageWorkInfo from '../pages/PageWorkInfo';
import PageAbout from '../pages/PageAbout';
import PageNotFound from '../pages/PageNotFound';


// Styles
import '../scss/styles.scss';

export class AppRouter extends Component {
  render() {
    return (
      <Router basename={APP_FOLDER_NAME}>
        <Header />
          <Switch>
            <Route exact path="/"><PageHome /></Route>
            <Route exact path= "/work" component={PageWork} />
            <Route exact path= "/work/:id" component={PageWorkInfo} />
            <Route exact path="/about"><PageAbout /></Route>
            <Route path="/"><PageNotFound /></Route>
          </Switch>
        <Footer />
      </Router>
    )
  }
}

export default AppRouter;
