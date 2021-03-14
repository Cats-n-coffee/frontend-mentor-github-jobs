import React from 'react'
import styled from 'styled-components'
import { ButtonDark, InfoSpan, TitleH2 } from '../styledCommon';

const DescriptionFooterBtn = styled.section`
    position: absolute;
    bottom: 0;
    left: 0; 
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ (props) => props.theme.padding.paddingMobile };
    background: ${ (props) => props.theme.boxes };

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        justify-content: space-between;
        padding: 1.5em ${ (props) => props.theme.padding.paddingTablet };
    }
`;

const FooterTabletsDesktop = styled.div`
    display: none;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const ApplyNowBtnFooter = styled(ButtonDark)`
    width: 100%;
    max-width: 400px;
    padding: 1em 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        max-width: 140px;
    }
`;

const TitleFooter = styled(TitleH2)`
    font-size: ${ (props) => props.theme.fontSizes.sizeH3 };
    padding: 0 0 1em 0;
`;

const DescriptionBtn = ({ job }) => {
    return (  
        <DescriptionFooterBtn>
            <FooterTabletsDesktop>
                <TitleFooter>{ job.title }</TitleFooter>
                <InfoSpan>{ job.company }</InfoSpan>
            </FooterTabletsDesktop>
            <ApplyNowBtnFooter>
                <a href={ job.how_to_apply }>
                    Apply Now
                </a>
            </ApplyNowBtnFooter>
        </DescriptionFooterBtn>
    );
}
 
export default DescriptionBtn;