import React, { createRef } from "react";
import css from "./Row.css";
import useMeasure from "./useMeasure";
import Cell from "../Cell";
import BlankCell from "../BlankCell";

const Row = props => {
  const { rowName, cells } = props; 

  return (
    <div className="row">
      {cells.map(cellName => {
        return rowName == 1 || rowName == 10 ? (
          <Cell cellName={cellName} />
        ) : rowName != 1 && rowName != 10 && (cellName == 1 || cellName == 8) ? (
          <Cell cellName={cellName} />
        ) : (
          <BlankCell />
        );
      })}
    </div>
  );
};

export default Row;
