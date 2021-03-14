import React from 'react'
import styled from 'styled-components'

import DescriptionHeader from './descriptionComponents/DescriptionHeader'
import DescriptionBody from './descriptionComponents/DescriptionBody'
import DescriptionHowToApply from './descriptionComponents/DescriptionHowToApply'
import DescriptionBtn from './descriptionComponents/DescriptionBtn'

const DescriptionWrapper = styled.div`
    padding: 0 ${ (props) => props.theme.padding.paddingMobile } 8em;
    position: relative;
`;

const JobDescription = ({ isSelected, currentJob }) => {
    return ( 
        <DescriptionWrapper>
            {/* <button onClick={ () => isSelected() }>unselect</button> */}
            <DescriptionHeader job={ currentJob }/>
            <DescriptionBody job={ currentJob }/>
            <DescriptionHowToApply job={ currentJob }/>
            <DescriptionBtn job={ currentJob }/>
        </DescriptionWrapper>
     );
}
 
export default JobDescription;