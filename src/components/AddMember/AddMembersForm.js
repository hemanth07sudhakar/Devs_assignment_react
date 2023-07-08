import React, { useState } from "react";
import classes from "./AddMemberForm.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddMembersForm = (props) => {
  const [isName, setIsname] = useState("");
  const [isCompany, setIsCompany] = useState("");
  const [isStatus, setIsStatus] = useState("");
  const [isDate, setIsDate] = useState("");
  const [isNote, setIsNote] = useState("");

  const nameChangeHandler = (event) => {
    setIsname(event.target.value);
  };

  const companyNameHandler = (event) => {
    setIsCompany(event.target.value);
  };

  const statusHandler = (event) => {
    setIsStatus(event.target.value);
  };

  const dateClickHandler = (event) => {
    setIsDate(event.target.value);
  };

  const noteHandler = (event) => {
    setIsNote(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const addDataList = {
      name: isName,
      company: isCompany,
      status: isStatus,
      note: isNote,
      date: new Date(isDate),
    };

    // console.log(addDataList);
    props.onSaveAddMember(addDataList);
    setIsname("");
    setIsCompany("");
    setIsStatus("");
    setIsDate("");
    setIsNote("");
  };

  return (
    <Modal onClose={props.onHide}>
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <h2>Add member</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={isName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={isCompany}
            onChange={companyNameHandler}
          />
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            value={isStatus}
            onChange={statusHandler}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={isDate}
            onChange={dateClickHandler}
          />
          <label htmlFor="notes">Notes</label>
          <input type="text" id="notes" value={isNote} onChange={noteHandler} />
          <div className={classes.actions}>
            <button
              type="button"
              className={classes["button--alt"]}
              onClick={props.onHide}
            >
              Cancel
            </button>

            <button type="submit" className={classes.button}>
              Save
            </button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default AddMembersForm;
