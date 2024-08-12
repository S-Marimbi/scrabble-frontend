import React from 'react';

const rackStyles = {
  rackContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  rack: {
    display: 'flex',
    justifyContent: 'center',
  },
  tile: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0 5px',
    cursor: 'pointer', 
    transition: 'background-color 0.3s', 
  },
  tileHover: {
    backgroundColor: '#add8e6', 
  },
};

function Rack(props) {
  const { tiles = [] } = props;

  const handleTileClick = (tile) => {
  
    console.log(`Tile clicked: ${tile}`);
  };

  return (
    <div style={rackStyles.rackContainer}>
      <div style={rackStyles.rack}>
        {tiles.map((tile, i) => (
          <div
            key={i}
            style={rackStyles.tile}
            onClick={() => handleTileClick(tile)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rackStyles.tileHover.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
          >
            {tile}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rack;
