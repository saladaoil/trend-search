import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { boy, girl, all} from "../actions"
import { useNavigate } from "react-router-dom"
import '../index.css';
import { Button } from "@mui/material";
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
    padding: theme.spacing(1.2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Gender = () => {
  
  const gender = useSelector((state) => state.gender);
  const classes = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skip_handleClick = () => {
    dispatch(all());
    navigate('/age');
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case 'BOY':
        dispatch(boy());
        break;
      case 'GIRL':
        dispatch(girl());
        break;
      case 'ALL':
        dispatch(all());
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
              <Typography variant="h4" className={classes.paper}>
                <h1>性別選択</h1>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.paper}>
                <h4>選択中: {gender[3]}</h4>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>性別を選択してください</InputLabel>
              <Select value={selectedOption} onChange={handleChange}>
                <MenuItem value='BOY'>男</MenuItem>
                <MenuItem value='GIRL'>女</MenuItem>
              </Select>
            </Grid>


            <Grid container spacing={7}>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.paper}>
                  <Button variant="contained" color="inherit" onClick={() => navigate('/age')} style={{ fontSize: '2.3em' }}>決定</Button>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h4" className={classes.paper}>
                  <h2> </h2>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Grid style={{ height: "100%" }}>
                  <Typography variant="h6" className={classes.paper}>
                    <Button variant="contained" color="inherit" onClick={() => skip_handleClick()} style={{ fontSize: '1.4em' }}>スキップ</Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

    );
}

export default Gender;

