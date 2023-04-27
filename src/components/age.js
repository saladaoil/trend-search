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

  const homeUrl = process.env.PUBLIC_URL;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1.2),
      textAlign: "center",
      color: "black",
    }
  }));

  const Age = () => {


    const classes = useStyles();
    const age = useSelector((state) => state.age);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const skip_handleClick = () => {
       dispatch(age5());
       navigate(`${homeUrl}/price`);
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
        style={{ backgroundColor: "#ffffff", height: "100vh" }}
      >
        <Grid container spacing={0}>
  <Grid item xs={12}>
              <Typography variant="h4" className={classes.paper}>
                <h1>年齢選択</h1>
              </Typography>
          </Grid>
  
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.paper}>
            <h4>選択中: {age[2]}</h4>
            </Typography>
          </Grid>
  
          <Grid item xs={12}>
            <InputLabel><h2>孫の年齢を選択してください</h2></InputLabel>
            <Select value={selectedOption} onChange={handleChange}style={{ fontSize: '2.3em' }}>
              <MenuItem value='AGE1'><h2>1~3歳</h2></MenuItem>
              <MenuItem value='AGE2'><h2>4~7歳</h2></MenuItem>
              <MenuItem value='AGE3'><h2>8~11歳</h2></MenuItem>
              <MenuItem value='AGE4'><h2>12~15歳</h2></MenuItem>
            </Select>
          </Grid>
  
          <Grid item xs={6}>
              <Typography variant="h4" className={classes.paper}>
                <h2> </h2>
              </Typography>
            </Grid>

          <Grid container spacing={7}>
  
          <Grid item xs={12}>
            <Grid style={{ height: "100%" }}>
                <Typography variant="h6" className={classes.paper}>
                <Button variant="contained" color="error" onClick={() => navigate(`${homeUrl}/price`)}style={{ fontSize: '2.3em' }} disabled={!selectedOption}>　決定　</Button>
                </Typography>
            </Grid>
          </Grid>
  
          <Grid item xs={6}>
            <Grid style={{ height: "100%" }}>
                <Typography variant="h6" className={classes.paper}>
                <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}style={{ fontSize: '1.1em' }}>　戻る　</Button>
                </Typography>
            </Grid>
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
        </>
      );
  }
  
  export default Age;