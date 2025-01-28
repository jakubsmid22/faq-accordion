import { useState } from "react";
import Container from "./components/Container";
import { useEffect } from "react";
import bgPatternDesktop from "./assets/images/background-pattern-desktop.svg";
import bgPatternMobile from "./assets/images/background-pattern-mobile.svg";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-light-pink">
      <div className="fixed bg-dark-purple top-0 left-0 right-0 min-h-fit z-10">
        <img src={windowWidth > 640 ? bgPatternDesktop : bgPatternMobile} alt="bg-pattern" />
      </div>
      <Container />
    </div>
  );
};

export default App;
