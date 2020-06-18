import React from 'react';
import {Route} from 'react-router-dom';


// components



// pages
import DashBoard from "./Components/Pages/DashBoard";


function App() {
  return (



    <div className="App">

      <Route exact path='/'>

        <DashBoard />

      </Route>

    </div>
  );
}

export default App;
