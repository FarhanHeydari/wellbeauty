import React from 'react';
import {Nav} from "../component/Nav";
import '../assets/css/login.css';
import LoadingSpinner from '../assets/img/Spinner-1s-44px.gif';
import {
    Alert,
    Box, Button,
    Divider,
    Grid,
    InputAdornment, Snackbar,
    TextField, Typography,
} from "@mui/material";
import {MainButton} from "../component/MainButton";
import loginText from '../assets/img/text6.png';
import phoneLogo from '../assets/img/viber.png';
import passwordIcon from '../assets/img/password.png';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const [serverErrorAlert, setServerErrorAlert] = React.useState(false);
    const [userErrorAlert, setUserErrorAlert] = React.useState(false);
    const [buttonDisable, setButtonDisable] = React.useState(false);

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

    const login = () => {
        setButtonDisable(true);
        axios.post("https://nice-gold-oyster-slip.cyclic.app/api/v1/users/login", {
            "phone": username,
            "password": password
        }).then(r => {

            console.log(r)
            if (r.data['success'] === true) {
                localStorage.setItem("token", r.data['token']);
                localStorage.setItem("id", r.data.user['_id']);
                if (r.data['ticket'])
                    localStorage.setItem("ticket", r.data['ticket']['_id']);

                if (r.data.user['firstname'] && r.data.user['lastname']) {
                    localStorage.setItem("name", r.data.user['firstname'] + " " + r.data.user['lastname']);
                    navigate("/profile");
                } else {
                    navigate("/signup/complete");
                }
            } else {
                setButtonDisable(false);
                console.log(r)
            }
        }).catch(err => {
            setButtonDisable(false);
            console.log(err.response.status)
            if (err.response.status === 401 || err.response.status === 404) {
                handleUserError();
            } else {
                handleServerError();
            }
        });
    };
    return (
        <>
            <Nav/>
            <Box style={{backgroundColor: "#eff3f6"}} height={"calc(100vh - 80px)"}>

                <Divider variant="fullWidth" className={'welcome-nav-divider'}
                         xs={{borderColor: 'rgba(255, 255, 255, 0.12)'}}/>
                <Grid container direction={'column'} alignContent={'center'} marginTop={8} marginBottom={5}
                      textAlign={'center'}>
                    <img src={loginText} height={80} style={{marginBottom: 30}} alt={"login"}/>
                </Grid>
                <Box className={'login-form'} display={'flex'} justifyContent={'center'}>
                    <TextField
                        id="input-with-icon-textfield"
                        fullWidth={true}
                        className={'login-phone-input'}
                        inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                        placeholder={'شماره تلفن همراه'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={phoneLogo} height={25} alt="phone logo"/>
                                </InputAdornment>
                            ),
                        }}
                        variant="filled"
                    />

                    <TextField
                        id="input-with-icon-textfield"
                        fullWidth={true}
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={'login-password-input'}
                        placeholder={'رمز عبور'}
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

                    <Box>

                    </Box>

                    <Box marginTop={3}>
                        <MainButton onClick={login} disabled={buttonDisable}>
                            {buttonDisable ? <img src={LoadingSpinner} alt={"loading"} />: "ورود به پنل کاربری" }
                        </MainButton>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Typography>حساب ندارید؟</Typography>
                            <Button
                                variant={'text'}
                                onClick={() => navigate('/signup')}
                                sx={{fontSize: "1em"}}
                                >
                                ثبت نام کنید
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/*<Box display={'grid'} justifyContent={'center'} marginTop={8}>*/}
                {/*    <img src={version} alt={'ورژن'}/>*/}
                {/*</Box>*/}
                <Snackbar open={serverErrorAlert} autoHideDuration={6000} onClose={handleServerErrorClose}>
                    <Alert onClose={handleServerErrorClose} severity="error" sx={{width: '100%'}}>
                        خطا در لاگین
                    </Alert>
                </Snackbar>
                <Snackbar open={userErrorAlert} autoHideDuration={6000} onClose={handleUserErrorClose}>
                    <Alert onClose={handleUserErrorClose} severity="error" sx={{width: '100%'}}>
                        نام کاربری یا رمز عبور نادرست است
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
}
