import React from 'react';

const Rank = ({ entries }) => {
  console.log('Rank');
  return (
    <div className='f5'>
      { entries >= 0
        ? `Flowers Identified: ${entries}`
        : 'Flower Identifier'
      }
    </div>
  );
}

export default Rank;