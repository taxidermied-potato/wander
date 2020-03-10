import React from 'react'
import './styles/App.css'
import './styles/bootstrap-spacing.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHome from './routes/AppHome'
import Landing from './routes/Landing'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import { AuthProvider } from './auth/Auth'
import PrivateRoute from './auth/PrivateRoute'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSignInAlt, faCode, faDesktop, faLanguage, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee, faSignInAlt, faCode, faDesktop, faLanguage, faGlobeAmericas, fab)

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/app" component={AppHome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    </AuthProvider >
  );
}

export default App;
