import React, { memo } from "react";
import css from "./GridBoard.css";
import Row from "../Row";
import CenterGridBoard from "../CenterGridBoard";
import GridCell from "../GridCell";

const GridBoard = props => {
  const { cells} = props;

  return (
    <div class="wrapper">
      {cells.map((cellName) => {
        return (
          <GridCell cellName={cellName} />
        )
      })}
    <div class="boxM1"></div>  
    <div class="boxM2"></div>  
    <div class="boxM3">3</div>  
    <div class="boxM4"></div>  
    <div class="boxM5">5</div>  
    <div class="boxM6"></div>  
    <div class="boxM7"></div>  
    <div class="boxM8">8</div>  
    <div class="boxM9"></div>  
    <div class="boxM10">10</div>  
    <div class="boxM11"></div>  
    <div class="boxM12">12</div> 
    <div class="boxM13"></div>
</div>
  );
};

export default memo(GridBoard);
