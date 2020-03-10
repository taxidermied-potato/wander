import React from 'react'
import FBase from '../firebase'

function AppHome() {
    return (
        <div>
            <h1> app </h1>
            <button onClick={() => FBase.auth().signOut()}> Sign out </button>
        </div>
    )
}

export default AppHome
