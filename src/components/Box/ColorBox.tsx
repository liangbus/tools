import React, { useState, useEffect } from 'react';

interface Props {
  width?: number;
  height?: number;
  color: string;
  innerText: string;
}
function ColorBox(props: Props) {
  // const [] = useState()
  const { width = 50, height = 50, color, innerText } = props;
  const innerStyle = {
    width: width + 'px',
    height: height + 'px',
    backgroundColor: color
  }
  useEffect(() => {
    console.log(`in useEffect`)
  }, [props.color]);
  // console.log('in color box func');
  return (
    <div className="color-box" style={innerStyle}>
      {innerText}
    </div>
  )
}

export default ColorBox