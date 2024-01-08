import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(false);

  const menuHandler = () => {
    setIsMobileMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const closeMenuHandler = () => {
    setIsMobileMenuClosed(false);
    console.log("works");
  };

  return (
    <>
      <Header isOpen={menuHandler} isClicked={isMobileMenuClosed} />
      <Home menuOpen={isMobileMenuOpen} menuClosedHandler={closeMenuHandler} />
    </>
  );
}

export default App;
