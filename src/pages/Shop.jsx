import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {Box, Divider, Typography} from "@mui/material";
import {Footer} from "../component/Footer";
import {CategoryThumbnails} from "../component/shop/CategoryThumbnails";
import ShopBanner from '../assets/img/ShopBanner.png';
import GreenHeart from '../assets/img/greeen_heart.png';
import '../assets/css/shop.css';
import {FeaturedSlider} from "../component/shop/FeaturedSlider";



export function Shop() {
    return (
        <>
            <SimpleNav>فروشگاه</SimpleNav>
            <Box height={"calc(100vh - 149px)"} overflow={'scroll'} paddingTop={2}>
                <CategoryThumbnails/>
                <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                    <img src={ShopBanner} alt={"ShopBanner"} style={{maxWidth: 340, margin: "0 auto"}}/>
                </Box>
                <Box>
                    <Box display={'flex'} justifyContent={'space-between'} marginY={2} paddingX={2.5}>
                        <Box display={'flex'} alignItems={'center'}>
                            <img src={GreenHeart} alt={'GreenHeart'} style={{height: 15, width: 18, marginLeft: 5}}/>
                            <Typography fontSize={12} color={"#404040"} fontWeight={'bold'}>
                                برترین محلول های لاین لک
                            </Typography>
                        </Box>
                        <Typography fontSize={12} color={"#adb0b2"}>
                            مشاهده همه
                        </Typography>
                    </Box>
                    <Box paddingX={2}>
                        <FeaturedSlider />
                    </Box>
                </Box>
                <Box marginBottom={4}>
                    <Box display={'flex'} justifyContent={'space-between'} marginY={2} paddingX={2.5}>
                        <Box display={'flex'} alignItems={'center'}>
                            <img src={GreenHeart} alt={'GreenHeart'} style={{height: 15, width: 18, marginLeft: 5}}/>
                            <Typography fontSize={12} color={"#404040"} fontWeight={'bold'}>
                                برترین محلول های لاین لک
                            </Typography>
                        </Box>
                        <Typography fontSize={12} color={"#adb0b2"}>
                            مشاهده همه
                        </Typography>
                    </Box>
                    <Box paddingX={2}>
                        <FeaturedSlider />
                    </Box>
                </Box>
            </Box>
            <Footer active={0}/>
        </>
    );
}
