import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [aboutData, setAboutData] = useState({
        clientHeight: 0,
        scrollTop: 0,
        scrollHeight: 0,
        offsetTop: 0
    })

    const [portfolioData, setPortfolioData] = useState({
        clientHeight: 0,
        scrollTop: 0,
        scrollHeight: 0,
        offsetTop: 0
    })

    const [navigationData, setNavigationData] = useState({
        clientHeight: 0,
        scrollTop: 0,
        scrollHeight: 0,
        offsetTop: 0
    })

    const [introNavData, setIntroNavData] = useState({
        clientHeight: 0,
        scrollTop: 0,
        scrollHeight: 0,
        offsetTop: 0
    })
     
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AppContext.Provider 
            value={{ 
                isAuthenticated, setIsAuthenticated, 
                aboutData, setAboutData, 
                portfolioData, setPortfolioData, 
                navigationData, setNavigationData, 
                introNavData, setIntroNavData 
            }}>
            {props.children}
        </AppContext.Provider>
    )
}
