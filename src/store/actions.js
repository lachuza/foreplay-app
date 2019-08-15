export const types = {
  ROLL_DICE: "ROLL_DICE",
  TOOGLE_TURN: "TOOGLE_TURN",
  PICK_UP: "PICK_UP",
  PICK_OTHER: "PICK_OTHER",
  PICK_TASK: "PICK_TASK",
  PICK_BOTH: "PICK_BOTH",
  ROLL_AGAIN: "ROLL_AGAIN",
  GO_BACK:"GO_BACK",
  GO_BACK_N:"GO_BACK_N",
  FINISH: "FINISH",
  START: "START",
  BEFORE_ROLL: "BEFORE_ROLL"
};

export const rollDice = dice => {
  return {
    type: types.ROLL_DICE,
    payload: dice
  };
};

export const toogleTurn = () => {
  return {
    type: types.TOOGLE_TURN
  };
};

export const pickUp = () => {
  return {
    type: types.PICK_UP
  };
};

export const pickOther = () => {
  return {
    type: types.PICK_OTHER
  };
};

export const pickBoth = () => {
  return {
    type: types.PICK_BOTH
  };
};


export const rollAgain = () => {
  return {
    type: types.ROLL_AGAIN
  };
};

export const beforeRoll = () => {
  return {
    type: types.BEFORE_ROLL
  };
};

export const finish = () => {
  return {
    type: types.FINISH
  };
};

export const start = () => {
  return {
    type: types.START
  };
};

export const goBackN = () => {
  return {
    type: types.GO_BACK_N
  };
};

export const goBack = () => {
  return {
    type: types.GO_BACK
  };
};

export const pickTask = () => {
  return {
    type: types.PICK_TASK
  };
};

