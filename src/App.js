import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

// Components

import TopBar from './components/TopBar';
import Footer from './components/Footer/Footer';
import MenuContainer from './components/Menu/MenuContainer';

function App() {
  return (
    <Router>
        <TopBar />
        <MenuContainer />
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/projects/" component={Projects}/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/contacts" component={Contacts}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
