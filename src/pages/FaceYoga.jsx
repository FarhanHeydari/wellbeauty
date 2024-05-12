import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { SimpleNav } from "../component/SimpleNav";
import { useNavigate } from "react-router-dom";


const FaceYoga = () => {
    const navigate = useNavigate();
    const style = { margin: ".51rem", width: 130,borderRadius: 3, borderColor: "#6F469533", fontWeight: "bold", height: 50,};
    return (
        <>
            <SimpleNav prevLocation={"/analyze"}>Face Yoga</SimpleNav>
            <Box sx={{ height: '30%', maxHeight: 500 }}>
                <Typography variant="body1" sx={{ color: '#704798', textAlign: 'center', padding: 5, fontWeight: "bold", }}>
                    Face yoga is a series of exercises designed to tone the muscles in the face, promoting a youthful and relaxed appearance
                </Typography>
            </Box>
            <Divider sx={{ margin: '0 10%', }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10, padding: "2rem", flexWrap: "wrap" }}>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/nose")} variant="outlined">یوگای یینی</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/cheek")} variant="outlined">یوگای گونه</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/neck")} variant="outlined">یوگای گردن</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/eye")} variant="outlined">یوگای چشم</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/forehead")} variant="outlined">یوگای پیشانی</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/jawline")} variant="outlined">یوگای خط فک</Button>
                <Button sx={style} onClick={()=>navigate("/analyze/yoga/mouth")} variant="outlined">یوگای دهان</Button>
            </Box>
        </>
    );
};

export default FaceYoga;