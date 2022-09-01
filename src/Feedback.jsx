import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Submits from "./Submits";


const Feedback = ()  => {

  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([
      { name: user, dept: department, rate: rating, id: uuidv1() },
      ...data,
    ]);
    setUser("");
    setDepartment("");
    setRating("");
  };
  return(
    <>
        <div className="Feedback">
        <h1 > Employee Feedback Form</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="input">
            <label >Name:- </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label >Department:-</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label >Rating:-</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <input type="submit" className="Button" />
        </form>
      </div>
      <Submits submitData={data} />
      </>
  )
    
  
}

export default Feedback;