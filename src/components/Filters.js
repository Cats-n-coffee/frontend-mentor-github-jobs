import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { DesktopWrapper, ButtonDark, FormSection } from './styledCommon'
import Checkbox from './Checkbox'


const FiltersForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 ${(props) => props.theme.padding. paddingMobile};
    transform: translateY(-3em);
    z-index: 10;

    .first-form-section {
        justify-content: space-between;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row;
    }
`;

const TitleSearch = styled(FormSection)`
    height: auto;

    .mobile-filters-toggle {
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row-reverse;

        .mobile-filters-toggle-btn {
            display: none;
        }

        .mobile-filters-toggle {
            height: auto;
        }
    }
`;

const LocationSearch = styled(FormSection)`
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    .form-input {
        padding: 0 0 0 1em;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        width: 100%;
        padding: 1.5em;
    }
`;

const FullTimeSearch = styled(FormSection)`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 1px solid rgba(110,128,152, 0.2);

    .search-button {
        align-self: center;
        padding: 1.5em 0 0 0;
        width: 100%;
    }

    div > label {
        padding: 0 0 0 1em;
        font-weight: 700;
        word-break: keep-all;
        color: ${ (props) => props.theme.fontColorTitle };
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row;
        align-items: center;
    }
`;

const InputForm = styled.input`
    font-family: ${(props) => props.theme.fonts.fontStack};
    font-size: ${(props) => props.theme.fontSizes.sizeP};
    border: none;
    background: ${ (props) => props.theme.boxes };
    color: ${(props) => props.theme.fontColorText};

    &::placeholder {
        font-family: ${(props) => props.theme.fonts.fontStack};
        color: ${(props) => props.theme.fontColorText};
    }

    /* #search-full-time {
        padding: .3em;
        background: ${(props) => props.theme.colors.violet};
    } */
`;


const SubmitBtn = styled.button`
    background: ${(props) => props.theme.colors.violet};
    border: none;
    border-radius: 6px;
    height: 48px;
    width: 48px;
    margin: 0 auto 0 1em;
    cursor: pointer;

    svg > path{
        fill: white;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        background: ${ (props) => props.theme.boxes};
        width: auto;
        height: auto;
        margin: 0 1em 0 0;

        svg > path {
            fill: ${(props) => props.theme.colors.violet};
        }
    }
`;

const ApplyFiltersBtn = styled(ButtonDark)`
    width: 100%;
    padding: 1em 0;
    font-size: ${(props) => props.theme.fontSizes.sizeP};
`;

const MobileWrapperFilters = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 200vh;
    width: 100vw;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        background: none;
        height: 0;
        width: 0;
    }
`;

const MobileFilters = styled.div`
    position: absolute;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    z-index: 3;

    @media screen and (min-width: ${(props) => props.theme.mediaQueries.above768}) {
        position: static;
        background: none;
        flex-direction: row;
        padding: 0;
    }
`;

const Filters = ({ addFilters }) => {

    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [userfilters, setUserFilters] = useState({ description: '', location: '', full_time: false });
    const [mobileFilters, setMobileFilters] = useState(false);

    const descriptionRef = useRef('');
    const locationRef = useRef('');

    const toggleMobileFilters = () => {
        setMobileFilters(!mobileFilters);
        document.body.classList.toggle('scroll');
    }

    const searchRefined = (e) => {
        e.preventDefault();
        
        setUserFilters({ ...userfilters, description: descriptionRef.current.value, location: locationRef.current.value, full_time: fullTime});
        setDescription('');
        setLocation('');
        setFullTime(false);

        addFilters({ ...userfilters, description: descriptionRef.current.value, location: locationRef.current.value, full_time: fullTime})
    }

    useEffect(() => {
            if (window.innerWidth > 768) {
                setMobileFilters(true);
            }
    });

    return ( 
        <DesktopWrapper>
            <FiltersForm onSubmit={searchRefined}>
                <TitleSearch className="first-form-section">
                    <label htmlFor="search-title"></label>
                    <InputForm
                        className="form-input"
                        ref={ descriptionRef } 
                        type="text" 
                        id="search-title" 
                        placeholder="Filter by title..."
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }/>
                    <div className="mobile-filters-toggle">
                        <svg className="mobile-filters-toggle-btn" onClick={ toggleMobileFilters } style={{ cursor: "pointer"}} width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fillRule="nonzero"/>
                        </svg>
                        <SubmitBtn 
                            type="submit"
                            className="search-title-button">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/>
                            </svg>
                        </SubmitBtn>
                    </div>
                </TitleSearch>
                { mobileFilters ? <MobileWrapperFilters onClick={ toggleMobileFilters } ></MobileWrapperFilters> : null }
                { mobileFilters ? 
                    <MobileFilters mobileFilters={ mobileFilters }>
                        <LocationSearch> 
                            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 24">
                                <path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fillRule="nonzero"/>
                            </svg>
                            <label htmlFor="search-location"></label>
                            <InputForm
                                className="form-input"
                                ref={ locationRef } 
                                type="text" 
                                id="search-location" 
                                placeholder="Filter by location..."
                                value={ location }
                                onChange={ (e) => setLocation(e.target.value) }/>
                        </LocationSearch>
                        <FullTimeSearch>
                            <div>
                                <label htmlFor="search-full-time">Full Time
                                    <Checkbox
                                        checked={ fullTime }
                                        setFullTime={ setFullTime }
                                    ></Checkbox> 
                                        {/* className="form-input" */}
                                </label>
                            </div>
                            <div className="search-button">
                                <ApplyFiltersBtn 
                                    type="submit"
                                    >
                                        Search
                                </ApplyFiltersBtn>
                            </div>
                        </FullTimeSearch>
                    </MobileFilters> 
                : null } 
            </FiltersForm>
        </DesktopWrapper>
     );
}
 
export default Filters;