import { useState } from "react";
import NavBar from "./UI/NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
