import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { SimpleNav } from "../component/SimpleNav";
import { ReactComponent as Ubuntu } from '../../src/assets/img/linux-ubuntu-icon.svg';
import { ReactComponent as Question } from '../../src/assets/img/question-mark-circle-icon.svg';
import { ReactComponent as Nutrition } from '../../src/assets/img/nutrition-protein-icon.svg';
import { ReactComponent as Night } from '../../src/assets/img/night-icon.svg';
import { ReactComponent as Query } from '../../src/assets/img/query-icon.svg';
import { ReactComponent as Spa } from '../../src/assets/img/flower-spa-icon.svg';
import { ReactComponent as Quality } from '../../src/assets/img/quality-badge-star-icon.svg';
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/Footer";

import { Divider } from '@mui/material';

const AnalyzeQuizes = () => {
    const navigate = useNavigate();
    const ButtonStyle = { width: 170, fontWeight: "bold", borderRadius: 3, height: 50, borderColor: "#6F469533", margin: 1, display: "flex", justifyContent: "flex-start" };
    return (
        <>
            <SimpleNav prevLocation={"/profile"}>آنالیز و ارزیابی</SimpleNav>
            <Box sx={{ height: '30%', maxHeight: 500 }}>
                <Typography variant="body1" sx={{ color: '#704798', textAlign: 'center', padding: 5, fontWeight: "bold", }}>
                    Use all tips, recipes and other features of the application for your health
                </Typography>
            </Box>
            <Divider variant='middle' />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', flexWrap: "wrap", marginTop: 3, flex: "1 0 50%" }}
            >
                <Button variant="outlined" sx={ButtonStyle} onClick={() => navigate('/analyze/quiz/skin')}>
                    <Ubuntu style={{ width: 30, marginLeft: 10, color: "#6F4695" }} />
                    آنالیز نوع پوست
                </Button>
                <Button variant="outlined" sx={ButtonStyle} onClick={() => navigate('/analyze/protocols')}>
                    <Question style={{ width: 30, marginLeft: 10, color: "#6F4695" }} />
                    معرفی پروتوکل ها
                </Button>
                <Button onClick={() => navigate('/analyze/quiz/nutrition')} variant="outlined" sx={ButtonStyle} >
                    <Nutrition style={{ width: 30, marginLeft: 10, color: "#6F4695", }} />
                    تفذیه
                </Button>
                <Button onClick={() => navigate('/analyze/quiz/sleep')} variant="outlined" sx={ButtonStyle} >
                    <Night style={{ width: 30, marginLeft: 10, color: "#6F4695", }} />
                    خواب
                </Button>
                <Button
                    onClick={() => navigate('/analyze/counseling')}
                    variant="outlined"
                    sx={ButtonStyle} >
                    <Query style={{ width: 30, marginLeft: 10, color: "#6F4695", }} />
                    مشاوره آنلاین
                </Button>
                <Button onClick={() => navigate('/analyze/yoga')} variant="outlined" sx={ButtonStyle} >
                    <Spa style={{ width: 30, marginLeft: 10, color: "#6F4695", }} />
                    یوگا صورت
                </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" marginTop={15} >
                <Quality style={{ width: 30, marginLeft: 10, color: "#BEC2C5", }} />
                <Typography variant="body1" sx={{ color: '#BEC2C5', textAlign: 'center', width: 240 }}>
                    Tell us about your goals and get an individual programm
                </Typography>
            </Box>
            <Footer active={2} />
        </>
    );
};

export default AnalyzeQuizes;
