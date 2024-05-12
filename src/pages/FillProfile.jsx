import React from 'react';
import {
    Box,
    Divider,
    Grid,
    InputAdornment,
    TextField,
} from "@mui/material";
import {Nav} from '../component/Nav';
import '../assets/css/signup.css';
import {MainButton} from "../component/MainButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import passwordIcon from "../assets/img/password.png";
import LoadingSpinner from '../assets/img//Spinner-1s-44px.gif';


export function FillProfile() {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const navigate = useNavigate();

    const fillProfile = () => {
        setButtonDisable(false);
        axios.put(
            'https://nice-gold-oyster-slip.cyclic.app/api/v1/users/updateMyProfile',
            {
                "firstname": firstname,
                "lastname": lastname
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                }
            }
        )
            .then(r => {
                console.log(r);
                if(r.data['success']=== true){
                    localStorage.setItem('name', r.data.data['firstname'] + " " + r.data.data['lastname'])
                    navigate('/profile')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <Box>
            <Nav/>
            <Divider variant="fullWidth" className={'welcome-nav-divider'}
                     xs={{borderColor: 'rgba(255, 255, 255, 0.12)'}}/>
            <Grid container padding={3} rowGap={1}>
                <TextField
                    id="firstname"
                    fullWidth={true}
                    type="text"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                    className={'login-password-input'}
                    placeholder={'نام'}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={passwordIcon} height={25} alt={"password icon"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="lastname"
                    fullWidth={true}
                    type="text"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    className={'login-password-input'}
                    placeholder={'نام خانوادگی'}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={passwordIcon} height={25} alt={"password icon"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <Box marginTop={5} width={"100%"}>
                    <MainButton onClick={fillProfile} disabled={buttonDisable}>
                        {buttonDisable ? <img src={LoadingSpinner} alt={"loading"} />: "تکمیل ثبت نام" }
                    </MainButton>
                </Box>
            </Grid>
        </Box>
    );
}
