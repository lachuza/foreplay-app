import React from 'react';
import css from "./GridCell.css";

const GridCell = (props) => {
  const {    
    cellName,cellContent
  } = props

  

  return (
    
    <div className={`box gridCell img${cellContent}`} id={cellName}>
         {/* <div className="dot"></div>
        <div className="redDot"></div>  */}
    </div>
  )
}

export default GridCell
