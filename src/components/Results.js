import React, { useState } from 'react'
import styled from 'styled-components'

import JobPosting from './JobPosting'
import Filters from './Filters'
import useApiCall from './useApiCall';
import { DesktopWrapper, ButtonDark } from './styledCommon/index'


const ResultsStyled = styled.ul`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: 253px;
    justify-content: space-between;
    justify-items: center;
    grid-row-gap: 3em;
    grid-column-gap: 1em;
    padding: 1em ${(props) => props.theme.padding.paddingMobile} 2em;

    @media screen and (min-width: ${(props) => props.theme.mediaQueries.above768}) {
        grid-template-columns: repeat(2, auto);
        grid-row-gap: 3em;
        padding: 4.5em ${(props) => props.theme.padding.paddingTablet} 2em;
    }

    @media screen and (min-width: ${(props) => props.theme.mediaQueries.above1300}) {
        grid-template-columns: repeat(3, auto);
        padding: 4em 0;
    }
`;

const ButtonLoadMore = styled(ButtonDark)`
    padding: 1em 2.5em;
`;

const Results = ({ isSelected, selectJob }) => {
    const [filters, setFilters] = useState({ description: '', location: '', full_time: false });
    const { jobs, isPending, error } = useApiCall(filters);

    const addFilters = (filter) => {
        setFilters({...filters, description: filter.description, location: filter.location, full_time: filter.full_time})
    }

    return (
        <DesktopWrapper>
            <main>
                    <Filters addFilters={ addFilters }/>
                    <ResultsStyled>
                        {jobs.map(job => {
                            return (
                                <JobPosting 
                                    key={ job.id } 
                                    job={ job } 
                                    isSelected={ isSelected }
                                    selectJob={ selectJob } />
                            )
                        })}
                    </ResultsStyled>
                    <ButtonLoadMore>Load More</ButtonLoadMore>
            </main>
        </DesktopWrapper>
    )
}

export default Results;