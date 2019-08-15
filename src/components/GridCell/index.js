import React from 'react';
import css from "./GridCell.css";
import { connect } from "react-redux";


const GridCell = (props) => {
  const {    
    cellName,cellContent
  } = props

  

  return (
    
    <div className={`box gridCell img${cellContent}`} id={cellName}>
    {cellName == props.posMan && <div className="manDot"></div>}
    {cellName == props.posWoman && <div className="womanDot"></div>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posMan: state.posMan,
    posWoman: state.posWoman
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GridCell);