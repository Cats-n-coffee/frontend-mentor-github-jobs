import React from 'react'

const DescriptionBtn = ({ job }) => {
    return (  
        <section className="description-footer-btn">
            <div className="tablet-desktop">
                <h3>{ job.title }</h3>
                <span>{ job.company }</span>
            </div>
            <button className="apply-now"><a href={ job.how_to_apply }>Apply Now</a></button>
        </section>
    );
}
 
export default DescriptionBtn;