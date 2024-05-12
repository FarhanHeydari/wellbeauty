import React from 'react';
import {SimpleNav} from "../component/SimpleNav";
import {Box, Tab, Tabs, Typography,} from "@mui/material";
import '../assets/css/guide.css';
import FAQ from "../component/guide/FAQ";
import {Contact} from "../component/guide/Contact";
import {Privacy} from "../component/guide/Privacy";
import {styled} from "@mui/material/styles";
import {Footer} from "../component/Footer";
import GuideTab from "../component/guide/GuideTab";

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
    minHeight:30,
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: '#71479866',
    fontWeight: "bold",
    fontSize: ".8em",
    backgroundColor: "#ebedf3",
    borderRadius: 15,
    padding:"6px 10px",
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

export function Guide() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <SimpleNav prevLocation={'/profile'}>راهنما</SimpleNav>
            <Box sx={{

            }}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="سوالات متداول"/>
                    <AntTab label="تماس با ما"/>
                    <AntTab label="حریم خصوصی"/>
                    <AntTab label="راهنما"/>
                </AntTabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FAQ/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Contact/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Privacy/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <GuideTab />
            </TabPanel>
            <Footer  active={4}/>
        </>
    );
}
