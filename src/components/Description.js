import React from 'react';
import './styles.css';
import TrendSearchIcon from './images/TrendSearchIcon.png'
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
import { createTheme } from "@material-ui/core/styles";

const homeUrl = process.env.PUBLIC_URL;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1.2),
    textAlign: "center",
    margin: "auto",
    color: "black",
  }
}));
const theme = createTheme({
  palette:{
    gray:{
      light:'A9A9A9',
      main:'808080',
      dark:'696969',
    },
  },
});

const Gender = () => {

  const gender = useSelector((state) => state.gender);
  const classes = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skip_handleClick = () => {
    dispatch(all());
    navigate(`${homeUrl}/firstchoice`);
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
    <div className="app-container">
      <header className="header">
      </header>
      <div className="body">
        <img src={TrendSearchIcon} alt="アイコン" className="icon" />
        <div className="description">
          <h1>TrendSearch</h1>
          <p>使用方法</p>
        </div>
      </div>
              <Grid style={{ height: "100%" }}>
                <Typography variant="h6" className={classes.paper}>
                  <Button variant="contained" color="error" onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>開始</Button>
                </Typography>
              </Grid>
      
    </div>
  );
}

export default Gender;
