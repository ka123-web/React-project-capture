import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//import Pages
import AboutUs from './Pages/AboutUs';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
