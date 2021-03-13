import React from 'react'
import styled from 'styled-components'
import { LogoWrapper, LogoSmall, ButtonLight } from './styledCommon';

const DescriptionHeaderStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    background: white;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    margin: -1em 0 0 0;
`;

const LogoWrapperHeader = styled(LogoWrapper)`
    position: absolute;
    top: -2em;
    margin: 0 auto;
`;

const CompanyName = styled.div`
    text-align: center;
    padding: 0 0 1em 0;
    
    h2 {
        padding: 0 0 1em 0;
    }
`;

const CompanySiteBtn = styled(ButtonLight)`
    padding: 1em 3em;
`;


const DescriptionHeader = ({ job }) => {
    return ( 
        <DescriptionHeaderStyled>
            <LogoWrapperHeader>
                <LogoSmall src={ job.company_logo } alt="Logo"/>
            </LogoWrapperHeader>
            <CompanyName>
                <h2>{ job.company }</h2>
                <p>{ job.company_url }</p>
            </CompanyName>
            <div className="description-header-btn">
                <CompanySiteBtn>
                    <a href={ job.company_url }>
                        Company site
                    </a>
                </CompanySiteBtn>
            </div>
        </DescriptionHeaderStyled>
     );
}
 
export default DescriptionHeader;