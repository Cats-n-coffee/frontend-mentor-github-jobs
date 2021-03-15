import React from 'react'
import styled from 'styled-components'

import { TitleH2, DesktopWrapper } from '../styledCommon'

const HowToApply = styled.section`
    padding: 2rem ${ (props) => props.theme.padding.paddingMobile };
    border-radius: 6px;
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

        @media screen and (min-width: ${(props) => props.theme.mediaQueries.above375}) {
            background: no-repeat url("data:image/svg+xml,%3Csvg width='730' height='261' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 730 261'%3E%3Crect y='1' width='730' height='259' rx='6' fill='%235964E0'/%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='1' width='730' height='259'%3E%3Crect y='1' width='730' height='259' rx='6' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath opacity='.081' fill-rule='evenodd' clip-rule='evenodd' d='M549.888-78.424c21.125-23.963 60.326-15.63 69.879 14.853l114.117 364.163c9.381 29.936-16.962 58.887-47.648 52.364l-366.488-77.899c-30.685-6.522-42.976-43.685-22.23-67.218l252.37-286.263z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
            background-color: ${(props) => props.theme.colors.violet};
        }
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above768}) {
        padding: 1em ${ (props) => props.theme.padding.paddingTablet };
    }

    @media screen and (min-width: ${ (props) => props.theme.mediaQueries.above1100}) {
        padding: 1em ${ (props) => props.theme.padding.paddingDesktop };
    }
`;

const HowToApplyTitle = styled(TitleH2)`
    color: white;
    padding: 1em 0;

    @media screen and (min-width: ${(props) => props.theme.mediaQueries.above375}) {
        padding: 0 0 1em 0;
    }
`;

const HowToApplyLink = styled.div`
    color: white;

    a {
        color: white;
    }
`;

const DescriptionHowToApply = ({ job }) => {
    return ( 
        <DesktopWrapper>
            <HowToApply>
                <HowToApplyTitle>How to Apply</HowToApplyTitle>
                <HowToApplyLink dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></HowToApplyLink>
            </HowToApply>
        </DesktopWrapper>
     );
}
 
export default DescriptionHowToApply;