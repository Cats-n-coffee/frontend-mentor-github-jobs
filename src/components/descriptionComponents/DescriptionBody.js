import React from 'react'
import styled from 'styled-components'
import { JobLocation, TitleH2, AdditionalInfo, AdditionalInfoChild, ButtonDark, DesktopWrapper } from '../styledCommon';

const DescriptionBodyStyled = styled.section`
    padding: 2em ${ (props) => props.theme.padding.paddingMobile };
    background: ${ (props) => props.theme.boxes };
    border-radius: 6px;
    margin: 2em 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        padding: 2em ${ (props) => props.theme.padding.paddingTablet };
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above1300}) {
        padding: 2em ${ (props) => props.theme.padding.paddingDesktop };
    }
`;

const BodyMainInfo = styled.article`
    display: flex;
    flex-direction: column;
    padding: 0 0 2em 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const JobMainInfo = styled.div`
    padding: 0 0 2em 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const ApplyNowBtn = styled(ButtonDark)`
    width: 100%;
    max-width: 400px;
    padding: 1em 0;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        max-width: 140px;
    }
`;

const BodyJobTitle = styled(TitleH2)`
    padding: 1em 0;
`;

const BodyContent = styled.div`
    color: ${ (props) => props.theme.fontColorText };
    line-height: 1.5rem;

    h1, h2, h3, h4 {
        color: ${ (props) => props.theme.fontColorTitle };
        padding: 1em 0;
    }
`;

const DescriptionBody = ({ job }) => {

    return (
        <DesktopWrapper> 
            <DescriptionBodyStyled>
                <BodyMainInfo>
                    <JobMainInfo>
                        <AdditionalInfo>
                            <AdditionalInfoChild>{ job.created_at }</AdditionalInfoChild>
                            <AdditionalInfoChild>{ job.type }</AdditionalInfoChild>
                        </AdditionalInfo>
                        <BodyJobTitle>{ job.title }</BodyJobTitle>
                        <JobLocation>{ job.location }</JobLocation>
                    </JobMainInfo>
                    <ApplyNowBtn>
                        <a href={ job.how_to_apply }>
                            Apply Now
                        </a>
                    </ApplyNowBtn>
                </BodyMainInfo> 
                <BodyContent dangerouslySetInnerHTML={{ __html: job.description }}></BodyContent>
            </DescriptionBodyStyled>
        </DesktopWrapper>
     );
}
 
export default DescriptionBody;