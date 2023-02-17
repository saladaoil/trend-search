import React from 'react'
import { useSelector } from 'react-redux';
import toys_db from '../db/toy_db';



const Result = () => {
  
  const toys = toys_db; 
  
  const gender_val = useSelector((state) => state.gender); 
  const age_val = useSelector((state) => state.age);       
  const price_val = useSelector((state) => state.price);

  const [gender, all_gender] = gender_val
  const [from_age, to_age] = age_val
  const [from_price, to_price] = price_val
  


  let toy_filterResult = toys.filter( function (value) {
    return (value.gender === gender || value.gender === all_gender) &&
    !(value.min_age  > to_age || value.max_age < from_age) &&
    (from_price <= value.price && value.price <= to_price)
  })
  
  

  let names = toy_filterResult.map(function(toy) {
    return toy.name
  });

    return (
      <>
      <div>
        <h1>result</h1>
      </div>
      <div>
        <ul>
          {names.map(function (name) {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
      </>
    );
}

export default Result;



