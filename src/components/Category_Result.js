import React from 'react'
import { useState } from 'react';
import { useSelector, } from 'react-redux';
import toys_db from '../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;


  const Result = () => {

    const toys = toys_db;

    
    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 7;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const navigate = useNavigate();
    const goToNextPage = () => setPageNumber(pageNumber + 1);
    const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
    const gender_val = useSelector((state) => state.gender);
    const age_val = useSelector((state) => state.age);
    const price_val = useSelector((state) => state.price);
    const category_val = useSelector((state) => state.category)
  
    const [gender, common_gender,all_gender] = gender_val
    const [from_age, to_age] = age_val
    const [from_price, to_price] = price_val
    const [category] = category_val

    let toy_filterResult = toys.filter( function (value) {
          return (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
          !(value.min_age  > to_age || value.max_age < from_age) &&
          (from_price <= value.price && value.price <= to_price)
        })
  
        let  category_filterResult = toy_filterResult.filter(function (value) {
          return value.category === category;
        });
  
        let category_dis = category_filterResult.map(function(toy) {
          return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
        });

        const currentToyDis = category_dis.slice(startIndex, endIndex);
  
        return (
          <>
            <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
            <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/category`)}>戻る</Button>
            <h2>結果</h2>
            <div>
              <ul>
                {currentToyDis.map(function (toy) {
                  return (
                    <li key={`${toy.name}-${toy.price}`}>
                      <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
                        <h3>{toy.name}</h3>
                        <h3>{toy.price}円</h3>
                        <img src={toy.image_url} alt={toy.name} />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="pagination">
                <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
                <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
              </div>
            </div>
          </>
        );
        
    }
  export default Result;