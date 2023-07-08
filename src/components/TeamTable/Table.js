import React from "react";
import classes from "./Table.module.css";
import DeleteButton from "../UI/DeleteButton";

const Table = (props) => {
  return (
    <div className={classes["main-div"]}>
      <table>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>LastUpdate</th>
          <th>Notes</th>
          <th>delete</th>
        </tr>
        {props.items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.status}</td>
              <td>{item.date.toLocaleString()}</td>
              <td>{item.note}</td>
              <td>
                <DeleteButton onDelete={props.onDeleteItem}></DeleteButton>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
