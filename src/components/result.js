import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import { resultContext } from '../App';
// import Gender from './Gender';

const Result = () => {
  
    // const result = useContext(resultContext);
    const gender_val = useSelector((state) => state.gender);
    const age_val = useSelector((state) => state.age);
    const price_val = useSelector((state) => state.price);
    const result = gender_val + "," + age_val + "," + price_val;

    return (
      <div>
        <h1>result</h1>
        <p>{result}</p>
      </div>
    );
}

export default Result;