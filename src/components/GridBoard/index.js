import React from "react";
import css from "./GridBoard.css";
import GridCell from "../GridCell";
import MessageCell from "../MessageCell";
import { connect } from "react-redux";
import Dice from "../Dice";
import Card from "../Card";
import { start } from '../../store/actions';



const GridBoard = props => {
  const { cells,cellsContent} = props;
  
  function handleComenzarClick(evt){
    props.start();
  }
  return (
    <div>
    <div class="wrapper">
      {cells.map((cellName,index) => {
        return (
          <GridCell cellName={cellName} cellContent={cellsContent[index]}/>
        )
      })}
    <div class="boxM1">el turno es de: {props.turn ? `MUJER(nivel ${props.levelWoman})`: `HOMBRE(nivel ${props.levelMan})`}</div>  
    <div class="boxM2"></div>
    <Card id="3" level="1"/>  
    <div class="boxM4 imgHeartsLogo"></div>  
    <Card id="5" level="2"/>   
    <div class="boxM6"></div>  
    <div class="boxM7 imgCouple"></div>  
    <div class="boxM8">{props.gameStarted && <Dice/>} </div>
    <div class="boxM9 imgCouple"></div>  
    <Card id="10" level="3"/>   
     <MessageCell/> 
    <Card id="12" level="4"/> 
    <div class="boxM13">ACCION: {props.nextAction}</div>
</div>
<div><button onClick={handleComenzarClick}>Comenzar</button></div>

</div>

  );
};


const mapStateToProps = state => {
  return {
    turn: state.turn,
    nextAction: state.nextAction,
    gameStarted: state.gameStarted,
    levelWoman: state.levelWoman,
    levelMan: state.levelMan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    start: () => {
      return dispatch(start());}
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(GridBoard);
