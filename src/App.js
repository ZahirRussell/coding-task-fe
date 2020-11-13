import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ManageImage from './components/ManageImage/ManageImage';
import Navbar from './components/Navbar/Navbar';
import TextOnTshirt from './components/TextOnTshirt/TextOnTshirt';


function App() {
  return (
    <Router>
      <Navbar/>      
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home/>
        </Route>
        <Route path="/ManageImage">
          <ManageImage />
        </Route> 
        <Route path="/TextOnTshirt">
          <TextOnTshirt/>
        </Route>       
      </Switch>
  </Router>
  );
}

export default App;
