import React, { useContext } from 'react';
import axios from "axios";
import APPCONTEXT from "../../../Context/AppContext.jsx";

function SkipTurn({ getBoard, getRack }) {
  const { token } = useContext(APPCONTEXT);

  const handleSkip = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:9000/game/skip",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      alert("Turn skipped. Computer is playing now...");
      getBoard();
      getRack();  
    })
    .catch((err) => {
      alert("Failed to skip turn. Please try again.");
    });
  };

  return (
    <div className='SkipTurn'>
      <button onClick={handleSkip}>Skip Turn</button>
    </div>
  );
}

export default SkipTurn;