import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import ContactSales from './pages/ContactSales';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/contactsales' component={ContactSales} />
      </Switch>
    </Router>
  );
}

export default App;
