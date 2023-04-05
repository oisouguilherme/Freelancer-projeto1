import './BotaoFixo.css'
import {Button} from '../CompreAqui/Button/Button'
import { useState } from 'react';
import { useEffect } from 'react';


export function BotaoFixo(){
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1000 && window.scrollY < 6000 ) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    
  }, []);

  return (
    <div>
      {showDiv && (
        <div>
          <div className="botaofixo-container">
            <Button text={"Compre agora"} />
          </div>
          <div className="shadow"></div>
        </div>
      )}
    </div>
  );
}