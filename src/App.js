import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Results from './components/Results'
import JobDescription from './components/JobDescription'
import Header from './components/Header'
import GlobalStyle from './components/theme/globalStyles'
import Theme from './components/theme/theme'
import { lightTheme, darkTheme } from './components/theme/darkMode'

const AppWrapper = styled.div`
    background: ${(props) => props.theme.mainBackground};
    min-height: 100vh;
`;

function App() {
    const [isSelected, setIsSelected] = useState(false);
    const [currentJob, setCurrentJob] = useState('');
    const [theme, setTheme] = useState('light');

    const displayDescription = () => {
        setIsSelected(!isSelected);
    }

    const selectJob = (job) => {
        setCurrentJob(job)
    }

    const toggleTheme = (choice) => {
        choice === 'light' ? setTheme('light') : setTheme('dark');
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
            <AppWrapper>
                    <Header toggleTheme={ toggleTheme } theme={ theme }/>
                    { isSelected 
                    ? <JobDescription isSelected={ displayDescription } currentJob={ currentJob }/> 
                    : <Results isSelected={ displayDescription } selectJob={ selectJob }/> }
            </AppWrapper>
        </ThemeProvider>
    )
}

ReactDOM.render(
        <ThemeProvider theme={ Theme }>
            <GlobalStyle />
            <App /> 
        </ThemeProvider>, 
    document.getElementById('root'));