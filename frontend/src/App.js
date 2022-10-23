import React from 'react';
import './index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './views/homePage';
import Login from './views/loginPage';
import Register from './views/registerPage';
import ProtectedPage from './views/privatePage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/protected" component={ProtectedPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
