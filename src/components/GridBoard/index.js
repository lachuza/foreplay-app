import React, { memo } from "react";
import css from "./GridBoard.css";
import GridCell from "../GridCell";
import ReactDice from 'react-dice-roller';
import Dice from "../Dice";


const GridBoard = props => {
  const { cells,cellsContent} = props;

  return (
    <div class="wrapper">
      {cells.map((cellName,index) => {
        return (
          <GridCell cellName={cellName} cellContent={cellsContent[index]}/>
        )
      })}
    <div class="boxM1"></div>  
    <div class="boxM2"></div>  
    <div class="boxM3 imgLEVEL1"></div>  
    <div class="boxM4 imgHeartsLogo"></div>  
    <div class="boxM5 imgLEVEL2"></div>  
    <div class="boxM6"></div>  
    <div class="boxM7 imgCouple"></div>  
    <div class="boxM8"><div class="diceContainer"><Dice/></div> </div>  
    <div class="boxM9 imgCouple"></div>  
    <div class="boxM10 imgLEVEL3"></div>  
    <div class="boxM11 imgHeartsLogo"></div>  
    <div class="boxM12 imgLEVEL4"></div> 
    <div class="boxM13"></div>
</div>
  );
};

export default memo(GridBoard);
