import React from 'react'

const DescriptionBody = ({ job }) => {

    return ( 
        <section className="description-body">
            <article>
                <div className="main-info">
                    <p><span>{ job.created_at }</span><span>{ job.type }</span></p>
                    <h2>{ job.title }</h2>
                    <p>{ job.location }</p>
                </div>
                <button className="apply-now"><a href={ job.how_to_apply }>Apply Now</a></button>
            </article> 
            <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
        </section>
     );
}
 
export default DescriptionBody;