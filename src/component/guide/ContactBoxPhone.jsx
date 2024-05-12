import React from 'react';
import {Box, Typography} from "@mui/material";

function ContactBoxPhone(props) {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            bgcolor={"#ebeff2"}
            border={"1px solid #d2cde1"}
            borderRadius={5}
            paddingX={2}
            height={62}
            marginBottom={2}>
            {props.icon}
            <Box marginX={2}>
                <Typography fontWeight={'bold'} color={"#213862"} textAlign={'start'}
                            sx={{position: 'relative', top: 4}}>
                    {props.title}
                </Typography>
                <Typography fontSize={14} textAlign={'start'} sx={{position: 'relative', bottom: 4}}>
                    {props.phone}
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactBoxPhone;