import React from 'react';
import css from "./MessageCell.css";
import { connect } from "react-redux";
import NextTurn from '../NextTurn';



function renderSwitch(param,level,task) {
  switch(param) {
    case 'BED':
      return <NextTurn showButton={true} action={param}>Espera a tu pareja en la cama</NextTurn>;
    case 'PICKUP':
        return <NextTurn showButton={false} action={param}>Suerte! Agarra una accion del nivel {level} </NextTurn>;
    case 'HEARTS':
        return <NextTurn action={param} showButton={false}>Ambos deben realizar una prenda</NextTurn>;
    case 'DICES':
        return <NextTurn action={param} showButton={false}>Tira de nuevo</NextTurn>;
    case 'GOBACKN':
        return <NextTurn action={param} showButton={false}>Estas muy apurado, debes tirar el dado y retroceder.</NextTurn>;
    case 'PICKUPOTHER':
        return <NextTurn action={param} showButton={false}>Tu pareja levanta una accion</NextTurn>;
    case 'GOBACK':
        return <NextTurn action={param} showButton={true}>Vuelves a la cama mas cercana.</NextTurn>;
    case 'PICK_TASK':
          return <NextTurn action={param} showButton={true}>{task}</NextTurn>;                                
    default:
        return param;
  }
}

const MesageCell = (props) => {
  const {    
    cellName,cellContent
  } = props

  

  return (
    
    <div class="boxM11"> 
      {props.showMessage && renderSwitch(props.nextAction,props.level,props.task)}    
    </div> 
  )
}

const mapStateToProps = state => {
  return {
    posMan: state.posMan,
    posWoman: state.posWoman,
    nextAction: state.nextAction,
    showMessage: state.showMessage,
    level: state.level,
    task: state.task
  };
};



export default connect(mapStateToProps)(MesageCell);