import React from 'react'
import { useSelector } from 'react-redux';
import toys_db from '../db/toy_db';
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import '../index.css';
import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1.6),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    listItem: {
      listStyle: 'none',
    },
  }));


  const Category_Result = () => {

    const classes = useStyles();
    const navigate = useNavigate();
  
    const toys = toys_db;
  
    const gender_val = useSelector((state) => state.gender);
    const age_val = useSelector((state) => state.age);
    const price_val = useSelector((state) => state.price);
    const category_val = useSelector((state) => state.category)
  
    const [gender, common_gender, all_gender] = gender_val
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
          return { name: toy.name, price: toy.price };
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
      <Button variant="contained" color="inherit"  onClick={(() => navigate('/result'))}>戻る</Button>
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
        <Button variant="contained" color="primary"  onClick={(() => navigate('/category'))}>絞り込み</Button>
        </Typography>
    </Grid>
    <div>
  
      <ul>
        {category_dis.map(function (toy) {
            return (
                    <li key={`${toy.name}-${toy.price}`} className={classes.listItem}>
                      <Grid item xs={12} >
                        <Typography variant="h8">
                            <h3>{toy.name}</h3>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6">
                          <div >{toy.price + "円"}</div>
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
  
  export default Category_Result;