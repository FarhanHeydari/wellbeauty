import React from 'react';
import {Box, Divider, Typography} from "@mui/material";

export function Privacy() {
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
            <Typography textAlign={'center'} fontWeight={'bold'} color={"error"} fontSize={"1em"} marginBottom={1}
                        borderBottom={"1px solid #b6b6b6"} width={"100%"} paddingBottom={1}>سیاست‏‌های حریم شخصی</Typography>
            <Typography textAlign={'center'} fontSize={14} paddingX={2}>
                مرکز زیبایی ول بیوتی به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند، احترام گذاشته و از آن
                محافظت می‏‌کند.
                <br/>
                مرکز زیبایی ول بیوتی متعهد می‏‌شود در حد توان از حریم شخصی شما دفاع کند و در این راستا، فنّاوری مورد
                نیاز برای هرچه مطمئن‏‌تر و امن‏‌تر شدن استفاده شما از سایت را، توسعه دهد.
                درواقع با استفاده از وب اپلیکیشن ول بیوتی، شما رضایت خود را از این سیاست نشان می‏‌دهید.
                این سند شامل توضیحی درباره اطلاعات خصوصی و نحوه حفاظت از این اطلاعات است که وب اپلیکیشن ول بیوتی از
                کاربران جمع‌آوری می‌کند.
            </Typography>
        </Box>
    );
}
