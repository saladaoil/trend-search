import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { boy, girl, all } from "../actions"
import { useNavigate } from "react-router-dom"
import '../index.css';


const Gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const gender = useSelector((state) => state.gender);
    
  
    return (
      <div>
        <h3>{gender[2]}</h3>
        <div>
        <button  onClick={() => dispatch(boy())}>男</button>
        <button onClick={() => dispatch(girl())}>女</button>
        <button onClick={() => dispatch(all())}>男女</button>
        </div>
        <button onClick={() => navigate('/age')}>決定</button>
      </div>
    );
}

export default Gender;