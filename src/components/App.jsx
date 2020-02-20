import React from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import {Stage1} from './Stage1';
import {Stage2} from './Stage2';
import {Stage3} from './Stage3';

function App(){
  return (

    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Stage1} />
          <Route path='/stage2' component={Stage2} />
          <Route path='/stage3' component={Stage3} />
        </Switch>
    </div>


  );


}

export default App;
