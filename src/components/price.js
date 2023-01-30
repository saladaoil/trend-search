import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from '@material-ui/core/Button';

import "./styles.css";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));


export default function Age() {
  const classes = useStyles();
  const navigate = useNavigate()
  

  // メニューデータ
  const items = ["0~1500円", "1500~3000円", "3000~4500円", "4500~6000円"];

  // プルダウンの値を管理（初期値：アイテム１）
  const [seleceItem, setSelectItem] = React.useState("0~1500円");

  // プルダウンがチェンジされた時
  const handleChange = (e) => {
    setSelectItem(e.target.value);
  };

  return (
    <Container
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Grid item xs={12}>

        <Typography variant="h6" className={classes.paper}>

        </Typography>

      </Grid>

      <Grid item xs={12}>
          <Typography variant="h3" className={classes.paper}>
            <h2>価格選択</h2>
          </Typography>
      </Grid>

      <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>
            <p className="center">価格を選択してください</p>
          </Typography>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.paper}>
                <>
      <div className="container">
        <section>
          <select value={seleceItem} onChange={handleChange}>
            {items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>

        <p>選択した値：{seleceItem}</p>
      </div>
    </>
                </Typography>

            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12}>
            <Typography variant="h6" className={classes.paper}>
              <Button variant="contained" color="primary" onClick={() => navigate('/qresult')}>
                <h2>決定</h2>
              </Button>
            </Typography>
        </Grid>

      </Grid>


    </Container>

    
  );
}
