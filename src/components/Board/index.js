import React, { memo } from 'react'
import css from './Board.css'
import Row from '../Row'

const Board = (props) => {
  const {
    rows,cols
  } = props


  return (
    <div className="board">
      {rows.map((rowName) => {
        return (
          <Row rowName={rowName} cells={props.cols}/>
        )
      })}
    </div>
  )
}


export default memo(Board)
