import React from 'react'
import css from './Cell.css'

const Cell = (props) => {
  const {    
    cellName
  } = props

  

  return (
    <div className="cell">
        {props.cellName}
    </div>
  )
}

export default Cell
