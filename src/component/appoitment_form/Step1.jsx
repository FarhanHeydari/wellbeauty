import React from 'react';
import {Grid, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import '../../assets/css/appointment.css';
import {styled} from "@mui/material/styles";

export function Step1({sessions, handleSession}) {

    const StyledToggleButton = styled(ToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            fontWeight: "bold",
            backgroundColor: '#784af4',
            boxShadow: "0 0 5px #784af4",
        }
    });

    return (
        <>
            <ToggleButtonGroup
                value={sessions}
                onChange={handleSession}
                aria-label="انتخاب خدمات"
                className={'service-group'}
            >

                <StyledToggleButton value={'antiBlemishPackage'} className={'service-name'}>
                    <Typography fontSize={15}>پکیج ضدلک</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'eyeHealingPackage'} className={'service-name'}>
                    <Typography fontSize={15}>پکیج درمان دورچشم</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'pollogenTherapy'} className={'service-name'}>
                    <Typography fontSize={15}>پلاژن تراپی</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'carboxyTherapy'} className={'service-name'}>
                    <Typography fontSize={15}>کربوکسی تراپی</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'fatControlPackage'} className={'service-name'}>
                    <Typography fontSize={15}>پکیج کنترل چربی</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'poresHealingPackage'} className={'service-name'}>
                    <Typography fontSize={15}>پکیج درمان جوش</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'facial'} className={'service-name'}>
                    <Typography fontSize={15}>فیشال</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'caviarTherapyBotox'} className={'service-name'}>
                    <Typography fontSize={15}>بوتاکس خاویارتراپی</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'mesoNeedlingPackage'} className={'service-name'}>
                    <Typography fontSize={15}>پکیج مزونیدلینگ</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'laserTherapy'} className={'service-name'}>
                    <Typography fontSize={15}>لیزرتراپی</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'RFFractional'} className={'service-name'}>
                    <Typography fontSize={15}>آر اف فرکشنال</Typography>
                </StyledToggleButton>

                <StyledToggleButton value={'mesoTherapy'} className={'service-name'}>
                    <Typography fontSize={15}>مزوتراپی</Typography>
                </StyledToggleButton>

            </ToggleButtonGroup>
            <Typography marginX={4} fontSize={13} textAlign={'center'} color={'#808080'}>خدمات زیبایی یک پروسه طولانی مدت است و گاهی پس از
                انجام عمل تا مدت ها ارائه خدمات تکمیلی پس از آن ادامه دارد</Typography>
        </>
    )
        ;
}
