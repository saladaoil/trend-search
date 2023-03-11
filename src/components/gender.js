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
import { createTheme } from "@material-ui/core/styles";

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
        style={{ backgroundColor: "#ffffff", height: "100vh" }}
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

            <Grid container spacing={0}>

            <Grid item xs={12}>
              <InputLabel><h2>性別を選択してください</h2></InputLabel>
              <Select value={selectedOption} onChange={handleChange} style={{ fontSize: '2.3em' }}>
                <MenuItem value='BOY'><h2>男</h2></MenuItem>
                <MenuItem value='GIRL'><h2>女</h2></MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6" className={classes.paper}>
                <h2> </h2>
              </Typography>
            </Grid>

           </Grid>

            <Grid container spacing={7}>

            <Grid item xs={12}>
              <Typography variant="h6" className={classes.paper}>
                <Button variant="contained" color="error" onClick={() => navigate('/age')} style={{ fontSize: '2.3em' }} disabled={!selectedOption}>　決定　</Button>
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
                  <Button variant="contained" color="inherit" onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>スキップ</Button>
                </Typography>
              </Grid>
            </Grid>

            </Grid>


          </Grid>
        </Container>

    );
}

export default Gender;