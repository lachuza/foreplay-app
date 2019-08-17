import React from 'react';
import { connect } from "react-redux";
import { toogleTurn,pickUp,pickBoth,pickOther,goBack,goBackN,rollAgain,pickSecondTask } from '../../store/actions';


class NextTurn extends React.Component {
  constructor(props) {
    super(props);
    const {    
      action,
      showButton
    } = props
        
    
  }
  componentDidMount() {
    switch(this.props.action) {      
      case 'PICKUP': 
        this.props.pickUp();break;
      case 'HEARTS':
        this.props.pickBoth();break;      
      case 'GOBACKN':
        this.props.goBackN();break; 
      case 'PICKUPOTHER':
        this.props.pickOther();break;
      case 'DICES':
          this.props.rollAgain();break;                                     
      default:
          return "";
    }
  }
  
  
  

  handleClick=(event)=>{
    
    switch(this.props.action) {      
      case 'GOBACK':
        this.props.goBack();break;
      case 'PICK_BOTH':
          this.props.pickSecondTask();break;                                          
      default:
        this.props.toogleTurn();break;
    }
    
  }
  render() {
    return (
      <div> {this.props.children}{this.props.showButton && 
      
      <button onClick={this.handleClick}>Continuar</button>}</div>

    );
  }

 }

const mapStateToProps = state => {
  return {
    posMan: state.posMan,
    posWoman: state.posWoman
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toogleTurn: () => {
      return dispatch(toogleTurn());
    },
    pickUp: () => {
      return dispatch(pickUp());
    },    
    pickBoth: () => {
      dispatch(pickBoth());
    },
    goBackN: () => {
      return dispatch(goBackN());
    },
    pickOther: () => {
      return dispatch(pickOther());
    },
    goBack: () => {
      return dispatch(goBack());
    },
    rollAgain: () => {
      return dispatch(rollAgain());
    },
    pickSecondTask: () => {
      return dispatch(pickSecondTask());
    }
    

};}

export default connect(mapStateToProps, mapDispatchToProps)(NextTurn);