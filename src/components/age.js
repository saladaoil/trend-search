import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { age1, age2, age3, age4 } from "../actions"
import { useNavigate } from "react-router-dom"

const Age = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age);
  
    return (
      <>
        <div>{age[2]}</div>
        <div>
          <button onClick={() => dispatch(age1())}>1~3</button>
          <button onClick={() => dispatch(age2())}>4~7</button>
          <button onClick={() => dispatch(age3())}>8~11</button>
          <button onClick={() => dispatch(age4())}>12~15</button>
          <button onClick={() => navigate('/price')}>決定</button>
        </div>
      </>
    );
}

export default Age;