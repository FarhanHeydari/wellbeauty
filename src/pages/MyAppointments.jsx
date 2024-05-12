import React, {useEffect} from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import {SimpleNav} from "../component/SimpleNav";
import checkedAppointment from '../assets/img/CheckedAppointment.png';
import RegisteredAppointment from '../assets/img/RegisteredAppointment.png';
import CancelAppointment from '../assets/img/CancelAppointment.png';
import {Footer} from "../component/Footer";
import axios from "axios";
import MyAppointmentCard from "../component/MyAppointmentCard";

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    padding: "15px 0",
    '& .MuiTabs-flexContainer': {
        display: 'flex',
        justifyContent: "center",
    },
    '& .MuiTabs-indicator': {
        backgroundColor: '#714798',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({theme}) => ({
    padding: "6px 15px",
    textTransform: 'none',
    minWidth: 0,
    minHeight: "30px",
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: '#71479866',
    fontWeight: "bold",
    fontSize: ".8em",
    backgroundColor: "#ebedf3",
    borderRadius: 15,
    '&:hover': {
        color: '#714798',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#714798',
        fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export function MyAppointments() {
    const [value, setValue] = React.useState(0);
    const [appointments, setAppointments] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // const url = "http://localhost:4000/api/v1/appointments/my-appointments";
        const url = "https://nice-gold-oyster-slip.cyclic.appapi/v1/users/getMyProfile";
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }
        if (localStorage.getItem("id") != null) {
            axios.get(url, config).then(r => {
                setAppointments(r.data.data);
            }).catch(err => {
                console.log(err);
            })
        }
    }, [])

    return (
        <>
            <SimpleNav prevLocation={"/profile"}>توبت های شما</SimpleNav>
            <Box padding={1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="همه"/>
                    <AntTab label="ثبت شده"/>
                    <AntTab label="لفو شده"/>
                    <AntTab label="تکمیل شده"/>
                </AntTabs>
                <TabPanel value={value} index={0}>
                    {appointments.map((appointment, index) => (
                        <MyAppointmentCard
                            key={index}
                            type={appointment.status}
                            id={appointment._id}
                            procedures={appointment.procedures}
                            date={appointment.date}
                        />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {appointments.map((appointment, index) => {
                        if (appointment.status === "pending") {
                            return (
                                <MyAppointmentCard
                                    key={index}
                                    type={appointment.status}
                                    id={appointment._id}
                                    procedures={appointment.procedures}
                                    date={appointment.date}
                                />
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {appointments.map((appointment, index) => {
                        if (appointment.status === "cancelled") {
                            return (
                                <MyAppointmentCard
                                    key={index}
                                    type={appointment.status}
                                    id={appointment._id}
                                    procedures={appointment.procedures}
                                    date={appointment.date}
                                />
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {appointments.map((appointment, index) => {
                        if (appointment.status === "completed") {
                            return (
                                <MyAppointmentCard
                                    key={index}
                                    type={appointment.status}
                                    id={appointment._id}
                                    procedures={appointment.procedures}
                                    date={appointment.date}
                                />
                            )
                        }
                    })}
                </TabPanel>
            </Box>
            <Footer active={4}/>
        </>
    );
}

