import React from 'react'
import styled from 'styled-components'

import { LogoWrapper, LogoSmall, ButtonLight, TitleH2, InfoSpan, DesktopWrapper } from '../styledCommon';
import { formatUrl } from '../helperFunctions'

const DescriptionHeaderStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    background: ${ (props) => props.theme.boxes };
    border-radius: 6px;
    position: relative;
    z-index: 2;
    margin: -1em 0 0 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        padding: 2.5em ${ (props) => props.theme.padding.paddingTablet };
        flex-direction: row;
        justify-content: space-between;
        height: 140px;
        margin: -2em 0 0 0;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above1100}) {
        padding: 2.5em ${ (props) => props.theme.padding.paddingDesktop };
    }
`;

const LogoWrapperHeader = styled(LogoWrapper)`
    position: absolute;
    top: -2em;
    margin: 0 auto;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        max-width: 140px;
        border: none;
        margin: 0;
    }
`;

const LogoSmallHeader = styled(LogoSmall)`
    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        width: 140px;
    }
`;

const CompanyName = styled.div`
    text-align: center;
    padding: 0 0 1em 0;
    
    h2 {
        padding: 0 0 1em 0;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        margin: 0 0 0 140px ;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        height: 100%;

        h2 {
            padding: 0;
        }
    }
`;

const CompanySiteBtn = styled(ButtonLight)`
    padding: 1em;
    max-width: 150px;
`;


const DescriptionHeader = ({ job }) => {
    const formattedUrl = (newUrl) => {
        return formatUrl(newUrl)
    }

    return ( 
        <DesktopWrapper>
            <DescriptionHeaderStyled>
                <LogoWrapperHeader>
                    <LogoSmallHeader src={ job.company_logo } alt="Logo"/>
                </LogoWrapperHeader>
                <CompanyName>
                    <TitleH2>{ job.company }</TitleH2>
                    <InfoSpan>{ formattedUrl(job.company_url) }</InfoSpan>
                </CompanyName>
                <CompanySiteBtn>
                    <a href={ job.company_url }>
                        Company site
                    </a>
                </CompanySiteBtn>
            </DescriptionHeaderStyled>
        </DesktopWrapper>
     );
}
 
export default DescriptionHeader;