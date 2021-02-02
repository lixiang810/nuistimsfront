import Dashboard from './Dashboard'
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const App = () => (
    <Dashboard />
)

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorkerRegistration.register();