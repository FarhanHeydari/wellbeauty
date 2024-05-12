import { Typography, TextField, Box, Tabs, Tab, Button } from '@mui/material';
import React, { useState } from 'react';
import { SimpleNav } from '../../component/SimpleNav';
import { useNavigate } from 'react-router-dom';

const style = { fontWeight: "bold", borderRadius: 6, height: 40, '&.Mui-selected': { backgroundColor: '#704798', color: "#fff", } };

function OSNW() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <SimpleNav prevLocation={"/analyze/protocols"}>OSNW</SimpleNav>
            <Box padding={3}>
                <Typography variant="h5" sx={{ color: '#704798', fontWeight: "bold", }}>جستجو</Typography>
                <TextField placeholder='پروتوکول مورد نظر خود را جستجو کنید' variant='outlined' fullWidth sx={{ maxWidth: 300 }} />
            </Box>
            <Box paddingX={3}>
                <Tabs value={value} onChange={handleChange} aria-label="">
                    <Tab label="پروتوکول ها" sx={style} />
                    <Tab label="محصولات" sx={style} />
                    <Tab label="اطلاعات صفحه" sx={style} />
                </Tabs>
            </Box>
            {value === 0 && <Box p={3} display="flex" justifyContent="center">
                <Button variant='text' fullWidth onClick={()=>navigate('/analyze/protocols/osnw/treatment')} sx={{
                    border: "1px solid lightgray",
                    padding: 2,
                    maxWidth: 350,
                    borderRadius: "0px 16px 0 16px",
                    display: "flex", flexDirection: "column", alignItems: "baseline"
                }}>
                    <p color='#704798'>Treatment</p>
                    <p style={{ fontSize: "1.5rem", color: "#000" }}>OSNW</p>
                </Button>
            </Box>}
            {value === 1 && <Box p={3}>به زودی</Box>}
            {value === 2 && <Box p={3}>به زودی</Box>}

        </>

    );
}

export default OSNW;