import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Results from './components/Results'
import JobDescription from './components/JobDescription'
import './styles/main.scss'
import Header from './components/Header'

function App() {
    const [isSelected, setIsSelected] = useState(false);
    const [currentJob, setCurrentJob] = useState('');

    const displayDescription = () => {
        setIsSelected(!isSelected);
    }

    const selectJob = (job) => {
        setCurrentJob(job)
    }

    return (
        <div>
            <Header />
            { isSelected 
            ? <JobDescription isSelected={ displayDescription } currentJob={ currentJob }/> 
            : <Results isSelected={ displayDescription } selectJob={ selectJob }/> }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));