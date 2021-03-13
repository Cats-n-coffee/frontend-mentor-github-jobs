import styled from 'styled-components'

export const DesktopWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

// For logos
export const LogoSmall = styled.img`
    height: auto;
    width: 50px;
    max-height: 50px;
    text-align: center;
    border-radius: 5px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    width: 50px;
    height: 50px;
    border-radius: 10px;
`;

export const TitleH2 = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.sizeH2};
    font-weight: 700;
`;

export const InfoSpan = styled.span`
    font-size: ${(props) => props.theme.fontSizes.sizeP};
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkGrey};
`;

export const ButtonDark = styled.button`
    background: ${(props) => props.theme.colors.violet};
    color: white;
    border-radius: 6px;
    border: none;
    font-family: ${(props) => props.theme.fonts.fontStack};

    &:hover {
        background: ${(props) => props.theme.colors.lightViolet};
    }
`;

export const ButtonLight = styled.button`
    background: rgba(89,100,224, 0.1);
    color: ${(props) => props.theme.colors.violet};
    border-radius: 6px;
    border: none;
    font-family: ${(props) => props.theme.fonts.fontStack};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizes.sizeP};

    &:hover {
        background: rgba(89,100,224,0.35);
    }
`;

export const AdditionalInfo = styled.div`
display: flex;
`;

export const AdditionalInfoChild = styled(InfoSpan)`
position: relative;
padding: 0 2em 0 0;

&:not(:first-child):before {
    content: '';
    position: absolute;
    left: -1.1em;
    top: .5em;
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.darkGrey};
}

`;

export const JobLocation = styled.h4`
color: ${(props) => props.theme.colors.violet};
font-size: ${(props) => props.theme.fontSizes.sizeH4};
font-weight: 700;
`;