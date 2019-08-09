import React, { memo } from "react";
import css from "./CenterGridBoard.css";
import Row from "../Row";

const CenterGridBoard = props => {
  const { cells} = props;

  return (
    <div class="wrapperCenter nested">
    <div class="box1">1</div>  
    <div class="box2">2</div>  
    <div class="box3">3</div>  
    <div class="box4">4</div>  
    <div class="box5">5</div>  
    <div class="box6">6</div>  
    <div class="box7">7</div>  
    <div class="box8">8</div>  
    <div class="box9">9</div>  
    <div class="box10">10</div>  
    <div class="box11">11</div>  
    <div class="box12">12</div> 
    <div class="box13">13</div> 
    
</div>
  );
};

export default memo(CenterGridBoard);

