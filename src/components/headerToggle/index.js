// Header toggle button styled components (dark/light mode)

import styled from 'styled-components'

// Container includes the switch button and icons sun/moon
export const ToggleSwitchContainer = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    border: none;
`;

export const ToggleDiv = styled.div`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
`;

export const ToggleButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${ (props) => props.theme.colors.white };
    transition: 400ms;
    border-radius: 34px;
    border: none;

    &:before {
        content: '';
        position: absolute;
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background: ${ (props) => props.theme.colors.violet };
        transition: 400ms;
        border-radius: 50%;
    }
`;


