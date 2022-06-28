import React from "react";

const AddData = ({ callbackFn }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <label>Add To List</label>
      </div>
      <div className="col-sm-3">
        <label className="labelInTodoInput">Title</label>
        <input type="text" id="title" />
      </div>
      <div className="col-sm-3">
        <label className="labelInTodoInput">Select Date</label>
        <input type="date" id="selectDate" />
      </div>
      <div className="col-sm-3">
        <label className="labelInTodoInput">Completed ? </label>
        <select id="selectCompleted">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="col-sm-3">
        <button className="btn btn-primary btn-sm" onClick={callbackFn}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddData;
