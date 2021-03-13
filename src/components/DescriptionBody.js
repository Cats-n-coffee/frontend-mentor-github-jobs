import React from 'react'
import styled from 'styled-components'
import { JobLocation, TitleH2, AdditionalInfo, AdditionalInfoChild, ButtonDark } from './styledCommon';

const DescriptionBodyStyled = styled.section`
    padding: 2em ${ (props) => props.theme.padding.paddingMobile };
    background: white;
    border-radius: 6px;
    margin: 2em 0;
`;

const BodyMainInfo = styled.article`
    display: flex;
    flex-direction: column;
    padding: 0 0 2em 0;
`;

const JobMainInfo = styled.div`
    padding: 0 0 2em 0;
`;

const ApplyNowBtn = styled(ButtonDark)`
    width: 100%;
    padding: 1em 0;

    a {
        text-decoration: none;
        color: white;
        font-size: ${ (props) => props.theme.fontSizes.sizeP };
        font-weight: 700;
    }
`;

const DescriptionBody = ({ job }) => {

    return ( 
        <DescriptionBodyStyled>
            <BodyMainInfo>
                <JobMainInfo>
                    <AdditionalInfo>
                        <AdditionalInfoChild>{ job.created_at }</AdditionalInfoChild>
                        <AdditionalInfoChild>{ job.type }</AdditionalInfoChild>
                    </AdditionalInfo>
                    <TitleH2>{ job.title }</TitleH2>
                    <JobLocation>{ job.location }</JobLocation>
                </JobMainInfo>
                <ApplyNowBtn>
                    <a href={ job.how_to_apply }>
                        Apply Now
                    </a>
                </ApplyNowBtn>
            </BodyMainInfo> 
            <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
        </DescriptionBodyStyled>
     );
}
 
export default DescriptionBody;