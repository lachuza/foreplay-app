import { types } from '../store/actions';
import { CELLS,CELLSCONTENT,BOARD } from '../constants'


const initialState = {
  posMan: 1,//FALSE
  posWoman: 1,//TRUE
  levelMan:1,
  levelWoman:1,
  turn: false,
  CELLSCONTENT: CELLSCONTENT,
  CELLS: CELLS,
  BOARD: BOARD,
  nextAction:'',
  gameStarted: false,
  activeDice:false,
  goForward:true,
  showMessage:false
};


const reducer = (state = initialState, action) => {
  if (action.type === types.START){
    let playerTurn=false;
    var playerStart = Math.floor(Math.random() * 2);
    if (playerStart==1){
      playerTurn=true;
    }
    return {...state,gameStarted:true,nextAction:"ROLL_DICE",activeDice:true,turn:playerTurn,goForward:true,
    showMessage:false,posMan: 1,posWoman: 1,levelMan:1,levelWoman:1};
  }
  if (action.type === types.ROLL_DICE) {    
    let  newRoll= action.payload;
    let newRollMan = state.posMan;
    let newRollWoman = state.posWoman;
    let newAction = '';
    let levelMan = state.levelMan;
    let levelWoman = state.levelWoman;
    if (state.turn){
      if(state.goForward)
        newRollWoman = state.posWoman + newRoll;
      else{
        newRollWoman = state.posWoman - newRoll;
        if (newRollWoman<1 && levelWoman==1){
          newRollWoman=1;
          }else{
            if (newRollWoman<1 && levelWoman>1){
              levelWoman=levelWoman-1;
              newRollWoman = newRollWoman+32;
            }
          }
      }      
      if (newRollWoman>32){
        newRollWoman = newRollWoman-32;
        levelWoman = levelWoman +1;
      } 
      newAction = state.BOARD[newRollWoman-1];
    }else{
      if(state.goForward)
        newRollMan = state.posMan + newRoll;
      else
      newRollMan = state.posMan - newRoll;
      if (newRollMan<1 && levelMan==1){
        newRollMan=1;
        }else{
          if (newRollMan<1 && levelMan>1){
            levelMan=levelMan-1;
            newRollMan = newRollMan+32;
          }
        }
      if (newRollMan>32){
        newRollMan = newRollMan-32;
        levelMan = levelMan+1;
      } 
      newAction = state.BOARD[newRollMan-1];
    }
    
    return {
      ...state,
      posMan:  newRollMan,
      posWoman:  newRollWoman,
      nextAction: newAction,
      activeDice:false,
      goForward:true,
      showMessage:true,
      levelMan: levelMan,
      levelWoman: levelWoman
    };
  }

  if (action.type === types.TOOGLE_TURN) {
    
    return {
      ...state,
      turn: !state.turn,
      activeDice:true,
      showMessage:false,
      level:0
    };
  }

  if (action.type === types.BEFORE_ROLL) {
    
    return {
      ...state,
      showMessage:false
    };
  }

  if (action.type === types.PICK_UP) {
    let level= state.levelMan;
    if (state.turn){
      level=state.levelWoman;
    }
    return {
      ...state,      
      showMessage:true,
      activeDice:false,
      level: level
    };
  }

  if (action.type === types.PICK_TASK) {
    let player= 'HOMBRE';
    if (state.turn){
      player='MUJER';
    }
    return {
      ...state,      
      showMessage:true,
      activeDice:false,
      task: `${player} HACE PRUEBA`,
      nextAction: 'PICK_TASK',
      level:0
    };
  }

  if (action.type === types.PICK_FIRST_TASK) {
    let player= 'MUJER';
    if (state.turn){
      player='HOMBRE';
    }
    return {
      ...state,      
      showMessage:true,
      activeDice:false,
      task: `${player} HACE PRUEBA`,
      nextAction: 'PICK_BOTH',
      level:0
    };
  }

  if (action.type === types.PICK_OTHER) {
    let level= state.levelMan;
    if (state.turn){
      level=state.levelWoman;
    }
    return {
      ...state,      
      showMessage:true,
      activeDice:false,
      level: level
    };
  }

  if (action.type === types.PICK_SECOND_TASK) {
    let level= state.levelMan;
    if (state.turn){
      level=state.levelWoman;
    }
    return {
      ...state,      
      showMessage:false,
      activeDice:false,
      level: level
    };
  }

  if (action.type === types.GO_BACK_N) {
    
    return {
      ...state,
      goForward:false,
      activeDice:true,
      showMessage:true
    };
  }

  if (action.type === types.ROLL_AGAIN) {
    
    return {
      ...state,
      goForward:true,
      activeDice:true,
      showMessage:true
    };
  }

  if (action.type === types.PICK_BOTH) {
    let level= state.levelMan;
    if (state.turn){
      level=state.levelWoman;
    }
    return {
      ...state,      
      showMessage:true,
      activeDice:false,
      level: level
    };
  }
  

  

  if (action.type === types.GO_BACK) {
    let position= state.posMan;
    let posWoman= state.posWoman;
    let posMan = state.posMan;
    if (state.turn){
      position=state.posWoman
    }
    //calcular cama
    for (var i = position; i > 0; i--){
      if (state.BOARD[i-1]=="BED"){
        position=i;
        break;
      }
    }
    if (state.turn){
      posWoman=position;
    }else{
      posMan=position;
    }
    
    return {
      ...state,      
      activeDice:true,
      posMan: posMan,
      posWoman: posWoman,
      turn: !state.turn,      
      showMessage:false
    };
  }
  

  return state;
};

export default reducer;
