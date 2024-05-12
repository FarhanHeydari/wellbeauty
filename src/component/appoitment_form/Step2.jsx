import React from 'react';
import {Box, Button, MobileStepper, ToggleButton, ToggleButtonGroup, Typography, useTheme} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import persianDate from 'persian-date';
import {styled} from "@mui/material/styles";


const getCurrentPersianWeekDays = (week = 0) => {
    let days = [];

    for (let i = 0; i <= 5; i++) {
        let date = new persianDate().startOf('week').add('days', i).add('week', week);
        days.push(date)
    }
    return (days);
};

export function Step2({dateChange, hourChange, date, hour}) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [days, setDays] = React.useState(getCurrentPersianWeekDays(activeStep));
    const maxSteps = 3;
    const theme = useTheme();

    const StyledToggleButton = styled(ToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            fontWeight: "bold",
            backgroundColor: '#784af4',
            boxShadow: "0 0 5px #784af4",
        }
    });

    React.useEffect(() => {
        setDays(getCurrentPersianWeekDays(activeStep));
    }, [activeStep]);




    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Typography textAlign={'center'} position={'relative'} top={35}>روز مورد نظر خود را انتخاب کنید</Typography>
            <MobileStepper
                variant="dots"
                sx={{
                    '& .MuiMobileStepper-dots': {
                        display: 'none',
                    },
                    bgcolor: "transparent",
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >

                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft/>
                        ) : (
                            <KeyboardArrowRight/>
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight/>
                        ) : (
                            <KeyboardArrowLeft/>
                        )}

                    </Button>
                }
            />
            <Box sx={{p: 2}}>
                <ToggleButtonGroup
                    value={date}
                    exclusive
                    onChange={dateChange}
                    aria-label="انتخاب روز"
                    className={'date-group'}
                >
                    {days.map((day, index) =>
                        <StyledToggleButton
                            sx={{display: "grid"}}
                            key={index}
                            value={day}
                            disabled={(day.diff(new persianDate()) < 0) ?? true}
                            aria-label="right aligned"
                            className={'date-button'}
                        >
                            <Typography>{day.format('dddd')}</Typography>
                            <Typography>{day.format('YYYY/M/D')}</Typography>
                        </StyledToggleButton>)}
                </ToggleButtonGroup>
            </Box>
            <Typography textAlign={'center'} position={'relative'} marginBottom={1} marginTop={3}>ساعت مورد نظر خود را
                انتخاب کنید</Typography>
            <Box sx={{p: 2}}>
                <ToggleButtonGroup
                    value={hour}
                    exclusive
                    onChange={hourChange}
                    aria-label="انتخاب روز"
                    className={'hour-group'}
                    sx={{gap:.5}}
                >
                    <StyledToggleButton value="9" aria-label="right aligned" className={'date-button'}>
                        <Typography>09:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="10" aria-label="left aligned" className={'date-button'}>
                        <Typography>10:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="11" aria-label="centered" className={'date-button'}>
                        <Typography>11:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="12" aria-label="right aligned" className={'date-button'}>
                        <Typography>12:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="13" aria-label="left aligned" className={'date-button'}>
                        <Typography>13:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="14" aria-label="centered" className={'date-button'}>
                        <Typography>14:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="15" aria-label="centered" className={'date-button'}>
                        <Typography>15:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="16" aria-label="centered" className={'date-button'}>
                        <Typography>16:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="17" aria-label="centered" className={'date-button'}>
                        <Typography>17:00</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="18" aria-label="centered" className={'date-button'}>
                        <Typography>18:00</Typography>
                    </StyledToggleButton>
                </ToggleButtonGroup>
            </Box>
        </>

    );
}
