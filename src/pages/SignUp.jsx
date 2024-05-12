import React from 'react';
import {
    Box, Button,
    Checkbox,
    Divider, FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputAdornment,
    RadioGroup,
    Radio,
    TextField, Typography, Snackbar, Alert,
} from "@mui/material";
import {Nav} from '../component/Nav';
import '../assets/css/signup.css';
import LoadingSpinner from '../assets/img/Spinner-1s-44px.gif';
import signupText from '../assets/img/text5.png';
import phoneLogo from '../assets/img/viber.png';
import passwordLogo from '../assets/img/password.png';
import {MainButton} from "../component/MainButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export function SignUp() {
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const [userType, setUserType] = React.useState("user");
    const [acceptTerms, setAcceptTerms] = React.useState("false");
    const [serverErrorAlert, setServerErrorAlert] = React.useState(false);
    const [userErrorAlert, setUserErrorAlert] = React.useState(false);
    const navigate = useNavigate();

    const handleServerError = () => {
        setServerErrorAlert(true);
    };
    const handleServerErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setServerErrorAlert(false);
    }

    const handleUserError = () => {
        setServerErrorAlert(true);
    };
    const handleUserErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setUserErrorAlert(false);
    };

    const handleChange = (event) => {
        setUserType(event.target.value);
    };


    const signup = () => {
        if(acceptTerms && password === rePassword){
            setButtonDisable(true);
            axios.post(
                'https://nice-gold-oyster-slip.cyclic.app/api/v1/users/signup',
                {
                    "phone": phone,
                    "password": password,
                    "userType": userType
                }
            ).then(r => {
                localStorage.setItem("token", r.data['token']);
                navigate("/signup/complete");
            }).catch(e => {
                console.log(e);
                setButtonDisable(false)
                if(e.response.status === 409) {
                    setUserErrorAlert(true)
                } else {
                    handleServerError(true);
                }
            })
        }
    }
    return (
        <Box>
            <Nav/>
            <Divider variant="fullWidth" className={'welcome-nav-divider'}
                     xs={{borderColor: 'rgba(255, 255, 255, 0.12)'}}/>
            <Grid container direction={'column'} alignContent={'center'} className={'welcome-header'} marginTop={3}>
                <img src={signupText} alt={'عضویت'} className={'signup-text'}/>
            </Grid>
            <Box display={'grid'} className={'signup-form'}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder={'شماره تلفن همراه'}
                    sx={{marginBottom: 2}}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={'welcome-phone-input'}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={phoneLogo} height={25} alt={"phone logo"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <Divider variant="fullWidth" sx={{marginBottom: 2}}/>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder={'رمز عبور'}
                    value={password}
                    type={'password'}
                    onChange={e => setPassword(e.target.value)}
                    sx={{marginBottom: 2}}
                    className={'welcome-password-input'}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start" sx={{"marginTop": 0}}>
                                <img src={passwordLogo} height={25} alt={"password logo"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="input-with-icon-textfield"
                    placeholder={'ثبت رمز عبور'}
                    value={rePassword}
                    type={'password'}
                    onChange={e => setRePassword(e.target.value)}
                    className={'welcome-repassword-input'}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={passwordLogo} height={25} alt={"password logo"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <Divider variant="fullWidth" sx={{marginBottom: 2, marginTop:2}}/>
                <Box marginTop={2}>
                    <Grid container>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={userType}
                            onChange={handleChange}
                        >
                        <Grid item xs={12} display={'flex'}>

                            <Radio value="user" name="radio-buttons"/>
                            <div>
                                <FormLabel style={{fontSize: "1.0em", fontWeight: "bold"}}>کاربران عادی</FormLabel>
                                <FormHelperText style={{fontSize: ".7em"}}> مراجعه کنندگان و
                                    هنرجویان</FormHelperText>
                            </div>
                        </Grid>
                        <Grid item xs={12} display={'flex'}>
                            <Radio value="specialist" name="radio-buttons"/>
                            <div>
                                <FormLabel style={{fontSize: "1.0em", fontWeight: "bold"}}>متخصص زیبایی</FormLabel>
                                <FormHelperText style={{fontSize: ".7em"}}> مدرسی و اسکین کر های زیبایی</FormHelperText>
                            </div>
                        </Grid>
                        </RadioGroup>
                    </Grid>
                </Box>
                <Divider variant="fullWidth" sx={{marginBottom: 2, marginTop:2}}/>
                <Box>
                    <FormControlLabel

                        control={
                            <Checkbox
                                name="TermsAndConditions"
                                checked={acceptTerms}
                                onChange={e => setAcceptTerms(e.target.checked)}
                            />
                        }

                        sx={{fontSize:"0.95rem"}}
                        label={"کلیه قوانین و مقررات را خواندم و آن ها را می پذیرم"}/>


                </Box>
                <Box display={'flex'} justifyContent={'center'} marginTop={1.5}>
                    <MainButton size="lg" variant={'contained'} fullWidth={true} className={'signup-button'}
                                onClick={signup}
                                disabled={buttonDisable}>

                        {buttonDisable? <img src={LoadingSpinner} alt={"loading"} />: " ثبت‌نام" }
                    </MainButton>

                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography>حساب دارید؟</Typography>
                    <Button
                        variant={'text'}
                        onClick={() => navigate('/login')}
                        sx={{fontSize:"1em"}}>
                        وارد شوید
                    </Button>
                </Box>
            </Box>
            <Snackbar open={serverErrorAlert} autoHideDuration={6000} onClose={handleServerErrorClose}>
                <Alert onClose={handleServerErrorClose} severity="error" sx={{width: '100%'}}>
                    خطا در ثبت نام
                </Alert>
            </Snackbar>
            <Snackbar open={userErrorAlert} autoHideDuration={6000} onClose={handleUserErrorClose}>
                <Alert onClose={handleUserErrorClose} severity="error" sx={{width: '100%'}}>
                    نام کاربری وجود دارد
                </Alert>
            </Snackbar>
        </Box>
    );
}
