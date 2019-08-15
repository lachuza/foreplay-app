import React from 'react';
import { connect } from "react-redux";
import { pickTask } from '../../store/actions';


class Card extends React.Component {
  constructor(props) {
    super(props);
    const {    
      id,level
    } = props
  }
  handleClick=(event)=>{
    if (this.props.level==this.props.actualLevel){
      this.props.pickTask();
    }
  }

  render() {
    return (
      <div class={this.props.level==this.props.actualLevel ? `boxM${this.props.id} imgLEVEL${this.props.level}`: `boxM${this.props.id} imgBackCard`} onClick={this.handleClick}></div>

    );
  }
  
   

}
const mapStateToProps = state => {
  return {
    actualLevel: state.level
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pickTask: () => {
      return dispatch(pickTask());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);