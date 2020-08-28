import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="table">
      <tr>
        <td>Country</td>
        <td>Cases</td>
        <td>Recovered</td>
        <td>Deaths</td>
        <td>Daily Increase %</td>
      </tr>
      <tr>
        <td>India</td>
        <td>5k</td>
        <td>3k</td>
        <td>1k</td>
        <td>23%</td>
      </tr>
    </div>
  );
}

export default Table;
