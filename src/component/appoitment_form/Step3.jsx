import React from 'react';
import {Box, Divider, Typography} from "@mui/material";

export function Step3({session, hour, date}) {
    return (
        <Box>
            <Typography textAlign={'center'} color={'#adb1b2'} fontSize={13} fontWeight={'bold'} marginTop={2}>
                لطفا اطلاعات نهایی خود را بررسی کنید
            </Typography>
            <Box display={'grid'} paddingX={3} paddingY={3} justifyContent={'center'}>
                {session.map((sess) =>
                    <Box border={'1px solid #d2cde1'} marginX={1} paddingY={2} borderRadius={3} bgcolor={'#ebeff1'}
                         marginBottom={1} width={350}>
                        <Typography textAlign={'center'} color={'#734b98'}
                                    fontWeight={'bold'}>{getName(sess)}</Typography>
                    </Box>
                )}

                {/*<Box border={'1px solid #d2cde1'} marginX={1} paddingY={2} borderRadius={3} bgcolor={'#ebeff1'}*/}
                {/*     marginBottom={1} width={350}>*/}
                {/*    <Typography textAlign={'center'} color={'#734b98'} fontWeight={'bold'}>لیزرتراپی </Typography>*/}
                {/*</Box>*/}
            </Box>
            <Divider variant={'middle'}/>
            <Box display={'flex'} justifyContent={'center'} marginTop={3}>
                <Box marginX={1} display={'grid'} bgcolor={'#e9f0f6'} paddingX={7} paddingY={.5}
                     border={'1px solid #cfe5f2'} borderRadius={3}>
                    <Typography textAlign={'center'} fontWeight={'bold'} color={'#53ade0'}>{`${hour}:00`}</Typography>
                    <Typography textAlign={'center'} fontSize={12} color={'#53ade0'}>ساعت</Typography>
                </Box>
                <Box marginX={1} display={'grid'} bgcolor={'#eeeef0'} paddingX={7} paddingY={.5}
                     border={'1px solid #ebd5d5'} borderRadius={3}>
                    <Typography textAlign={'center'} fontWeight={'bold'} color={'#e06153'}>
                        {date.format('dddd')}
                    </Typography>
                    <Typography textAlign={'center'} fontSize={12} color={'#e06153'}>
                        {date.format('YYYY/m/d')}
                    </Typography>
                </Box>
            </Box>
            <Typography marginX={4} marginY={3} fontSize={14} color={'#808080'} textAlign={'center'}>
                خدمات زیبایی یک
                پروسه طولانی مدت است و گاهی پس از
                انجام عمل تا مدت ها ارائه خدمات تکمیلی پس از آن ادامه دارد
            </Typography>
            <Box bgcolor={'#e7ecf2'} paddingY={3} width={350} marginX={'auto'} borderRadius={4}
                 border={'1px solid #c4d2db'}>
                <Typography textAlign={'center'} fontSize={13} color={'#134d70'}>
                    برای اطلاعات بیشتر با ما در تماس باشید
                </Typography>
                <Typography textAlign={'center'} dir={'ltr'} fontWeight={900} color={'#134d70'}>
                    021 228 33 65 - 021 228 33 68
                </Typography>

            </Box>
        </Box>
    );
}

const getName = name => {
    switch (name) {
        case 'antiBlemishPackage':
            return "پکیج ضدلک";
        case 'eyeHealingPackage':
            return "پکیج درمان دورچشم";
        case 'pollogenTherapy':
            return "پلاژن تراپی";
        case 'carboxyTherapy':
            return "کربوکسی تراپی";
        case 'fatControlPackage':
            return "پکیج کنترل چربی";
        case 'poresHealingPackage':
            return "پکیج درمان جوش";
        case 'facial':
            return "فیشال";
        case 'caviarTherapyBotox':
            return "بوتاکس خاویارتراپی";
        case 'mesoNeedlingPackage':
            return "پکیج مزونیدلینگ";
        case 'laserTherapy':
            return "لیزرتراپی";
        case 'RFFractional':
            return "آر اف فرکشنال";
        case 'mesoTherapy':
            return "مزوتراپی";
        default:
            return 'unknown';
    }

};