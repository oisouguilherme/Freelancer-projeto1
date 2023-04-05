import "./buttonWpp.css";
import Whatsapp from "../../assets/whatsapp-button.svg";
import { useEffect } from "react";
import { useState } from "react";

function ButtonWpp() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY == 0 || window.scrollY < 1000 || window.scrollY > 6000) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="buttonWpp">
      {showDiv && (
        <div className="teste">
          <a href="">
            <img src={Whatsapp} alt="" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ButtonWpp;
