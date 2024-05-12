import React from 'react';
import {Alert, Box, Button, Snackbar, TextField} from "@mui/material";
import {AdminBackground} from "../../component/AdminBackground";
import {AdminBox} from "../../component/AdminBox";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function AdminLogin(props) {
    const [password, setPassword] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [disabled, setDisabled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const navigate = useNavigate();
    const login = () => {
        setDisabled(true);
        axios.post("https://nice-gold-oyster-slip.cyclic.app/api/v1/users/login", {
            "phone": phoneNumber,
            "password": password
        }).then(r => {
            console.log(r)
            if (r.data['success'] === true) {
                if (r.data['user']['userType'] === 'admin') {
                    console.log('success')
                    localStorage.setItem("id", r.data.user['_id']);
                    navigate("/admin/dashboard");
                    setDisabled(false);
                } else {
                    handleOpen();
                }
            } else {
                console.log(r)
                handleOpen();
                setDisabled(false);
            }
        }).catch(reason => {
            console.log(reason)
            handleOpen();
            setDisabled(false);
        });
    };

    return (
        <Box>
            <AdminBackground/>
            <AdminBox>
                <TextField id="phone" label="نام کابری" variant="standard" value={phoneNumber}
                           onChange={e => setPhoneNumber(e.target.value)}/>
                <TextField id="password" label="رمزعبور" variant="standard" type={'password'} value={password}
                           onChange={e => setPassword(e.target.value)}/>
                <Button variant={'contained'} sx={{marginTop: 2}} onClick={login} disabled={disabled}>
                    ورود
                </Button>
            </AdminBox>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    خطا در ورود
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default AdminLogin;
