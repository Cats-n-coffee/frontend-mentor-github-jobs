// Styles for filters panel

import styled from 'styled-components'
import { FormSection, ButtonDark } from '../styledCommon'

/*  ------------ In Order
1. Form (parent)
2. Div for each search parameter: title, location, full time
3. Input field for text
4. Submit buttons
5. Mobile wrappers
*/

// ----------------------------------- FORM --------------------------------------
export const FiltersForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 ${(props) => props.theme.padding. paddingMobile};
    transform: translateY(-2.5em);
    z-index: 10;

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row;
        transform: translateY(-3em);
        border-radius: 6px;
        padding: 0 ${ (props) => props.theme.padding.paddingTablet };
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above1100 }) {
        padding: 0;
    }
`;

// -------------------------------------- DIVS FOR EACH SECTION ----------------------------
export const TitleSearch = styled(FormSection)`
    height: auto;
    justify-content: space-between;

    .mobile-filters-toggle {
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row-reverse;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 1em;
        flex: 0 1 33.5%;

        .mobile-filters-toggle-btn {
            display: none;
        }

        .mobile-filters-toggle {
            height: auto;
        }
    }
`;

export const LocationSearch = styled(FormSection)`
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    label {
        padding: 0 1em 0 0;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        height: 100%;
        flex: 0 1 50%;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        background: ${ (props) => props.theme.boxes };
        padding: 1em;
    }
`;

export const FullTimeSearch = styled(FormSection)`
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

    .full-time-checkbox > label {
        font-weight: 700;
        word-break: keep-all;
        color: ${ (props) => props.theme.fontColorTitles };
        white-space: nowrap;
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768 }) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex: 0 1 50%;
        height: 100%;
        border: none;
        /* border-bottom-right-radius: 0; */
        border-bottom-left-radius: 0;
        border-top-right-radius: 6px;
        padding: 1em 1em 1em 0;
        
        .search-button {
            padding: 0;
            /* flex-shrink: 1; */
            max-width: 123px;
        }

        .full-time-checkbox {
            margin: 0 1em 0 0;
        }
    }
`;

// ------------------------------------- INPUT FIELD -------------------------------------
export const InputForm = styled.input`
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

// ---------------------------------------- SUBMIT BUTTONS ---------------------------------
export const SubmitBtnMobileOnly = styled.button`
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

export const ApplyFiltersBtn = styled(ButtonDark)`
    width: 100%;
    padding: 1em 0;
    font-size: ${(props) => props.theme.fontSizes.sizeP};
`;

// ---------------------------------- MOBILE WRAPPER/BLUR --------------------------------
export const MobileWrapperFilters = styled.div`
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
        /* background: none;
        height: 0;
        width: 0; */
        display: none;
    }
`;

export const MobileFilters = styled.div`
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
        background: ${ (props) => props.theme.boxes };
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        z-index: unset;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        flex: 0 1 66.5%;
    }
`;