import {Button} from "@mui/material";
import React from "react";
import '../assets/css/main-button-style.css';



export function MainButton(props) {
    return(
        <Button size="lg" variant={'contained'} fullWidth={true} className={'main-button'} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </Button>
    );
}


