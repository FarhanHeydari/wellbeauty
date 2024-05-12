import React from 'react';
import {Box, Typography} from "@mui/material";

const GuideTab = () => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            bgcolor={"#ebeff2"}
            border={"1px solid #d2cde1"}
            borderRadius={5}
            paddingX={5}
            flexDirection={"column"}
            marginBottom={2}
            padding={1}
        >
            <Typography
                textAlign={'center'}
                fontWeight={'bold'}
                color={"primary"}
                fontSize={"1em"}
                marginBottom={1}
                borderBottom={"1px solid #b6b6b6"}
                width={"100%"}
                paddingBottom={1}>
                راهنما
            </Typography>
            <Typography textAlign={'center'} fontSize={14} paddingX={2}>
                بعد از تکمیل پروفایل شما میتوانید با وارد شدن به پروفایل مشخصات خود را ویرایش و یا اشتراک ویژه خریداری کنید.
                <br/>
                در بخش انجمن شما می‌توانید با محتویات مرتبط با زیبایی به اشتراک بگزارید یا از محتویات سایر کاربران و یا متخصصان را مطالعه نمایید.
                <br/>
                در بخش آنالیز می‌توانید با متخصصان ما صحبت یا مشاوره کنید.
                <br/>
                شما می‌توانید در بخش نوبت دهی برای حضور در مرکز نوبت دریافت کنید.
                <br/>
                در فروشگاه می‌توانید از بین محصولات متنوع خرید کنید.
            </Typography>
        </Box>
    );
};

export default GuideTab;