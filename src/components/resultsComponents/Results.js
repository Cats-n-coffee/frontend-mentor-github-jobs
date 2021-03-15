import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import JobPosting from './JobPosting'
import Filters from '../filtersComponents/Filters'
import useApiCall from '../useApiCall';
import { DesktopWrapper, ButtonDark } from '../styledCommon/index'
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage'


const MainWrapper = styled.main`
    padding: 0 0 6em 0;
    position: relative;
`;

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
        padding: 2.5em ${(props) => props.theme.padding.paddingTablet} 2em;
    }

    @media screen and (min-width: ${(props) => props.theme.mediaQueries.above1100}) {
        grid-template-columns: repeat(3, auto);
        padding: 2em 0;
    }
`;

const ButtonAnimation = keyframes`
    0% { visibility: hidden; }
    100% { visibility: visible; }
`;

const ButtonLoadFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
`;

const ButtonLoadMore = styled(ButtonDark)`
    padding: 1em 2.5em;
    visibility: hidden;
    animation: 1s ease-in 6s forwards ${ ButtonAnimation };  
`;

const Results = ({ isSelected, selectJob }) => {
    const [filters, setFilters] = useState({ description: '', location: '', full_time: false }); // sets the filters to send the object to useApiCall
    const [page, setPage] = useState(1); // onClick on the load more button page number increases
    const { jobs, isPending, error } = useApiCall(filters, page); // results from useApiCall
    const [results, setResults] = useState(null); // adds more results to the results when 'Load More' is clicked

    const addFilters = (filter) => {
        setFilters({...filters, description: filter.description, location: filter.location, full_time: filter.full_time})
    }

    // Increase the page number and adds more results to the results
    const loadMoreResults = () => {
        setPage(page + 1);
        const oldResults = [...results];
        const newResults = oldResults.concat(jobs);
        setResults(newResults);
    }

    // watches for change from jobs
    useEffect(() => {
        setResults(jobs)
    }, [jobs])

    return (
        <DesktopWrapper>
            <MainWrapper>
                    <Filters addFilters={ addFilters }/>
                    { isPending ? <Spinner/> 
                    : error ? <ErrorMessage error={ error }/> 
                        : <>
                            <ResultsStyled>
                                {results.map(job => {
                                    return (
                                        <JobPosting 
                                            key={ job.id } 
                                            job={ job } 
                                            isSelected={ isSelected }
                                            selectJob={ selectJob } />
                                    )
                                })}
                            </ResultsStyled>
                            <ButtonLoadFooter>
                                <ButtonLoadMore onClick={ loadMoreResults }>Load More</ButtonLoadMore>
                            </ButtonLoadFooter>
                        </> }
            </MainWrapper>
        </DesktopWrapper>
    )
}

export default Results;