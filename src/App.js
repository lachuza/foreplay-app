import React from 'react';
import { ROWS, COLS, CELLS } from './constants'
import './App.css';
import './styles/app.css'
import Board from './components/Board';
import Main from './components/Main';
import GridBoard from './components/GridBoard';
import CenterGridBoard from './components/CenterGridBoard';

function App() {
  return (
    <Main>
      <GridBoard cells={CELLS}/>
 

    </Main>
  );
}

export default App;
