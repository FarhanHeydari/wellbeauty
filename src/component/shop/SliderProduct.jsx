import React from 'react';
import {Box, Typography} from "@mui/material";
import Bag from "../../assets/img/bag.png";
import Product from "../../assets/img/Iodine-solution-0.1n.png";


export function SliderProduct() {
    return (

            <Box position={'relative'} bgcolor={"#ebedf3"} padding={1} borderRadius={3}
                 display={'grid'} justifyContent={'center'}>
                <Box height={22} width={22} bgcolor={'#6fb965'} borderRadius={10} display={'flex'}
                     justifyContent={'center'} alignItems={'center'} position={'absolute'} top={7}
                     left={5}>
                    <img src={Bag} alt="Bag" style={{margin: "0 auto"}}/>
                </Box>

                <img src={Product} alt={"Product"} style={{margin: "0 auto"}} height={70}/>
                <Box>
                    <Typography align={'center'} fontSize={12} fontWeight={"bold"}>
                        محلول ترمیم اسکار
                    </Typography>
                    <Typography align={'center'} fontSize={9} color={"#abacb0"}>
                        مناسب برای انواع پوست
                    </Typography>
                    <Typography fontWeight={'bold'} fontSize={13} color={"#56a74a"} align={"center"}>
                        ۷۶۰،۰۰۰ تومان
                    </Typography>
                </Box>
            </Box>

    );
}
