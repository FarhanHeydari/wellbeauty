import React from 'react';
import {AppBar, Typography, Box, Button,} from "@mui/material";
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {useNavigate} from "react-router-dom";

export const SimpleNav = props => {
    const navigate = useNavigate();
    return (
        <AppBar color='background' elevation={0}
                position={'relative'}
                sx={{
                    padding: "6px 10px", display: 'flex', justifyContent: "space-between", alignItems: 'center',
                    flexDirection: "row", height: 60,
                    borderBottom: "1px solid #00000015"
                }}>
            <Box width={64} >
                {props.prevLocation &&
                    <Button onClick={() => navigate(props.prevLocation)} sx={{justifyContent:"start"}}>
                        <ChevronRightTwoToneIcon />
                    </Button>
                }
            </Box>
            <Box sx={{
                padding: "6px 30px",
                background: "#ecedf2",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
            }}>
                <Typography color='primary' fontWeight={'bold'} fontSize={13}
                >{props.children}
                </Typography>
            </Box>
            <Box width={64}>
                {/*<img src={Diamond}  height={30}/>*/}
            </Box>
        </AppBar>
    );
};
