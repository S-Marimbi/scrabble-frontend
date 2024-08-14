import React, { useState, useContext } from 'react';
import axios from "axios";
import APPCONTEXT from "../../../Context/AppContext.jsx";

function Move({ getBoard, getRack }) {
  const { token } = useContext(APPCONTEXT);
  const [word, setWord] = useState('');
  const [row, setRow] = useState('');
  const [col, setCol] = useState('');
  const [direction, setDirection] = useState('H');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://127.0.0.1:9000/game/move",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        word: word.toUpperCase(),
        row: parseInt(row),
        col: parseInt(col),
        direction: direction.toUpperCase(),
      },
    })
    .then((res) => {
      alert(res.data.message);
      getBoard();
      getRack();
    })
    .catch((err) => {
      alert(err.response?.data?.message || "Failed to play the move. Please try again.");
    });
  };

  return (
    <div className="move-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Word:</label>
          <input type="text" value={word} onChange={(e) => setWord(e.target.value)} required />
        </div>
        <div>
          <label>Row (0-14):</label>
          <input type="number" value={row} onChange={(e) => setRow(e.target.value)} required />
        </div>
        <div>
          <label>Column (0-14):</label>
          <input type="number" value={col} onChange={(e) => setCol(e.target.value)} required />
        </div>
        <div>
          <label>Direction:</label>
          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="H">Horizontal</option>
            <option value="V">Vertical</option>
          </select>
        </div>
        <button type="submit">Play Move</button>
      </form>
    </div>
  );
}

export default Move;
