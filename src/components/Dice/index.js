import React from 'react';
import './Dice.css';
import { connect } from "react-redux";
import { rollDice,beforeRoll} from '../../store/actions';

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.sides = [
            "translateZ(-25px) rotateY(0deg)",
            "translateZ(-25px) rotateX(-180deg)",
            "translateZ(-25px) rotateY(-90deg)",
            "translateZ(-25px) rotateY(90deg)",
            "translateZ(-25px) rotateX(-90deg)",
            "translateZ(-25px) rotateX(90deg)"
        ];
        this.handleClick = this.handleClick.bind(this);
        this.render = this.render.bind(this);
    }

    handleClick(e) {

        if (this.props.activeDice){
            var die = document.getElementById("die");
        var sides = this.sides

        die.classList.add("rolling");
        this.props.beforeRoll();
        setTimeout(() => {
            var roll = Math.floor(Math.random() * (sides.length))
            die.classList.remove("rolling");
            die.style.transform = sides[roll];
            this.props.rollDice(roll+1);
          }, 750)
        }
        

        
    }

    render() {
        let divs = this.sides.map((side, index) => {
            return <div className="side">{index+1}</div>
        });

        return (
            <div class="diceContainer" disa>
            <div className="die-container" onClick={ this.handleClick }>
                <div id="die" className={'d' + this.sides.length}>
                    { divs }
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {activeDice:state.activeDice};
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      rollDice: dice => {
        return dispatch(rollDice(dice));
      },
      beforeRoll: ()=>{return dispatch(beforeRoll())}
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dice);

