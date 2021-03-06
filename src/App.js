import React from 'react';
import {Route} from 'react-router-dom' //imported Route
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  
  <div>

    <Navigation />

    <Route exact path = "/">
      <Home/>
    </Route>  
    
    
    <Route path = "/About">
      <About />
    </Route> 
    
    <Route path = "/Contact">
      <Contact />
    </Route>
     
    

  </div>
);

export default App;
