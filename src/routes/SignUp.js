import React, { useCallback } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import FBase from '../firebase'

const SignUp = ({ history }) => {
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

  return (
    <main>
      <div className="content-section-l">
        <Link to="./" target="_blank">
          <h1 className="logo"> wander </h1>
        </Link>
        <h3 className="credit"> courtesy of kirokaze </h3>
        <form onSubmit={handleSignUp}>
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
              <div className="flex">
                <button className="px-5 login-button" type='submit'>sign up</button>
                <p className="ml-3 help-text"> Already registered? <br />
                  <Link className="float-left" to="/login" >
                    <span>sign in</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="card under-card ml-n3">
              <p className="help-text">
                Welcome to wander.
              <br />
                Feel free to make an account or something. It's free after all.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default withRouter(SignUp)