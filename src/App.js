import React, {useState, useEffect} from 'react';
import Header from './components/Header/index.js';
import Nav from './components/Nav/index.js';
import About from './components/About/index.js';
import Portfolio from './components/Portfolio/index.js';
import Contact from './components/Contact/index.js';
import Footer from './components/Footer/index.js';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [pages] = useState([
      { name: 'about' },
      { name: 'portfolio' },
      { name: 'contact' },
      { name: 'resume' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const renderPage = ({ currentPage }) => {
      switch (currentPage.name) {
          case 'about':
              return <About />;
          case 'portfolio':
              return <Portfolio />;
          case 'contact':
              return <Contact />;
          case 'resume':
              return <Resume />;
          default:
              return <About />;
      }
  }

  return (
      <div>
          <Header
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
          <main>
              {renderPage({ currentPage })}
          </main>
          <Footer />
      </div>
  );
};

export default App;