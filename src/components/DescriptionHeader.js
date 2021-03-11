import React from 'react'

const DescriptionHeader = ({ job }) => {
    return ( 
        <section className="description-header">
            <picture>
                <img src={ job.company_logo } alt="company logo"/>
            </picture>
            <div className="company-name-and-site">
                <h2>{ job.company }</h2>
                <p>{ job.company_url }</p>
            </div>
            <div className="description-header-btn">
                <button><a href={ job.company_url }>Company site</a></button>
            </div>
        </section>
     );
}
 
export default DescriptionHeader;