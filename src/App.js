import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FirstPage from './components/FirstPage/FirstPage';
import AboutPage from './components/AboutPage/Aboutpage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  const [route, setRoute] = useState("index")
  const onRouteChange = (route) => {
    setRoute(route);
  }
  let theme = "first-page-theme";
  let page = <FirstPage />;
  if (route === "about") {
    page = <AboutPage />
    theme = "about-page-theme"
  } else if (route === "contact") {
    page = <ContactPage />
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
