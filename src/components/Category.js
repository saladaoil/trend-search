import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { category1, category2, category3, category4, category5 } from "../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import '../index.css';
import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1.2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Category = () => {
    const classes = useStyles();
    const category = useSelector((state) => state.category);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
     const selectedValue = event.target.value;
       setSelectedOption(selectedValue);
       switch (selectedValue) {
        case 'CATEGORY1':
            dispatch(category1());
            break;
        case 'CATEGORY2':
            dispatch(category2());
            break;
        case 'CATEGORY3':
            dispatch(category3());
            break;
        case 'CATEGORY4':
            dispatch(category4());
            break;
        case 'CATEGORY5':
            dispatch(category5());
            break;
        default:
            break;
        }
  };

    return (
      <>
      <Container

    maxWidth="xs"
    style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
  >
    <Grid container spacing={0}>

    <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>
            <h1>カテゴリー選択</h1>
          </Typography>
      </Grid>

      <Grid item xs={12}>
          <Typography variant="h5" className={classes.paper}>
          <h4>選択中: <div>{category[1]}</div></h4>
          </Typography>
        </Grid>


        <Grid item xs={12}>
          <InputLabel>カテゴリーを選択してください</InputLabel>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value='CATEGORY1'>おもちゃ</MenuItem>
            <MenuItem value='CATEGORY2'>ゲーム</MenuItem>
            <MenuItem value='CATEGORY3'>知育玩具</MenuItem>
            <MenuItem value='CATEGORY4'>スポーツ</MenuItem>
            <MenuItem value='CATEGORY5'>その他</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="h6" className={classes.paper}>
            <Button variant="contained" color="info" onClick={() => navigate('/price')}style={{ fontSize: '1.2em' }}>戻る</Button>
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="h6" className={classes.paper}>
            <Button variant="contained" color="info" onClick={() => navigate('/category_result')}style={{ fontSize: '1.2em' }}>決定</Button>
            </Typography>
        </Grid>

        </Grid>

        </Container>
      </>
    );
}

export default Category;