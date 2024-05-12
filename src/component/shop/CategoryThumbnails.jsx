import React from 'react';
import {Box, Typography} from "@mui/material";
import SkinCare from "../../assets/img/shampoo.png";
import HairCare from "../../assets/img/treatment.png";
import BeautyMask from "../../assets/img/facial-mask.png";
import HealthTool from "../../assets/img/hair-dye.png";

export function CategoryThumbnails(props) {
    return (
        <Box display={'flex'} justifyContent={'center'} gap={1}>
            <Box>
                <Box border={"3px solid #ebedf3"} borderRadius={20} display={'flex'} height={70} width={70}
                     justifyContent={'center'} alignItems={'center'}>
                    <Box bgcolor={'#e8e8e7'} padding={1} borderRadius={10} height={50} width={50}
                         display={'flex'}
                         justifyContent={'center'} alignItems={'center'}>
                        <img src={SkinCare} alt={"SkinCare"} style={{height: "30px"}}/>
                    </Box>
                </Box>
                <Typography align={'center'} fontSize={12} color={"#8f8f8f"}>مراقبت پوست</Typography>
            </Box>
            <Box>
                <Box borderRadius={20} display={'flex'} height={70}
                     width={70} border={"3px solid #ebedf3"} flexDirection={'column'}
                     justifyContent={'center'} alignItems={'center'}>
                    <Box bgcolor={'#e8e8e7'} padding={1} borderRadius={10} height={50} width={50}
                         display={'flex'}
                         justifyContent={'center'} alignItems={'center'}>
                        <img src={HairCare} alt={"HairCare"} style={{height: "30px"}}/>
                    </Box>

                </Box>
                <Typography align={'center'} fontSize={12} color={"#8f8f8f"}>مراقبت و زیبایی مو</Typography>
            </Box>
            <Box>
                <Box borderRadius={20} display={'flex'} height={70}
                     width={70} border={"3px solid #ebedf3"}
                     justifyContent={'center'} alignItems={'center'}>
                    <Box bgcolor={'#e8e8e7'} padding={1} borderRadius={10} height={50} width={50}
                         display={'flex'}
                         justifyContent={'center'} alignItems={'center'}>
                        <img src={BeautyMask} alt={"BeautyMask"} style={{height: "30px"}}/>
                    </Box>
                </Box>
                <Typography align={'center'} fontSize={12} color={"#8f8f8f"}>ماسک زیبایی</Typography>
            </Box>
            <Box>
                <Box borderRadius={20} display={'flex'} height={70}
                     width={70} border={"3px solid #ebedf3"}
                     justifyContent={'center'} alignItems={'center'}>
                    <Box bgcolor={'#e8e8e7'} padding={1} borderRadius={10} height={50} width={50}
                         display={'flex'}
                         justifyContent={'center'} alignItems={'center'}>
                        <img src={HealthTool} alt={"HealthTool"} style={{height: "30px"}}/>
                    </Box>
                </Box>
                <Typography align={'center'} fontSize={12} color={"#8f8f8f"}>ابزار سلامت</Typography>
            </Box>
        </Box>
    );
}
