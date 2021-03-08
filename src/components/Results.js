import React, { useState, useEffect } from 'react'
import JobPosting from './JobPosting'

const Results = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setJobs(data)
            })
            .catch(err => console.log(err))
    }, [jobs])

    return (
        <div>
            <ul className="results-jobs">
                {jobs.map(job => {
                    return (
                        <JobPosting key={ job.id } job={ job }/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Results;