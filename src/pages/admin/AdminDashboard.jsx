import React from 'react';
import {AdminBox} from "../../component/AdminBox";
import {Box, Button, Typography} from "@mui/material";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {useNavigate} from "react-router-dom";

export function AdminDashboard() {
    const navigate= useNavigate();
    return (
        <AdminBox>
            <Box display={"grid"} gap={1} gridColumns={'2fr'}>
                <Button onClick={()=>navigate('/admin/user-list')}>
                    <Box width={100} justifyContent={'center'} display={'flex'} flexDirection={"column"}
                         justifyItems={'center'} borderRadius={2}
                         sx={{background: "linear-gradient(306deg, rgba(240,213,255,1) 0%, rgba(205,205,205,1) 100%)"}}>
                        <PeopleAltOutlinedIcon sx={{fontSize: 40, margin: "0 auto"}}/>
                        <Typography textAlign={'center'} fontSize={12}>لیست کاربران</Typography>
                    </Box>
                </Button>
                <Button onClick={()=>navigate('/admin/appointments')}>
                <Box width={100} justifyContent={'center'} display={'flex'} flexDirection={"column"}
                     justifyItems={'center'} borderRadius={2}
                     sx={{background: "linear-gradient(306deg, rgba(240,213,255,1) 0%, rgba(205,205,205,1) 100%)"}}>
                    <CalendarMonthOutlinedIcon sx={{fontSize: 40, margin: "0 auto"}}/>
                    <Typography textAlign={'center'} fontSize={12}>لیست نوبت ها</Typography>
                </Box>
                </Button>
                <Box width={100} justifyContent={'center'} display={'flex'} flexDirection={"column"}
                     justifyItems={'center'} borderRadius={2}
                     sx={{background: "linear-gradient(306deg, rgba(240,213,255,1) 0%, rgba(205,205,205,1) 100%)"}}>
                    <PeopleAltOutlinedIcon sx={{fontSize: 40, margin: "0 auto"}}/>
                    <Typography textAlign={'center'} fontSize={12}>لیست کاربران</Typography>
                </Box>
            </Box>
        </AdminBox>
    );
}
