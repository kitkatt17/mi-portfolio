
import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { Loader } from 'semantic-ui-react';
import { NavBar } from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import GoUpArrow from './components/GoUpArrow';
import Timeline from './components/Timeline';
import { ThemeContext } from './ThemeContext';


function App() {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      id='about'
    >
      <NavBar />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
          }}
        >
          <Loader active inline='centered' />
        </div>
      ) : (
        <>
          <div style={{ flex: "1" }}>
            <AboutMe />
            <Projects />
            <Timeline />
            <Resume />
            <Contact />
            <GoUpArrow />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;



// // Import statements
// import Header from './components/Header/Header';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Skills from './components/Resume/Resume';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

// // CSS import
// import './App.css';

// // App component
// const App = () => {
//   return (
//     <div id='top' className='app'>
//       {/* Components */}
//       <Header />
//       <main>
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
      
//       {/* Additional components */}
//       <ScrollToTop />
//       <Footer />
//     </div>
//   );
// };

// export default App;