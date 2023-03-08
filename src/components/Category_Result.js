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
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      >
        <div>
            <h1>結果</h1>
        </div>
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.paper}>
                <Button variant="contained" color="error"  onClick={(() => navigate('/category'))}>カテゴリー</Button>
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
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.paper}>
                <Button variant="contained" color="primary"  onClick={(() => navigate('/price'))}>戻る</Button>
                </Typography>
            </Grid>
          </div>
        </Container>
      </>
    );
}

export default Category_Result;