import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { price1, price2, price3, price4  } from "../actions"
import { useNavigate } from "react-router-dom"

const Price = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const price = useSelector((state) => state.price);
  
    return (
      <div>
        <h3>{price}</h3>
        <button onClick={() => dispatch(price1())}>0~1500</button>
        <button onClick={() => dispatch(price2())}>1500~3000</button>
        <button onClick={() => dispatch(price3())}>3000~4500</button>
        <button onClick={() => dispatch(price4())}>4500~6000</button>
        <button onClick={() => navigate('/result')}>決定</button>
      </div>
    );
}

export default Price;