import React, { useState } from "react";
import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("PAID IN FULL!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£ {props.amount}</div>
        <button onClick={clickHandler}>Change here!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
