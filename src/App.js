import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Results from './components/Results'
import JobDescription from './components/JobDescription'
import Header from './components/Header'
import GlobalStyle from './components/theme/globalStyles'
import Theme from './components/theme/theme'
import { DesktopWrapper } from './components/styledCommon'

const AppWrapper = styled.div`
    background: ${(props) => props.theme.colors.lightGrey};
    min-height: 100vh;
`;

function App() {
    const [isSelected, setIsSelected] = useState(false);
    const [currentJob, setCurrentJob] = useState('');

    const displayDescription = () => {
        setIsSelected(!isSelected);
    }

    const selectJob = (job) => {
        setCurrentJob(job)
    }

    return (
        <AppWrapper>
            <DesktopWrapper>
                <Header />
                { isSelected 
                ? <JobDescription isSelected={ displayDescription } currentJob={ currentJob }/> 
                : <Results isSelected={ displayDescription } selectJob={ selectJob }/> }
                </DesktopWrapper>
        </AppWrapper>
    )
}

ReactDOM.render(
    <ThemeProvider theme={ Theme }> 
        <GlobalStyle />
        <App /> 
    </ThemeProvider>, 
    document.getElementById('root'));