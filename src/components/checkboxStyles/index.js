import styled from 'styled-components'

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 1px;
    height: 1px;
    border: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;

export const VisibleCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background: rgba(25,32,45, 0.1);

    ${ HiddenCheckbox }:focus + & {
        box-shadow: 0 0 3px ${ (props) => props.theme.colors.violet };
    }
`;

