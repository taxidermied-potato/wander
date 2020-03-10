import React, { useCallback, useContext, useState, useEffect } from 'react'
import '../styles/Login.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import FBase from '../firebase.js'
import { AuthContext } from '../auth/Auth'
import { CSSTransition } from "react-transition-group";


const Login = ({ history }) => {
  const [inProp, setInProp] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    setInProp(true)
  }, []);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements;
      try {
        await FBase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/app')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  );

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements
    try {
      await FBase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/app')
    } catch (error) {
      alert(error)
    }
  }, [history])

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/app" />
  }

  return (
    <main className="fade-background">
      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <div>
          <div className="content-section-l">
            <Link to="./" target="_blank">
              <h1 className="logo"> wander </h1>
            </Link>
            <h3 className="credit"> courtesy of kirokaze </h3>
            <form onSubmit={login ? handleLogin : handleSignUp}>
              <div className="flex pr-5 mr-5">
                <div className="login-card">
                  <label>
                    <p>email</p>
                    <input name='email' type='email' placeholder='' />
                  </label>
                  <label>
                    <p>password</p>
                    <input name='password' type='password' placeholder='' />
                  </label>
                  <span className="invis-button mb-4">Forgot your password?</span>
                  {login ?
                    <div className="flex">
                      <button className="px-5 login-button" type='submit'>login</button>
                      <p className="ml-3 help-text"> Don't have an account? <br />
                        <span className="swap" onClick={() => setLogin(false)}> sign up </span>
                        |
                        <span className="swap"> terms </span>
                      </p>
                    </div>
                    :
                    <div className="flex">
                      <button className="px-5 login-button" type='submit'>sign up</button>
                      <p className="ml-3 help-text"> Already registered? <br />
                        <span className="swap" onClick={() => setLogin(true)}> sign in </span>
                        |
                        <span className="swap"> terms </span>
                      </p>
                    </div>
                  }
                </div>
                <div className="card under-card ml-n3">
                  <p className="help-text">
                    Wander is in version 0.1.0
                    <br />
                    This means almost nothing works. But at least things look nice, so enjoy the rain while you can.
                    <br /> <br />
                    Keep in mind that you are currently using a unstable build that is only for prototyping purposes. Don't expect any data to persist to the next iteration. Do, however, expect bugs.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
    </main>
  )
}

export default withRouter(Login)