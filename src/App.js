import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FirstPage from './components/FirstPage/FirstPage';
import AsyncComponent from './components/AsyncComponent';

function App() {
  const [route, setRoute] = useState("index")
  const onRouteChange = (route) => {
    setRoute(route);
  }
  let theme = "first-page-theme";
  let page = <FirstPage />;
  if (route === "about") {
    const AsyncAboutPage = AsyncComponent(() => import('./components/AboutPage/Aboutpage'))
    page = <AsyncAboutPage />
    theme = "about-page-theme"
  } else if (route === "contact") {
    const AsyncContactPage = AsyncComponent(() => import('./components/ContactPage/ContactPage'))
    page = <AsyncContactPage />
    theme = "contact-page-theme"
  } else {
    page = <FirstPage onRouteChange={onRouteChange} />;
    theme = "first-page-theme";
  }
  return (
    <div className={`App ${theme}`}>
      <Navbar onRouteChange={onRouteChange} />
      <Main>
        {page}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
