import React from 'react'
import { TitleH2 } from './styledCommon'
import styled from 'styled-components'

const HowToApply = styled.section`
    padding: 2rem ${ (props) => props.theme.padding.paddingMobile };
    border-radius: 6px;
    height: 327px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: no-repeat url("data:image/svg+xml,%3Csvg width='327' height='372' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 327 327'%3E%3Crect width='327' height='372' rx='6' fill='%235964E0'/%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='327' height='372'%3E%3Crect width='327' height='372' rx='6' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath opacity='.081' fill-rule='evenodd' clip-rule='evenodd' d='M267.502 166.576c21.126-23.963 60.326-15.63 69.879 14.853l114.118 364.163c9.381 29.936-16.963 58.887-47.649 52.364L37.362 520.057c-30.685-6.522-42.976-43.685-22.23-67.217l252.37-286.264z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
        z-index: -1;
    }
`;

const DescriptionHowToApply = ({ job }) => {
    return ( 
        <HowToApply>
            <TitleH2>How to Apply</TitleH2>
            <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
        </HowToApply>
     );
}
 
export default DescriptionHowToApply;