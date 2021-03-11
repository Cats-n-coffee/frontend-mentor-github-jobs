import React, { useState } from 'react'
import JobDescription from './JobDescription'

const JobPosting = ({ job, isSelected, selectJob }) => {

    return ( 
        <li onClick={ () => {
            isSelected();
            console.log(job.id);
            selectJob(job); 
            }}>
            {/* <img src={ job.company_logo } alt="company logo"/> */}
            <div className="additional-info">
                <span>{ job.created_at }</span>
                <span>{ job.type }</span>
            </div>
            <h2>{ job.title }</h2>
            <span>{ job.company }</span>
            <div>{ job.location }</div>
        </li>
     );
}
 
export default JobPosting;