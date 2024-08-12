import axios from "axios";

function Newgame({ token, setBoard, setPlayer_rack, setComputer_rack }) {
  axios({
    method: "POST",
    url: "http://127.0.0.1:9000/game/newgame",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      alert(res.data.message);
      setBoard(res.data.board);
      setPlayer_rack(res.data.player_rack);
      setComputer_rack(res.data.computer_rack);
    })
    .catch((err) => {
      console.error("Failed to start a new game:", err);
      alert("Failed to start a new game. Please try again.");
    });
}

export default Newgame;