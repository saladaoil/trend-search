import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { price1, price2, price3, price4, price5, price6 } from "../actions"
import { useNavigate } from "react-router-dom"
import '../index.css';
import { Button } from "@mui/material";

import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
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
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Price = () => {
    const classes = useStyles();
    const price = useSelector((state) => state.price);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const skip_handleClick = () => {
      dispatch(price6());
      navigate('/result');
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      switch (selectedValue) {
        case 'PRICE1':
          dispatch(price1());
          break;
        case 'PRICE2':
          dispatch(price2());
          break;
        case 'PRICE3':
          dispatch(price3());
          break;
        case 'PRICE4':
          dispatch(price4());
          break;
        case 'PRICE5':
          dispatch(price5());
          break;
        default:
          break;
      }
    };

    return (
      <Container
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
<Grid container spacing={0}>

      <Grid item xs={12}>
            <Typography variant="h6" className={classes.paper}>
              <h1>価格設定</h1>
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" className={classes.paper}>
          <h5>選択中:{price[2]}</h5>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <InputLabel>価格を選択してください</InputLabel>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value='PRICE1'>0~1500円</MenuItem>
            <MenuItem value='PRICE2'>1500~3000円</MenuItem>
            <MenuItem value='PRICE3'>3000~4500円</MenuItem>
            <MenuItem value='PRICE4'>4500~6000円</MenuItem>
            <MenuItem value='PRICE5'>6000円~</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
            <Typography variant="h6" className={classes.paper}>
            <Button variant="contained" color="primary"onClick={() => navigate('/result')}style={{ fontSize: '1em' }}>　決定　</Button>
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="h6" className={classes.paper}>
            <Button variant="contained" color="info" onClick={() => navigate('/age')}style={{ fontSize: '1em' }}>　戻る　</Button>
            </Typography>
        </Grid>


         <Grid item xs={6}>
            <Typography variant="h6" className={classes.paper}>
               <Button variant="contained" color="info" onClick={() => skip_handleClick()}style={{ fontSize: '1em' }}>スキップ </Button>
            </Typography>
         </Grid>
      </Grid>
    </Container>
    );
}

export default Price;