import React, { useState, useEffect } from 'react'
import JobPosting from './JobPosting'
import Filters from './Filters'
import useApiCall from './useApiCall';

const Results = ({ isSelected, selectJob }) => {
    const [filters, setFilters] = useState({ description: '', location: '', full_time: false });
    const { jobs, isPending, error } = useApiCall(filters);

    const addFilters = (filter) => {
        setFilters({...filters, description: filter.description, location: filter.location, full_time: filter.full_time})
    }

    const removeFilters = (filter) => {
        let newFilters = [...filters];
        newFilters = newFilters.filter(item => item != filter);
        setFilters(newFilters);
    }

    

    // useEffect(() => {
    //     fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setJobs(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [filters])

    return (
        <div>
            <Filters addFilters={ addFilters } removeFilters={ removeFilters }/>
            <ul className="results-jobs">
                {jobs.map(job => {
                    return (
                        <JobPosting 
                            key={ job.id } 
                            job={ job } 
                            isSelected={ isSelected }
                            selectJob={ selectJob } />
                    )
                })}
            </ul>
            <button>Load More</button>
        </div>
    )
}

export default Results;