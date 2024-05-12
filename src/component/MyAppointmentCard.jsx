import React from 'react';
import {Box, Typography, Button} from "@mui/material";
import checkedAppointment from "../assets/img/CheckedAppointment.png";
import CancelAppointment from "../assets/img/CancelAppointment.png";
import RegisteredAppointment from '../assets/img/RegisteredAppointment.png';
import axios from 'axios';
import persianDate from "persian-date";

const getName = name => {
    switch (name) {
        case 'antiBlemishPackage':
            return "پکیج ضدلک";
        case 'eyeHealingPackage':
            return "پکیج درمان دورچشم";
        case 'pollogenTherapy':
            return "پلاژن تراپی";
        case 'carboxyTherapy':
            return "کربوکسی تراپی";
        case 'fatControlPackage':
            return "پکیج کنترل چربی";
        case 'poresHealingPackage':
            return "پکیج درمان جوش";
        case 'facial':
            return "فیشال";
        case 'caviarTherapyBotox':
            return "بوتاکس خاویارتراپی";
        case 'mesoNeedlingPackage':
            return "پکیج مزونیدلینگ";
        case 'laserTherapy':
            return "لیزرتراپی";
        case 'RFFractional':
            return "آر اف فرکشنال";
        case 'mesoTherapy':
            return "مزوتراپی";
        default:
            return 'unknown';
    }

};

const MyAppointmentCard = (props) => {

    const cancellApp = () => {
        // const url =`http://localhost:4000/api/v1/appointments/${props.id}`;
        const url =`https://nice-gold-oyster-slip.cyclic.appapi/v1/users/${props.id}`;
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }
        const data = {status: 'cancelled'};
        axios.put(url, data ,config).then(res => {
            window.location.reload(false);
        })
    };

    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingX={2}
            paddingY={0.5}
            border={'1px solid #cccfd2'}
            borderRadius={3}
            bgcolor={"#ebeff2"}
            marginBottom={1}
        >
            <Box display={'flex'} alignItems={'center'}>
                <img src={(props.type==="completed")?checkedAppointment:RegisteredAppointment} alt="انجام شده" height={20}/>
                <Box marginLeft={2}>
                    <Typography position={'relative'} top={5} lineHeight={1}
                                style={{wordWrap: "break-word"}} color={
                        (props.type==="pending")? "#6f4697": (props.type==="completed") ? "#219221":  "#f0212b"
                    } fontSize={15}>
                        {props.procedures.map((procedure, index) => (
                            getName(procedure)
                        ))}
                    </Typography>
                    <Typography position={'relative'} bottom={5} fontSize={12} color={"#40404088"}
                                whiteSpace={"nowrap"}>
                        {new persianDate(props.date).format("dddd D MMMM")}
                    </Typography>
                </Box>
            </Box>
            <Button sx={{padding:0, display:"flex", justifyContent:"right"  }} variant={'text'} onClick={cancellApp}>
                <Box display={'flex'} alignItems={'center'}>

                    <img src={CancelAppointment} alt="انجام شده" height={10}/>
                    <Typography paddingLeft={1} fontSize={14} color={"#f0212b"}>

                        {
                        (props.type === "pending") ? "لفو" : (props.type === "cancelled") ?"لفو شده": "تکمیل شده"
                    }
                    </Typography>
                </Box>
            </Button>

        </Box>
    );
};

export default MyAppointmentCard;