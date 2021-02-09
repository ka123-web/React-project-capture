import React from 'react';
import {AnimatePresence} from 'framer-motion';

//Global Style
import GlobalStyle from './components/GlobalStyle';
//import Pages
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import Nav from './components/Nav';
import MovieDetails from './components/MovieDetails';

import {Route, Switch, useLocation} from 'react-router-dom';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
        <div className="App">
          <GlobalStyle/>
          <Nav/>
          <Route exact path ="/" component={AboutUs} />
          <Route exact path="/OurWork" component ={OurWork}/>
          <Route path ="/ContactUs" component ={ContactUs}/>
          <Route  path="/OurWork/:id" component={MovieDetails}/>
        </div>
      </Switch>
      </AnimatePresence>
    
  );
}

export default App;
