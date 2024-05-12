import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {Footer} from "../component/Footer";
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

export function SwitchLang() {
    return (
        <>
            <SimpleNav prevLocation={"/profile"}>زبان برنامه</SimpleNav>
                <Box paddingX={2} paddingY={5}>
                    <FormControl sx={{width:"100%"}}>
                        <FormLabel sx={{textAlign:"center", width:"100%"}} id="demo-radio-buttons-group-label">
                            زبان مورد نظر خود را انتخاب کنید
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="persian"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="persian" control={<Radio />} label="فارسی" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            <Footer active={5} />
        </>
    );
}
