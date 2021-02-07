import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';
//import Pages
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import Nav from './components/Nav';
import MovieDetails from './components/MovieDetails';

import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Switch>
        <div className="App">
          <GlobalStyle/>
          <Nav/>
          <Route exact path ="/" component={AboutUs} />
          <Route exact path="/OurWork" component ={OurWork}/>
          <Route path ="/ContactUs" component ={ContactUs}/>
          <Route  path="/OurWork/:id" component={MovieDetails}/>
        </div>
      </Switch>
    
  );
}

export default App;
