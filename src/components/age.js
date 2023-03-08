import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { age1, age2, age3, age4, age5 } from "../actions"
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
    padding: theme.spacing(1.6),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

 const Age = () => {

   const classes = useStyles();
   const age = useSelector((state) => state.age);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const skip_handleClick = () => {
      dispatch(age5());
      navigate('/price');
   };

   const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case 'AGE1':
        dispatch(age1());
        break;
      case 'AGE2':
        dispatch(age2());
        break;
      case 'AGE3':
        dispatch(age3());
        break;
      case 'AGE4':
        dispatch(age4());
        break;
      case 'AGE5':
        dispatch(age5());
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
              <h1>年齢選択</h1>
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" className={classes.paper}>
          <h4>選択中: {age[2]}</h4>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <InputLabel>年齢を選択してください</InputLabel>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value='AGE1'>1~3歳</MenuItem>
            <MenuItem value='AGE2'>4~7歳</MenuItem>
            <MenuItem value='AGE3'>8~11歳</MenuItem>
            <MenuItem value='AGE4'>12~15歳</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          <Grid style={{ height: "100%" }}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="primary" onClick={() => navigate('/price')}style={{ fontSize: '1.7em' }}>決定</Button>
              </Typography>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid style={{ height: "100%" }}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="info" onClick={() => navigate('/')}style={{ fontSize: '1.2em' }}>　戻る　</Button>
              </Typography>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid style={{ height: "100%" }}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="info" onClick={() => skip_handleClick()} style={{ fontSize: '1.2em' }}>スキップ</Button>
              </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Container>
      </>
    );
}

export default Age;