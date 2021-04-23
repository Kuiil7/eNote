import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateNote from './components/CreateNote'
import Notes from './components/Notes'
import Home from './components/Home'

import Navbar from './components/Navbar'


function App() {

  return (
  <Router>
    <Navbar/>

 <Route exact path="/" component={Home}>

 </Route>

 <Route path="/notes" component={Notes}>

 </Route>

 <Route path="/create" component={CreateNote}>

 </Route>



  </Router>
  );

}

export default App;
