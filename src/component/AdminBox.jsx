import React from 'react';
import {Box} from "@mui/material";
import {AdminBackground} from "./AdminBackground";

export function AdminBox(props) {
    const targetRef = React.useRef();
    const [dimensions, setDimensions] = React.useState({width: 0, height: 0});
    React.useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, [targetRef.current]);
    return (
        <Box>
            <AdminBackground/>
            <Box ref={targetRef}
                 position={'absolute'}
                 top={"20%"}
                 left={props.width ? `calc(50vw - ${props.width}px )`  : `calc(50vw - ${dimensions.width / 2}px )`}
                 bgcolor={'#ffffff66'} padding={2} borderRadius={2} boxShadow={"0 0 4px white"} display={'flex'}
                 flexDirection={'column'}>
                {props.children}
            </Box>
        </Box>
    );
}
