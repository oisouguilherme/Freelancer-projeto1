import { useState } from "react";
import Plus from "../../../assets/icons/plus.svg";
import "./Pergunta.css";

function Pergunta({ pergunta, resposta }) {
  const [showDiv, setShowDiv] = useState(false);

  function toggleDiv() {
    setShowDiv(!showDiv);
  }
  return (
    <div className="buttons">
        <button onClick={toggleDiv}>{`+ ${pergunta}`}</button>
        {showDiv && <div>{resposta}</div>}
    </div>
  );
}

export default Pergunta;
