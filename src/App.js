import React from 'react'
import ReactDOM from 'react-dom'
import Results from './components/Results'
import './styles/main.scss'

function App() {
    return (
        <div>
            <h1>react</h1>
            <Results />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));