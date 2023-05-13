import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './commonstyles.css';

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

import Op1 from './TrendSearch 流行 kari.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Gender = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="app-container">
        <header className="header">
        </header>
        <div className="body">
          <div className="description">
            <h1>どちらかを選択<br></br>してください</h1>
          </div>
        </div>
          <Grid item xs={12} sm={6}>
            <img src={Op1} alt="アイコン" className="op1" />
          </Grid>
          <Grid item xs={12} sm={6}>
                     <img src={Op1} alt="アイコン" className="op1" />
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
export default Gender