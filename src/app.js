// Import statements
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Resume/Resume';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// CSS import
import './App.css';

// App component
const App = () => {
  return (
    <div id='top' className='app'>
      {/* Components */}
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Additional components */}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
