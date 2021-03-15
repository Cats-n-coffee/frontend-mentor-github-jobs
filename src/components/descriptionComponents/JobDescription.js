import React from 'react'
import styled from 'styled-components'

import DescriptionHeader from './DescriptionHeader'
import DescriptionBody from './DescriptionBody'
import DescriptionHowToApply from './DescriptionHowToApply'
import DescriptionBtn from './DescriptionBtn'

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