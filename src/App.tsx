import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Menu from './components/Menu';
// import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/users'} component={Users} />              
        <Route path={'/register'} component={Register} />  
        <Route path={'/login'} component={Login} />  
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
