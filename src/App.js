import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchResults from './SearchResults';

import HomeScreen from './HomeScreen';


function App() {
 
  

  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>

      </Switch>

    </Router>

    
  );
}

export default App;
