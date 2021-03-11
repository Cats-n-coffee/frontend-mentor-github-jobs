import React from 'react'
import DescriptionHeader from './DescriptionHeader'
import DescriptionBody from './DescriptionBody'
import DescriptionHowToApply from './DescriptionHowToApply'
import DescriptionBtn from './DescriptionBtn'

const JobDescription = ({ isSelected, currentJob }) => {
    return ( 
        <div>
            <button onClick={ () => isSelected() }>unselect</button>
            <DescriptionHeader job={ currentJob }/>
            <DescriptionBody job={ currentJob }/>
            <DescriptionHowToApply job={ currentJob }/>
            <DescriptionBtn job={ currentJob }/>
        </div>
     );
}
 
export default JobDescription;