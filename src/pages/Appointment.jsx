import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    stepConnectorClasses,
    StepConnector,
    styled,
    BottomNavigationAction, BottomNavigation, Paper, Box, Divider, Snackbar, Alert, Modal
} from '@mui/material';
import {Step1} from "../component/appoitment_form/Step1";
import {Step2} from "../component/appoitment_form/Step2";
import {Step3} from "../component/appoitment_form/Step3";
import Check from '@mui/icons-material/Check';
import {Footer} from "../component/Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
    bgcolor: '#fff',
    p: 0,
    "& > .MuiBackdrop-root": {
        backdropFilter: "blur(3px)",
        width: "121%    ",
        height: "112vh",
        bgcolor: 'rgba(134, 134, 134, 0.5)',
        transform: 'translate(-11.5%, -33%)',
    }
};


const QontoConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
        flexDirection: "row",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
            display: 'none',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({theme, ownerState}) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const {active, completed, className} = props;

    return (
        <QontoStepIconRoot ownerState={{active}} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon"/>
            ) : (
                <div className="QontoStepIcon-circle"/>
            )}
        </QontoStepIconRoot>
    );
}

export function Appointment() {
    const [activeStep, setActiveStep] = React.useState(0);
    // const [data, setData] = React.useState({});
    const [date, setDate] = React.useState();
    const [hour, setHour] = React.useState();
    const [sessions, setSessions] = React.useState(() => []);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        navigate(0)

    };

    const handleSession = (event, newSessions) => {
        setSessions(newSessions);
    };

    const handleDateChange = (event, newDate) => {
        setDate(newDate);
    };

    const handleHourChange = (event, newHour) => {
        setHour(newHour)
    }


    const steps = [
        {label: 'خدمات زیبایی', content: <Step1 handleSession={handleSession} sessions={sessions}/>, step: "مرحله اول"},
        {
            label: 'زمان نوبت دهی',
            content: <Step2 date={date} hourChange={handleHourChange} hour={hour} dateChange={handleDateChange}/>,
            step: "مرحله دوم"
        },
        {label: 'تایید نهایی', content: <Step3 session={sessions} hour={hour} date={date}/>, step: "مرحله سوم"},
    ];


    const handleNext = () => {
        if (activeStep === 0 && sessions.length > 0)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1 && date && hour)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {

        const url = "https://nice-gold-oyster-slip.cyclic.appapi/v1/appointments";
        const data = {
            customer: localStorage.getItem('id'),
            procedures: sessions,
            date: date.State.gDate,
            time: hour
        };
        console.log(data);
        axios.post(url, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(r => {
            console.log(r)
            handleOpen();
        }).catch(err => console.log(err))
    };
    let button;

    if (activeStep !== 0) {
        button = <Button onClick={handleBack} sx={{height: "50px",}}>
            مرحله قبل
        </Button>;
    }
    return (

        <>
            <SimpleNav>نوبت دهی</SimpleNav>
            <Box height={'calc(100vh - 129px)'} overflow={'scroll'}>
                <Stepper activeStep={activeStep} connector={<QontoConnector/>} alternativeLabel={true}>
                    {steps.map((step) => (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{step.label}</StepLabel>
                            <Typography textAlign={'center'}>
                                {step.step}
                            </Typography>
                        </Step>
                    ))}
                </Stepper>
                <Divider variant={'middle'} sx={{marginTop: 1, marginBottom: 0,}}/>
                <div>
                    {steps[activeStep].content}
                    <Box display={'flex'} marginX={3} marginTop={3}>

                        {button}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                            className={'next-button'}
                            sx={{marginBottom: 10}}>
                            {activeStep === steps.length - 1 ? 'تایید نوبت' : 'مرحله بعد'}
                        </Button>
                    </Box>
                </div>
            </Box>
            <Footer active={1}/>
            <Modal
                open={open}
                onClose={handleClose}
                sx={style}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'modal'} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                    <Typography id="modal-modal-title" color={"#4caf50"} fontSize={"1em"} textAlign={'center'} marginTop={1}>
                        نوبت شما با موفقیت ثبت شد
                    </Typography>
                    <Divider sx={{margin:"10px 0"}} />
                    <Button sx={{fontSize:"1em"}} variant={'text'} onClick={handleClose} sx={{fontSize:".9em", color:"#ababab", marginBottom:1}}>
                        بازگشت
                    </Button>
                </Box>
            </Modal>
        </>
    );
}
