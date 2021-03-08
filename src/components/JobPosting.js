import React, { useState } from 'react'
import JobDescription from './JobDescription'

const JobPosting = ({ job }) => {
    const [isSelected, setIsSelected] = useState(false);

    const displayDescription = () => {
        setIsSelected(!isSelected);
    }

    return ( 
        <li onClick={ () => displayDescription() }>
            <img src={ job.company_logo } alt="company logo"/>
            <div className="additional-info">
                <span>{ job.created_at }</span>
                <span>{ job.type }</span>
            </div>
            <h2>{ job.title }</h2>
            <span>{ job.company }</span>
            <div>{ job.location }</div>
            { isSelected && <JobDescription /> }
        </li>
     );
}
 
export default JobPosting;