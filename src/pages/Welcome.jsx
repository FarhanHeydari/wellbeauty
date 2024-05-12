import React from 'react';
import {Box, Divider, Grid,} from "@mui/material";
import '../assets/css/welcome.css';
import wellbeautyLogo from '../assets/img/text4.png';
import version from '../assets/img/text3.png';
import welcome from '../assets/img/text2.png';
import wellnessLogo from '../assets/img/text1.png';
import loading from '../assets/img/Infinity-2.6s-267px.svg';


import {useNavigate} from 'react-router-dom';

export function Welcome() {
    useNavigate();
    return (
        <Box className={'welcome-background'}>
            <Grid container direction={'column'}>
                <Grid container item direction={'row'} className={'welcome-nav'}>
                    <Grid container item xs={6} direction={'row'} alignContent={'center'}
                          className={'welcome-nav-right-box'}>
                        <Grid item><Box className={'welcome-nav-right-shade'}></Box></Grid>
                        <Grid item>
                            <img className={'welcome-wellness-logo'} src={wellbeautyLogo} alt="logo"/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} direction={'row'} alignItems={'center'}
                          className={'welcome-nav-left-box'}>
                        <Grid item><Box className={'welcome-nav-left-shade'}></Box></Grid>
                        <Grid item>
                            <img className={'welcome-wellness-version'} src={version} alt="version"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" className={'welcome-nav-divider'}
                     xs={{borderColor: 'rgba(255, 255, 255, 0.12)'}}/>
            <Grid Container className={'welcome-body'} direction={'column'} justifyContent={'space-around'}>

                <Grid container item direction={'column'} alignContent={'center'}>
                    <Grid item>
                        <img style={{height: 105, marginBottom: 106}} src={welcome} alt={'خوش آمدید'}/>
                    </Grid>
                </Grid>
                <Grid item></Grid>
                <Grid container item direction={'column'} alignContent={'center'} textAlign={'center'}>
                    <Grid item>
                        <img src={wellnessLogo} alt={'ولتس'}/>
                    </Grid>
                    <Grid item>
                        <img src={loading} alt={'در حال بارگزاری'}/>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
