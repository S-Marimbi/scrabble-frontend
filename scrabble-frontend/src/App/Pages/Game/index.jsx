import APPCONTEXT from '../../Context/AppContext.jsx';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from './Board';
import Rack from './Rack';
import Logout from './Logout/index.jsx';
import Newgame from './Newgame/index.jsx';
import Move from './Move/index.jsx';
import Swap from './SwapRack/index.jsx';
import SkipTurn from './SkipTurn/index.jsx';

function Game() {
  const { user, token, setUser, setToken } = useContext(APPCONTEXT);
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [player_rack, setPlayer_rack] = useState([]);
  const [computer_rack, setComputer_rack] = useState([]);

  useEffect(() => {
    if (!user || !token) {
      navigate('/');
      return;
    }
    getBoard();
    getRack();
  }, []);

  const getBoard = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:9000/game/board',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setBoard(res?.data?.board || []);
    })
    .catch((err) => {
      console.error(err);
      if (!user || !token) {
        navigate('/');
      }
    });
  };

  const getRack = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:9000/game/rack',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setPlayer_rack(res?.data?.player_rack || []);
      setComputer_rack(res?.data?.computer_rack || []);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const handleComputerMove = () => {
    getBoard();
    getRack();
  };

  return (
    <div>
      <div className="game-screen">
        <div className="message-panel">
          <p className="welcome-message">Welcome Player: {user?.user_name}</p>
          <div className="button-group">
            <button className="logout-button" onClick={() => Logout(navigate, setUser, setToken, token)}>Logout</button>
            <button className="new-game-button" onClick={() => Newgame({ token, setBoard, setPlayer_rack, setComputer_rack })}>New Game</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Board board={board} setBoard={setBoard} getBoard={getBoard} />
      </div>
      <div className="rack">
        <h2>{user?.user_name}'s Rack</h2>
        <Rack tiles={player_rack} setTiles={setPlayer_rack} getRack={getRack} />
        <h2>Computer's Rack</h2>
        <Rack tiles={computer_rack} setTiles={setComputer_rack} />
      </div>
      <Move getBoard={getBoard} getRack={getRack} handleComputerMove={handleComputerMove} />
      <div className="user-actions">
        <Swap getRack={getRack} />
        <SkipTurn getBoard={getBoard} getRack={getRack} handleComputerMove={handleComputerMove} />
      </div>
    </div>
  );
}

export default Game;