import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';


import Home from './components/Home'

//import Navbar from './components/Navbar'


function App() {

  return (
  <Router>

 <Route exact path="/" component={Home}>

 </Route>

  </Router>
  );

}

export default App;
