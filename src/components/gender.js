import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { man , woman } from "../actions"
import { useNavigate } from "react-router-dom"
import '../index.css';
// import Result from './Result'


const Gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const gender = useSelector((state) => state.gender);
    
  
    return (
      <div>
        {/* <Result gender={gender} />; */}
        <h3>{gender}</h3>
        <div>
        <button  onClick={() => dispatch(man())}>男</button>
        <button onClick={() => dispatch(woman())}>女</button>
        </div>
        <button onClick={() => navigate('/age')}>決定</button>
      </div>
    );
}

export default Gender;