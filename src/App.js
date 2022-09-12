import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Explore from './Explore';
import Events from './Events';
import HiddenGems from './HiddenGems';
import About from './About';
import Anime from './Anime';
import TV from './TV';
import Profile from './Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<Home />}
            >
            </Route>
            <Route 
              exact path="/Explore"
              element={<Explore />}
            >
            </Route><Route 
              exact path="/Events"
              element={<Events />}
            >
            </Route><Route 
              exact path="/HiddenGems"
              element={<HiddenGems />}
            >
            </Route><Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            <Route 
              exact path="/Anime"
              element={<Anime />}
            >
            </Route>
            <Route 
              exact path="/TV"
              element={<TV />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={<Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
