import React, { useContext } from 'react';
import axios from "axios";
import APPCONTEXT from "../../../Context/AppContext.jsx";

function Swap({ getRack }) {
  const { token } = useContext(APPCONTEXT);

  const handleSwap = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:9000/game/swap",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      alert(res.data.message);
      getRack();
    })
    .catch((err) => {
      alert(err.response?.data?.message || "Failed to swap rack. Please try again.");
    });
  };

  return (
    <button onClick={handleSwap}>Swap Rack</button>
  );
}

export default Swap;
