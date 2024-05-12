import React, {useEffect} from 'react';
import axios from "axios";
import persianDate from "persian-date";
import {Backdrop, Box, Button, Divider, Fade, Grid, Modal, Typography} from "@mui/material";
import {SimpleNav} from "../component/SimpleNav";
import {Footer} from "../component/Footer";
import '../assets/css/profile.css';
import {useNavigate} from "react-router-dom";
import RoleIcon from '../assets/img/Tag.png';
import WBIcon from '../assets/img/IdCard.png'
import SignupDateIcon from '../assets/img/Privacy2.png';
import AccountIcon from '../assets/img/Privacy.png';
import SubscriptionIcon from '../assets/img/Subscribe.png';
import ReservationIcon from '../assets/img/Calender.png';
import GuideIcon from '../assets/img/Help.png';
import ExitIcon from '../assets/img/PowerOff.png';
import NoAvatar from '../assets/img/fullProfile.png';
import Diamond from "../assets/img/diamond(1).png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    padding: 0,
    bgcolor: 'background.paper',
    border: '1px solid #00000018',
    boxShadow: 24,
    p: 4,
};

export const Profile = (effect, deps) => {
        const navigate = useNavigate();
        const [userType, setUserType] = React.useState("");
        const [dateRegistered, setDateRegistered] = React.useState("");
        const [open, setOpen] = React.useState(false);
        const [subscriptionOpen, setSubscriptionOpen] = React.useState(false);
        const [WB, setWB] = React.useState("");
        const [image, setImage] = React.useState(NoAvatar);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const logout = () => {
            localStorage.clear();
            navigate('/login');
        }

        useEffect(() => {
            if (localStorage.getItem("id") != null) {
                axios.get("https://nice-gold-oyster-slip.cyclic.appapi/v1/users/getMyProfile", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                }).then(r => {
                    console.log(r.data);
                    setUserType(r.data.data['userType'] === "user" ? "مراجعه کننده" : "متخصص زیبایی");
                    setDateRegistered(new persianDate(r.data.data['dateCreated']).format("D MMMM YYYY"));
                    setWB(r.data.data['_id'].slice(0, 6));
                    if (r.data.data['image']) {
                        setImage(r.data.data['image']);
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }, [])


        return (
            <Box>
                <SimpleNav>پروفایل</SimpleNav>
                <Grid container direction={"column"} paddingX={3} alignContent={'baseline'} sx={{
                    display: "grid",
                    overflow: "scroll",
                    height: "calc(100vh - 129px)",
                    "-webkit-overflow-scrolling": "touch",
                    WebkitOverflowScrolling: "touch",
                }}>

                    <Grid item display={'flex'} justifyContent={'space-between'} paddingY={4}>
                        <Box display={'flex'} alignItems={'center'}>
                            <img src={image && NoAvatar} alt={'profile'} height={55} width={55} style={{borderRadius: "50%"}}/>
                            <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} paddingX={2}>
                                {localStorage.getItem('name')}
                            </Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography
                                fontWeight={'bold'}
                                color={"rgba(95,51,137,1)"}
                                paddingRight={.5}
                                fontFamily={"sans-serif"}
                                position={'relative'}
                                top={1}
                            >
                                WB-{WB}
                            </Typography>

                            <img src={WBIcon} alt={"wb"} height={25} width={25}/>
                        </Box>
                    </Grid>
                    <Grid item display={'flex'} justifyContent={'space-between'} marginBottom={.5}>
                        <Box display={"flex"}>
                            <img src={RoleIcon} alt="role" width={18} height={18} className='role-icon'/>
                            <Typography color={"#98999D"} fontSize={12}>{userType}</Typography>
                        </Box>
                        <Box display={"flex"}>
                            <img src={SignupDateIcon} alt="role" width={18} height={18} className='role-icon'/>
                            <Typography color={"#98999D"} fontSize={12}>
                                ثبت نام در تاریخ {dateRegistered}
                            </Typography>
                        </Box>
                    </Grid>
                    <Divider/>
                    <Grid item container display={'grid'} marginY={2}>
                        <Button variant={'text'} sx={{justifyContent: "flex-start", padding: 0}}
                                onClick={() => navigate('/profile/edit')}>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                                <img src={AccountIcon} alt="account" width={18} height={18}/>
                                <Box marginLeft={2}>
                                    <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} variant={'body1'}
                                                position={'relative'} top={5} fontSize={14} textAlign={"start"}>
                                        حساب کاربری
                                    </Typography>
                                    <Typography color={"#98999D"} variant={'subtitle2'} fontSize={11} position={'relative'}
                                                bottom={5}>
                                        حریم
                                        خصوصی، امنیت، تغییر شماره</Typography>
                                </Box>
                            </Box>
                        </Button>
                        <Button variant={'text'} sx={{justifyContent: "flex-start", padding: 0}}
                                onClick={() => setSubscriptionOpen(true)}>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={SubscriptionIcon} alt="account" width={18} height={18}/>
                                <Box marginLeft={2}>
                                    <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} fontSize={13}
                                                variant={'body1'} position={'relative'} top={5} textAlign={'start'}>
                                        اشتراک ویژه
                                    </Typography>
                                    <Typography color={"#98999D"} variant={'subtitle2'} fontSize={11} position={'relative'}
                                                bottom={5}>آنالیز
                                        ارزیابی و ارتباط با متخصصان</Typography>
                                </Box>
                            </Box>
                        </Button>
                        <Button variant={'text'} sx={{justifyContent: "flex-start", padding: 0}}
                                onClick={() => navigate('/profile/appointments')}>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={ReservationIcon} alt="account" width={18} height={18}/>
                                <Box marginLeft={2} textAlign={'initial'}>
                                    <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} variant={'body1'}
                                                position={'relative'} top={5} fontSize={13}
                                    > نوبت های شما</Typography>
                                    <Typography color={"#98999D"} variant={'subtitle2'} position={'relative'} fontSize={11}
                                                bottom={5}>
                                        ثبت،
                                        ویرایش و حذف نوبت ها</Typography>
                                </Box>
                            </Box>
                        </Button>
                        <Button variant={'text'} sx={{justifyContent: "flex-start", padding: 0}}
                                onClick={() => navigate('/profile/lang')}>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={ReservationIcon} alt="account" width={18} height={18}/>
                                <Box marginLeft={2}>
                                    <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} variant={'body1'}
                                                position={'relative'} top={5} fontSize={13} textAlign={'start'}
                                    >زبان برنامه</Typography>
                                    <Typography color={"#98999D"} variant={'subtitle2'} fontSize={11} position={'relative'}
                                                bottom={5}>فارسی
                                        (پیش فرض)</Typography>
                                </Box>
                            </Box>
                        </Button>
                        <Button variant={'text'} sx={{justifyContent: "flex-start", padding: 0}}
                                onClick={() => navigate('/profile/guide')}>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={GuideIcon} alt="account" width={18} height={18}/>
                                <Box marginLeft={2} justifyContent={'flex-start'}>
                                    <Typography fontWeight={'bold'} color={"rgba(95,51,137,1)"} textAlign={'initial'}
                                                variant={'body1'} position={'relative'} top={5} fontSize={13}>
                                        راهنما
                                    </Typography>
                                    <Typography color={"#98999D"} fontSize={13} variant={'subtitle2'} position={'relative'}
                                                bottom={5}>بخش
                                        راهنما، تماس با ما و حریم خصوصی</Typography>
                                </Box>
                            </Box>
                        </Button>
                    </Grid>
                    <Divider/>
                    <Grid item display={'flex'} marginY={2}>
                        <Button variant={'text'} onClick={handleOpen} sx={{padding: 0}}>
                            <img
                                src={ExitIcon}
                                alt="account"
                                width={20} height={20}
                                className={"exit-icon"}/>
                            <Typography variant={'body1'} color={'error'} fontWeight={'bold'} fontSize={14}>
                                خروج از حساب کاربری
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Footer active={4}/>
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        "& > .MuiBackdrop-root": {
                            backdropFilter: "blur(3px)",
                            width: "121%    ",
                            height: "112vh",
                            bgcolor: 'rgba(134, 134, 134, 0.5)',
                        }
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    closeAfterTransition
                    slots={{backdrop: Backdrop}}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style} className={'modal'} display={'flex'} justifyContent={'center'}
                             flexDirection={'column'}>
                            <Typography id="modal-modal-title" fontSize={"1em"} textAlign={'center'}>
                                از خروج اطمینان دارید؟
                            </Typography>
                            <Divider sx={{marginTop: 2, marginBottom: .5}}/>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Button sx={{fontSize: "1em", width: "50%"}} variant={'text'}
                                        onClick={handleClose}>بازگشت</Button>
                                <Button sx={{fontSize: "1em", width: "50%"}} color={'error'} variant={'text'}
                                        onClick={logout}>خروج</Button>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
                <Modal
                    open={subscriptionOpen}
                    onClose={() => setSubscriptionOpen(false)}
                    sx={{
                        "& > .MuiBackdrop-root": {
                            backdropFilter: "blur(3px)",
                            width: "121%    ",
                            height: "112vh",
                            bgcolor: 'rgba(134, 134, 134, 0.5)',
                        }
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    closeAfterTransition
                    slots={{backdrop: Backdrop}}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={subscriptionOpen}>
                        <Box sx={style} className={'modal'}>
                            <Typography id="modal-modal-title" fontSize={"1em"} textAlign={'center'} color={"primary"}>
                                اشتراک ویژه
                            </Typography>
                            <Divider sx={{marginTop: 1}}/>
                            <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                                <img
                                    style={{margin: "0 auto"}}
                                    src={Diamond}
                                    alt="diamond"
                                    width={50} height={50}
                                />
                            </Box>

                            <Typography id="modal-modal-description" sx={{paddingX: 1, textAlignLast: 'center'}}
                                        textAlign={'justify'} fontSize={"1em"} fontWeight={'bold'}>
                                شما اشتراک ویژه‌ای ندارید
                            </Typography>
                            <Divider sx={{marginTop: 1}}/>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Button sx={{fontSize: "1em", width: "100%"}} variant={'text'}
                                        onClick={() => setSubscriptionOpen(false)}>بازگشت</Button>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </Box>


        );
    }
;
