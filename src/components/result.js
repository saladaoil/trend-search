import React from 'react'
import { useSelector, } from 'react-redux';
import toys_db from '../db/toy_db';
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import "./styles.css";
import '../index.css';
import {
  Container,
  Grid,
  paper,
  makeStyles,
  Typography
} from "@material-ui/core";


  const homeUrl = process.env.PUBLIC_URL; 

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1.6),
      textAlign: "center",
      color: 'black',
    },
    listItem: {
      listStyle: 'none',
    },
  }));


  const Result = () => {

    const classes = useStyles(); 
    const navigate = useNavigate();
  
    const toys = toys_db;
  
    const gender_val = useSelector((state) => state.gender);
    const age_val = useSelector((state) => state.age);
    const price_val = useSelector((state) => state.price);
  
    const [gender, common_gender,all_gender] = gender_val
    const [from_age, to_age] = age_val
    const [from_price, to_price] = price_val
  let toy_filterResult = toys.filter( function (value) {
          return (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
          !(value.min_age  > to_age || value.max_age < from_age) &&
          (from_price <= value.price && value.price <= to_price)
        })
  
        let toy_dis = toy_filterResult.map(function(toy) {
          return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url};
        });
  
      return (
        <>
        <Container
  
        maxWidth="xs"
        style={{ backgroundColor: "#ffffff", height: "100vh" }}
        >
  

            <Grid container spacing={0}>

          <Grid item xs={1}>
              <Typography variant="h1" className={classes.paper}>
              <Button variant="contained" color="inherit"  onClick={(() => navigate(`${homeUrl}/price`))}>戻る</Button>
              </Typography>
          </Grid>

          <Grid item xs={10}>
              <Typography variant="h4" className={classes.paper}>
                <h2>結果</h2>
              </Typography>
          </Grid>

          </Grid>

          <Grid item xs={12}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="primary"  onClick={(() => navigate(`${homeUrl}/category`))}style={{ fontSize: '1em' }}>絞り込み</Button>
              </Typography>
          </Grid>
          <div>
  
            <ul>
              {toy_dis.map(function (toy) {
                  return (
                    <li key={`${toy.name}-${toy.price}`} className={classes.listItem}>
                      <Grid item xs={10} >
                        <Typography variant="h8" className={classes.paper}>
                          <a 
                            href={toy.page_url}
                            target="_blank"
                            rel="noopener noreferrer">
                            <h3>{toy.name}</h3>
                            <h3>{toy.price}円</h3>
                            <img src={toy.image_url} alt={toy.name} />
                          </a>
                        </Typography>
                      </Grid>
                    </li>
                  );
              })}
          </ul>
          </div>
          </Container>
          </>
        );
    }
  export default Result;



