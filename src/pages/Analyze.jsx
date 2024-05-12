import React from 'react';
import {Backdrop, Box, Button, Modal, Typography, Fade, Divider} from "@mui/material";
import {SimpleNav} from "../component/SimpleNav";
import '../assets/css/analyze.css';
import analyzeType from '../assets/img/AnalyzeType1.png';
import {Footer} from "../component/Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    padding: 0,
    bgcolor: 'background.paper',
    border: '1px solid #00000018',
    boxShadow: 24,
    p: 4,
};


export function Analyze() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const newTicket = () => {
        navigate(`/analyze/chat/` );
        // console.log()
        // axios.post("https://nice-gold-oyster-slip.cyclic.app/api/v1/tickets", {}, {
        //     headers: {
        //         Authorization: "Bearer " + localStorage.getItem("token"),
        //     }
        // }).then(r => {
        //     localStorage.setItem('ticket', r.data.data['_id']);
           
        // }).catch()

    }

    return (
        <>
            <SimpleNav prevLocation={"/analyze"}>مشاوره آنلاین</SimpleNav>
            <Box className={'analyze-background-container'} display={'flex'} flexDirection={'column'}>
                <Box className={'analyze-background'}>
                    <img src={analyzeType} className={'analyze-type'} alt={'analyze'}/>
                    <Button className={'learn-more-button'} onClick={handleOpen}>بیشتر بخوانید</Button>
                    <Button variant={'contained'} className={'start-analyze-button'} onClick={newTicket}>
                        شروع مشاوره
                    </Button>
                </Box>
            </Box>
            <Footer active={2}/>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    "& > .MuiBackdrop-root": {
                        backdropFilter: "blur(3px)",
                        width: "121%    ",
                        height: "112vh",
                        bgcolor: 'rgba(134, 134, 134, 0.5)',
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className={'modal'}>
                        <Typography id="modal-modal-title" fontSize={"1em"} textAlign={'center'} color={"primary"}>
                            مشاوره آنلاین با متخصصین پوست و مو
                        </Typography>
                        <Divider sx={{marginTop:1}}  />
                        <Typography id="modal-modal-description" sx={{mt: 2, paddingX:1, textAlignLast:'center'}} textAlign={'justify'} fontSize={".8em"}>

                            احتمالا بارها این جمله را شنیده باشید! در حقیقت بسیاری از پزشکان از گذشته تا حالا، عقیده
                            دارند
                            که ظاهر پوست افراد؛ خبر از وضعیت سلامتی آن ها می دهد و ممکن است بسیاری از مشکلات پوستی، ناشی
                            از
                            یک بیماری تشخیص داده نشده باشند!
                            آیا تابحال دچار یک عارضه ی پوستی شده اید که با هیچ کرم و محلولی برطرف نشود؟!
                            <br />
                            شناخت بیماری های پوستی به شما کمک می کند که به طور دقیق تر و البته جدی تر، علائم و عارضه های
                            پوستی خود را بررسی کرده و چنانچه با موردی که مقاوم به هرگونه درمان است؛ مواجه هستید، هرچه
                            سریع
                            تر برای تشخیص علت درونی آن اقدام کنید.
                        </Typography>
                        <Divider sx={{marginTop:1}}  />
                        <Box display={'flex'} justifyContent={'center'}>
                            <Button sx={{fontSize: "1em", width: "100%"}} variant={'text'}
                                    onClick={handleClose}>بازگشت</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

        </>
    );
}
