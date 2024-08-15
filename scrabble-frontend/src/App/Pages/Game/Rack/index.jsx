import React from 'react';

const rackStyles = {
  rackContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  rack: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#9dc183',  
    padding: '10px',
    borderRadius: '12px',        
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',  
    marginBottom: '10px',
  },
  tile: {
    width: '30px',             
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #fff',  
    borderRadius: '12px',      
    fontSize: '20px',          
    fontWeight: 'bold',
    margin: '0 8px',         
    cursor: 'pointer', 
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s', 
    background: 'linear-gradient(145deg, #ffffff, #e2e2e2)', 
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)', 
  },
  tileHover: {
    backgroundColor: '#ffeb3b', 
    color: '#2d4e4e',          
    transform: 'scale(1.1)',   
    boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.7)', 
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
