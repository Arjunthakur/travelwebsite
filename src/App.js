import './App.css';
import Navbar from './components/Navbar';
// import VideoContainer from './components/VideoContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Product from './components/pages/Product';
import Signup from './components/pages/Signup';
import Services from './components/pages/Services';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/product' component={Product} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
