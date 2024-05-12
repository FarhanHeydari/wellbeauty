import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {Box, Divider, Typography, Grid} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {ForumCard} from "../component/ForumCard";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import {Footer} from "../component/Footer";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Man1 from '../assets/img/man1.jpeg';
import Man2 from '../assets/img/man2.jpeg';
import Man3 from '../assets/img/man3.jpeg';

export function Forum(props) {
    return (
        <>
            <SimpleNav>انجمن ول‌بیوتی</SimpleNav>
            <Box display={'grid'} paddingX={3} paddingY={1}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box marginTop={1}>
                        <Typography variant={'body1'} color={'primary'} fontSize={".9em"} fontWeight={'bold'} sx={{position:"relative", top:2}}>پرسش جدیدی
                            را میان هزاران
                            کاربر مطرح کنید</Typography>
                        <Typography variant={'subtitle1'} color={"#646464"} fontSize={".8em"} sx={{position:"relative", bottom:2}}>با هزاران کاربر مرکز ولنس
                            در ارتباط باشید</Typography>
                    </Box>
                    <KeyboardDoubleArrowLeftIcon sx={{marginTop:1}}/>
                </Box>
                <Divider sx={{marginTop:2}}/>
                <Box display={'flex'} justifyContent={'flex-end'} marginY={2}>
                    <SortByAlphaIcon sx={{marginLeft:1}}/>
                    <SearchIcon sx={{marginLeft:1}}/>
                    <SortIcon sx={{marginLeft:1}}/>
                </Box>
                <Grid container justifyContent={'center'} marginBottom={10}>
                    <ForumCard
                        image={Man1}
                        content={"نتایج نهایی جراحی چانه ممکن است در ابتدا توسط تورم مشخص نباشد. طبابت و جراحی علم عینی نیست.\n" +
                            "اگرچه نتایج خوبی انتظار می رود، اما هیچ تضمینی وجود ندارد. ‌"} time={"ساعاتی پیش"}
                        name={"عرفان بازگیر"}/>
                    <ForumCard
                        image={Man2}
                        content={"عمل ترمیم شکاف لب و کام برای اصلاح رشد غیر طبیعی لب و کام و همچنین بازگرداندن عملکرد به این نواحی انجام می شود؛ طی این عمل جراحی لب و دهان ظاهر طبیعی تری به خود می گیرند. "}
                        time={" هفته پیش"} name={"سهیل بازگیر"}/>
                    <ForumCard
                        image={Man3}
                        content={"و انتهای این قصه سرد و سفید\n" +
                        "همیشه سبز خواهد بود🍃\n" +
                        "نوروز،بر همه ی ایرانیان خجسته باد✨"} time={"ماه پیش"} name={"مهرآس برزگر"}/>
                </Grid>
            </Box>
            <Footer active={3}/>
        </>
    );
}
