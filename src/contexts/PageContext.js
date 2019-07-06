import React, { createContext, useState } from 'react';
import AsyncComponent from "../components/AsyncComponent";
import FirstPage from '../components/FirstPage/FirstPage';


export const PageContext = createContext();
const PageContextProvider = (props) => {
    const [route, setRoute] = useState("index")
    const onRouteChange = (route) => {
        setRoute(route);
    }

    let theme = "first-page-theme";
    let page = <FirstPage />;
    if (route === "about") {
        const AsyncAboutPage = AsyncComponent(() => import('../components/AboutPage/Aboutpage'))
        page = <AsyncAboutPage />
        theme = "about-page-theme"
    } else if (route === "contact") {
        const AsyncContactPage = AsyncComponent(() => import('../components/ContactPage/ContactPage'))
        page = <AsyncContactPage />
        theme = "contact-page-theme"
    } else {
        page = <FirstPage onRouteChange={onRouteChange} />;
        theme = "first-page-theme";
    }

    return (
        <PageContext.Provider value={{ page, theme, onRouteChange }}>
            {props.children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;