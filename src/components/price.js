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

  const Price = () => {

    const classes = useStyles();
      const price = useSelector((state) => state.price);
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const skip_handleClick = () => {
        dispatch(price6());
        navigate(`${homeUrl}/gender2`);
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
        style={{ backgroundColor: "#ffffff", height: "100vh" }}
      >
  <Grid container spacing={0}>
  
        <Grid item xs={12}>
              <Typography variant="h4" className={classes.paper}>
                <h1>価格設定</h1>
              </Typography>
          </Grid>
  
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.paper}>
            <h4>選択中:{price[2]}</h4>
            </Typography>
          </Grid>
  
          <Grid item xs={12}>
            <InputLabel><h2>価格を選択してください</h2></InputLabel>
            <Select value={selectedOption} onChange={handleChange}style={{ fontSize: '2.3em' }}>
              <MenuItem value='PRICE1'><h2>0~1500円</h2></MenuItem>
              <MenuItem value='PRICE2'><h2>1500~3000円</h2></MenuItem>
              <MenuItem value='PRICE3'><h2>3000~4500円
  </h2></MenuItem>
              <MenuItem value='PRICE4'><h2>4500~6000円</h2></MenuItem>
              <MenuItem value='PRICE5'><h2>6000円~</h2></MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
              <Typography variant="h4" className={classes.paper}>
                <h2> </h2>
              </Typography>
          </Grid>
  
          <Grid container spacing={7}>
  
          <Grid item xs={12}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="error"onClick={() => navigate(`${homeUrl}/result`)}style={{ fontSize: '2.3em' }} disabled={!selectedOption}>　決定　</Button>
              </Typography>
          </Grid>
  
          <Grid item xs={6}>
              <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/age`)}style={{ fontSize: '1.1em' }}>　戻る　</Button>
              </Typography>
          </Grid>
  
  
           <Grid item xs={6}>
              <Typography variant="h6" className={classes.paper}>
                 <Button variant="contained" color="inherit" onClick={() => skip_handleClick()}style={{ fontSize: '1em' }}>スキップ </Button>
              </Typography>
           </Grid>
          </Grid>
        </Grid>
      </Container>
      );
  }
  
  export default Price;