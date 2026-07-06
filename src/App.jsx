import { useState } from "react";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import patternLines from "./assets/images/pattern-lines.svg";
import patternCircle from "./assets/images/pattern-circle.svg";
import patternLineBDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternLineBMobileIpad from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import patternTop from "./assets/images/pattern-squiggly-line-top.svg";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    git: "",
    image: null,
  });

  const handleState = () => {
    setIsOpen(false);
  };

  const [isOpen , setIsOpen] = useState(true);
  return (
    <main className="relative w-full flex flex-col items-center pb-24 overflow-hidden">
      <img
        src={patternTop}
        alt=""
        className="fixed top-0 right-0 -z-10 pointer-events-none"
      />
      <img
        src={patternLines}
        alt=""
        className="fixed top-0 left-0 -z-10 pointer-events-none bg-no-repeat"
      />
      <img
        src={patternCircle}
        alt=""
        className="fixed top-[50%] right-[20%] -z-10 pointer-events-none"
      />
      {isOpen ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          handleState={handleState}
        />
      ) : (
        <Ticket formData={formData} />
      )}

      <img
        src={patternLineBMobileIpad}
        alt=""
        className="fixed left-0 bottom-0 -z-10 pointer-events-none md:hidden"
      />
      <img
        src={patternLineBDesktop}
        alt=""
        className="hidden md:block fixed left-0 bottom-0 -z-10 pointer-events-none"
      />
    </main>
  );
}

export default App;
