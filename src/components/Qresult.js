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
                    <h2>結果</h2>
                </Typography>
            </Grid>


            <Grid item xs={12}>
                <h1>ここに結果を出力</h1>
            </Grid>


        </Container>


    );
}
