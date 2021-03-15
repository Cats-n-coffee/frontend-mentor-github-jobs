import React, { useState } from 'react'
import styled from 'styled-components'

import { LogoSmall, TitleH2, InfoSpan, LogoWrapper, AdditionalInfoChild, JobLocation, AdditionalInfo } from '../styledCommon/index'
import { formatDate } from '../helperFunctions'

const JobCard = styled.li`
    min-width: 300px;
    display: flex;
    max-width: 350px;
    width: 100%;
    flex-direction: column;
    background: ${ (props) => props.theme.boxes};
    padding: 3em 2em 2em;
    border-radius: 6px;
    position: relative;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        min-width: 350px;
    }
`;

const LogoWrapperCard = styled(LogoWrapper)`
    position: absolute;
    margin: -4.5em 0 0 0;
`;

const CardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const JobPosting = ({ job, isSelected, selectJob }) => {
    const dateFormatted = (newDate) => {
        return formatDate(newDate);
    }

    return ( 
        <JobCard onClick={ () => {
            isSelected();
            selectJob(job); 
            }}>
            <LogoWrapperCard>
                <LogoSmall src={ job.company_logo } alt="Logo"></LogoSmall>
            </LogoWrapperCard>
            <CardContent>
                <AdditionalInfo>
                    <AdditionalInfoChild>{ dateFormatted(job.created_at) }</AdditionalInfoChild>
                    <AdditionalInfoChild>{ job.type }</AdditionalInfoChild>
                </AdditionalInfo>
                <TitleH2>{ job.title }</TitleH2>
                <InfoSpan>{ job.company }</InfoSpan>
                <JobLocation>{ job.location }</JobLocation>
            </CardContent>
        </JobCard>
     );
}
 
export default JobPosting;