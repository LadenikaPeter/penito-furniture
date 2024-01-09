import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIntialRender, setIsInitialRender] = useState(true);

  const menuHandler = () => {
    setIsMobileMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    console.log("works");
  };

  const toggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
    menuHandler();
    setIsInitialRender(false);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    menuHandler();
  };

  return (
    <>
      <Header
        toggleMenu={toggleMobileMenu}
        closeMenu={closeMobileMenu}
        isOpen={isOpen}
        initial={isIntialRender}
      />
      <Home menuOpen={isMobileMenuOpen} menuClosedHandler={closeMenuHandler} />
    </>
  );
}

export default App;
