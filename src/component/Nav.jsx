import {Box, Grid,} from "@mui/material";
import React from "react";
import wellBeautyLogo from '../assets/img/text4.png';
import '../assets/css/auth-nav.css';

export function Nav() {
    return (
        <Grid container direction={"column"} className={"nav"}>
            <Grid container item direction={"row"} className={"welcome-nav"}>
                <Grid container item xs={6} direction={"row"} alignContent={"center"}
                      className={"welcome-nav-right-box"}>
                    <Grid item><Box className={"welcome-nav-right-shade"}></Box></Grid>
                    <Grid item>
                        <img src={wellBeautyLogo} alt={'لوگو'} className={'wellbeauty-logo'}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}