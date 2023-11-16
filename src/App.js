import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './components/Home'
import FactOne from './components/FactOne'
import factTwo from './components/factTwo'
import factThree from './components/factThree'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Switch>
        <Route path='/factOne' component={FactOne} />
        <Route path='/factTwo' component={factTwo} />
        <Route path='/factThree' component={factThree} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;