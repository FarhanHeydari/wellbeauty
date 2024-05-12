import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box, Paper} from "@mui/material";
import AnalyzeMain from "../assets/img/bottom-nav-icons/analyze_main.png";
import AnalyzeActive from "../assets/img/bottom-nav-icons/analyze_select.png";
import BlogMain from "../assets/img/bottom-nav-icons/blog_main.png";
import BlogActive from "../assets/img/bottom-nav-icons/blog_select.png";
import ProfileMain from "../assets/img/bottom-nav-icons/profile_main.png";
import ProfileActive from "../assets/img/bottom-nav-icons/profile_select.png";
import ReserveMain from '../assets/img/bottom-nav-icons/reserve_main.png';
import ReserveActive from '../assets/img/bottom-nav-icons/reserve_select.png';
import ShopMain from '../assets/img/bottom-nav-icons/shop_main.png';
import ShopActive from '../assets/img/bottom-nav-icons/shop_select.png';
import {useNavigate} from "react-router-dom";
import '../assets/css/footer.css';

const selectedStyle = {borderBottom: "2px solid #663c8f", fontSize: "0.675rem !important"};
const style =
    {
        "& .MuiBottomNavigationAction-label":
            {
                fontSize: 11,
                width: "100%",
                paddingBottom: 1,
            }
        ,
        "&	.Mui-selected": selectedStyle,
        justifyContent: "flex-end",
        margin: 0,
        padding: 0,
        minWidth:40,
    };

export function Footer({active}) {
    const navigate = useNavigate();
    return (

        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: "env(safe-area-inset-bottom)", zIndex: 1000}}
               elevation={3}>
            <BottomNavigation
                showLabels
                value={active}
                sx={{bgcolor: "#ebeff2", height: 72,paddingX:1}}
                onChange={(event, newValue) => {
                    switch (newValue) {
                        case 0:
                            navigate('/shop')
                            break;
                        case 1:
                            navigate('/appointment')
                            break;
                        case 2:
                            navigate('/analyze');
                            break;
                        case 3:
                            navigate('/forum')
                            break;
                        case 4:
                            navigate('/profile')
                            break;
                        default:
                            navigate('/profile')
                            break;
                    }

                }}
            >
                <BottomNavigationAction sx={style}
                                        className={'footer-buttons'}
                                        label="فروشگاه"
                                        icon={(active === 0) ? <img height={28} src={ShopActive} alt={"logo"}/> :
                                            <img height={28} src={ShopMain}/>} alt={"logo"}/>
                <BottomNavigationAction sx={style}
                                        className={'footer-buttons'}
                                        label="نوبت دهی"
                                        icon={(active === 1) ? <img height={28} src={ReserveActive} alt={"logo"}/> :
                                            <img height={28} src={ReserveMain}/>}/>
                <BottomNavigationAction sx={style}
                                        className={'footer-buttons'}
                                        label="آنالیز و ارزیابی"
                                        icon={(active === 2) ? <img height={28} src={AnalyzeActive} alt={"logo"}/> :
                                            <img height={28} src={AnalyzeMain}/>} alt={"logo"}/>
                <BottomNavigationAction sx={style}
                                        className={'footer-buttons'}
                                        label="انجمن بیوتی"
                                        icon={(active === 3) ? <img height={28} src={BlogActive} alt={"logo"}/> :
                                            <img height={28} src={BlogMain}/>} alt={"logo"}/>

                <BottomNavigationAction sx={style}
                                        className={'footer-buttons'}
                                        label="پروفایل"
                                        icon={(active === 4) ? <img height={28} src={ProfileActive} alt={"logo"}/> :
                                            <img height={28} src={ProfileMain}/>} alt={"logo"}/>


            </BottomNavigation>
        </Paper>
    );
}