import React from 'react'

const GridCell = (props) => {
  const {    
    cellName
  } = props

  

  return (
    <div className="box">
        C{props.cellName}
    </div>
  )
}

export default GridCell
