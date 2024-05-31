import React from 'react'


const Box = ({ color, size }) => {
  const boxStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    borderRadius: '5px',
    color: 'white'
  };

  return <div style={boxStyle}></div>;
};



export default Box;