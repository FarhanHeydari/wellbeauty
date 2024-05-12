import React from 'react';
import { SimpleNav } from '../component/SimpleNav';
import { Divider, TextField, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Protocols = () => {
    const navigate = useNavigate();
    return (
        <>
            <SimpleNav prevLocation={"/analyze/"}>معرفی پروتوکل ها</SimpleNav>
            <Box sx={{ padding: 3, display: "flex", justifyContent: "center" }}>
                <TextField placeholder='پروتوکول مورد نظر خود را جستجو کنید' variant='outlined' fullWidth sx={{ maxWidth: 300 }} />


            </Box>
            <Divider />
            <Box display="flex" flexWrap="wrap" justifyContent="center" padding={3}>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/ospw")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>OSPW</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>ORPT</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/ospt")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>OSPT</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DRNW</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/osnw")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>OSNW</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/ornt")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>ORNT</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>ORPW</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/dsnt")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DSNT</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DRNT</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/dspw")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DSPW</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DRPW</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/dsnw")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DSNW</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>ORNW</Button>
                <Button variant='outlined' sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DRPT</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/dspt")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>DSPT</Button>
                <Button variant='outlined' onClick={() => navigate("/analyze/protocols/osnt")} sx={{ margin: 2, width: 100, fontWeight: "bold" }}>OSNT</Button>

            </Box>
        </>
    );
};

export default Protocols;