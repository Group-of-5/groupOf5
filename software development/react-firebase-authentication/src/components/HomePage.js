import { auth } from "../services/firebase";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";


import "../App.css";

const Home = ({ user }) => {
  return (
    <div className="container-fluid user-container"  style={{ marginTop: "10%" }}>
      <div className="row">
          <Card.Body>
            <Card.Title className="title">Welcome</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.displayName}
            </Card.Subtitle>
            <img src={user.photoURL} alt="" />
           
          </Card.Body>
      </div>
      <div className="app-container">
     
      <div className="forms-container">
        <IncomeForm addIncome='0' />
        <ExpenseForm addExpense={1000 ,'fgfhff','hfhf'} />
      </div>
      <Button
            style={{margin: '5%'}}
            variant="outline-danger"
            type="submit"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
    </div>
    </div>
  );
};

export default Home;
