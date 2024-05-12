import React from 'react';
import {Box,  Typography} from "@mui/material";
import ContactBoxPhone from "./ContactBoxPhone";
import EmailIcon from '../../assets/img/email.png';
import PhoneIcon from '../../assets/img/telephone.png';
import MobileIcon from '../../assets/img/mobile.png';
import ContactBoxEmail from "./ContactBoxEmail";

export function Contact() {
    return (
        <>
            <Box>
                <ContactBoxEmail
                    icon={<img src={EmailIcon} alt={"email"} height={30} />}
                    title={"واحد پشتیبانی آنلاین"}
                    email={"support@mywellbeauty.com"} />
                <ContactBoxPhone
                    icon={<img src={PhoneIcon} alt={"email"} height={30} />}
                    title={"واحد رزرو نوبت"}
                    phone={"۰۲۱-۲۲۲۰۰۲۸۵۱"} />
                <ContactBoxPhone
                    icon={<img src={MobileIcon} alt={"email"} height={30} />}
                    title={"انتقادات و پیشنهادات"}
                    phone={"۰۲۱-۲۶۶۰۲۷۶۳"} />
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    bgcolor={"#ebeff2"}
                    border={"1px solid #d2cde1"}
                    borderRadius={5}
                    padding={2}
                    marginBottom={2}>
                    <Typography fontSize={14} fontWeight={'bold'} textAlign={'center'}>تهران - اختیاریه - بزرگراه صدر همکف - خیابان بهار جنوبی - بن بست سعید غربی - پلاک ۱۶ - واحد ۸</Typography>
                </Box>
                <Box>
                    <Typography fontSize={".8em"} fontWeight={'bold'} color={"#65a9d8"} textAlign={'center'} sx={{position:'relative', top:4}}>
                        در کمترین زمان پاسخگو شما
                        هستیم</Typography>
                    {/*<Typography textAlign={'center'} sx={{position:'relative', bottom:4}}>پشتیبانــــی</Typography>*/}
                </Box>
            </Box>
        </>
    );
}