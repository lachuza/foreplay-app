import React, { Component } from 'react';
import { CELLS,CELLSCONTENT } from './constants'
import './App.css';
import './styles/app.css'
import Main from './components/Main';
import GridBoard from './components/GridBoard';



class App extends Component {
  render() {
    return (
        <Main>
      <GridBoard cells={CELLS} cellsContent={CELLSCONTENT}/>
    </Main>

    );
  }
}

export default App;
