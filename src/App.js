import React, { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { PageContext } from "./contexts/PageContext";

function App() {
  const { page, theme } = useContext(PageContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Main>
        {page}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
