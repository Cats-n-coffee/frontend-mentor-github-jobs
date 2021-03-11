import React from 'react'

const DescriptionHowToApply = ({ job }) => {
    return ( 
        <section className="how-to-apply">
            <h2>How to Apply</h2>
            <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
        </section>
     );
}
 
export default DescriptionHowToApply;