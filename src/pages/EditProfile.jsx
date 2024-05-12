import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {Box, Button, InputAdornment, TextField, } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import axios from "axios";
import {Footer} from "../component/Footer";
import NoAvatar from '../assets/img/fullProfile.png';

export function EditProfile() {
    const [name, setName] = React.useState("");
    const [lastname, setLastName] = React.useState("");
    const [jobTitle, setJobTitle] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [imageFile, setImageFile] = React.useState(null);

    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    };

    React.useEffect(() => {
        const url = "https://nice-gold-oyster-slip.cyclic.app/api/v1/users/getMyProfile"
        // const url = "http://localhost:4000/api/v1/users/getMyProfile"
        axios.get(url, config)
            .then(res => {
                console.log(res.data)
                if (res.data.data['firstname']) {
                    setName(res.data.data['firstname']);
                }
                if (res.data.data['lastname']) {
                    setLastName(res.data.data['lastname']);
                }
                if (res.data.data['jobTitle']) {
                    setJobTitle(res.data.data['jobTitle']);
                }
                if (res.data.data['address']) {
                    setAddress(res.data.data['address']);
                }
                if (res.data.data['email']) {
                    setEmail(res.data.data['email']);
                }
                if (res.data.data['image']) {
                    // setSrc(getBase64Image(res.data.data['image']));
                    setImage(res.data.data['image']);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    const changeProfile = () => {
        const url = "https://nice-gold-oyster-slip.cyclic.appapi/v1/users/updateMyProfile"
        // const url = "http://localhost:4000/api/v1/users/updateMyProfile"
        let bodyFormData = new FormData();
        bodyFormData.append('firstname', name);
        bodyFormData.append('lastname', lastname);
        bodyFormData.append('jobTitle', jobTitle);
        bodyFormData.append('address', address);
        bodyFormData.append('email', email);
        bodyFormData.append('image', imageFile);
        if (name !== "" && lastname !== "") {
            axios.put(url, bodyFormData, config)
                .then(res => {
                    console.log(res.data);
                }).catch(err => {
                console.log(err);
            })
        }
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setImageFile(event.target.files[0]);
            console.log(image)
        }
    }

    return (
        <>
            <SimpleNav prevLocation={"/profile"}>حساب کاربری</SimpleNav>
            <Box display={"flex"} justifyContent={'center'} flexDirection={'column'} paddingX={3} paddingY={5}>
                <Box marginBottom={2} display={"flex"} justifyContent={'space-around'}>
                    <Button
                        variant="contained"
                        component="label"
                        disableElevation
                        sx={{bgcolor: "transparent",borderRadius:10, overflow:"hidden", '&:hover': {
                                    bgcolor: "transparent"}}
                    }
                    >
                        {/*<Typography position={'absolute'} bgcolor={"#606060aa"} bottom={0}>تغییر</Typography>*/}
                        <input
                            type="file"
                            hidden
                            src={imageFile}
                            onChange={onImageChange}
                        />
                        <img height={88} width={88} src={image ? image : NoAvatar} alt={"profile"} style={{borderRadius:"50%"}}/>
                    </Button>

                </Box>

                <TextField
                    id="input-with-icon-name"
                    fullWidth={true}
                    className={'login-phone-input'}
                    placeholder={'نام *'}
                    value={name}
                    sx={{marginBottom: 2}}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <EditIcon color={"primary"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="input-with-icon-last-name"
                    fullWidth={true}
                    className={'login-phone-input'}
                    placeholder={'نام خانوادگی *'}
                    sx={{marginBottom: 2}}
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <EditIcon color={"primary"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="input-with-icon-job"
                    fullWidth={true}
                    className={'login-phone-input'}
                    placeholder={'شفل'}
                    sx={{marginBottom: 2}}
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <WorkIcon color={"primary"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="input-with-icon-email"
                    fullWidth={true}
                    className={'login-phone-input'}
                    placeholder={'ایمیل'}
                    sx={{marginBottom: 2}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <WorkIcon color={"primary"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <TextField
                    id="input-with-icon-address"
                    fullWidth={true}
                    className={'login-phone-input'}
                    placeholder={'آدرس'}
                    sx={{marginBottom: 2, height: 100}}
                    value={address}
                    multiline
                    maxRows={4}
                    onChange={(e) => setAddress(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <HomeIcon color={"primary"}/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
                <Button variant={'contained'} sx={{borderRadius: 2, height: 50, marginBottom: 5}}
                        onClick={changeProfile}>
                    تایید
                </Button>
            </Box>
            <Footer active={4}/>
        </>
    );
}
