import logo from './logo.svg';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Servicepage from './Pages/Servicepage/Servicepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Contactpage from './Pages/Contactpage/Contactpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
        <Route exact path='/service'>
          <Servicepage/>
        </Route>
        <Route exact path='/about'>
          <Aboutpage/>
        </Route>
        <Route exact path='/contact'>
          <Contactpage/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
