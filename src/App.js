import React, { useState } from 'react';
import Navbar from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Sample of projects completed by Amber',
    },
    { name: 'artwork', description: 'Sample of mixed media artwork projects by Amber', }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case 'About':
        return <About />;
        case 'Contact':
          return <ContactForm />;
        case 'Portfolio':
          return <Portfolio currentCategory={currentCategory}/>;
        case 'Resume':
          return <Resume />;

    }
  };

  return (
    <div>
      <Navbar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navbar>
      <main>
        <>
        {renderPage(currentPage)}
        </>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;