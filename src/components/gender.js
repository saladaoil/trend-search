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


export default function Gender() {
  const classes = useStyles();
  const navigate = useNavigate()
  

  // データ
  const genders = ['男', '女'];

  // 選択した値を管理（初期値：ラジオ１）
  const [val, setVal] = React.useState('男');

  // ラジオボタンの値がチェンジされた時
  const handleChange = (e) => {
    setVal(e.target.value);
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
            <h2>性別選択</h2>
          </Typography>
      </Grid>

      <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>
            <p className="center">性別を選択してください</p>
          </Typography>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.paper}>
                  <>
                    <div className="container">
                      {genders.map((gender) => {
                        return (
                          <div key={gender}>
                            <input
                              id={gender}
                              type="radio"
                              value={gender}
                              onChange={handleChange}
                              checked={gender === val}
                            />
                            <label htmlFor={gender}>{gender}</label>
                          </div>
                        );
                      })}
                      <p>選択したのは「{val}」です。</p>
                      {val === 'その他' && (
                        <p>
                          <input type="text" />
                        </p>
                      )}
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
              <Button variant="contained" color="primary" onClick={() => navigate('/age')}>
                <h2>決定</h2>
              </Button>
            </Typography>
        </Grid>





      </Grid>


    </Container>

    
  );
}
