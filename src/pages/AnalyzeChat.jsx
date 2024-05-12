import React from 'react';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput, Avatar,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {SimpleNav} from "../component/SimpleNav";
import {Footer} from "../component/Footer";
import Niko from "../assets/img/lady_spec.jpeg";
import axios from "axios";
import {Box, Button, Divider, IconButton, Modal, Typography, Backdrop, Fade} from "@mui/material";
import '../assets/css/profile.css';
import SpaIcon from '@mui/icons-material/Spa';

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

export function AnalyzeChat() {
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState("");
    React.useEffect(() => {
        axios.get(`https://nice-gold-oyster-slip.cyclic.app/api/v1/tickets/${localStorage.getItem('ticket')}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(r => {
            console.log(r.data.data);
            setMessages(r.data.data)
        }).catch(err => console.log(err))
    }, []);
    const [open, setOpen] = React.useState(false);
    const [wellnessOpen, setWellnessOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenWellnessModal = () => setWellnessOpen(true);
    const handleClose = () => setOpen(false);
    const sendMessage = () => {
        setMessage("");
        const url = 'https://nice-gold-oyster-slip.cyclic.appapi/v1/tickets/message';
        // const url = 'http://localhost:4000/api/v1/tickets/message';
        axios.post(
            url,
            {
                "ticketId": localStorage.getItem('ticket'),
                "message": message,
                "author": localStorage.getItem('id')
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                }
            }
        ).then(r => {
            console.log(r)
            window.location.reload(false);
            setMessages(current => [...current, {message: r.data.data['message']}]);
        })
    }

    return (
        <>
            <SimpleNav prevLocation={'/analyze'}> گفتگو</SimpleNav>
            <Box style={{position: "relative", height: "calc(100vh - 192px)", direction: "initial"}}>

                <Box height={60} display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingX={2}>
                    <Box>
                        <IconButton onClick={handleOpen} aria-label="info"> < InfoOutlinedIcon/> </IconButton>
                        <IconButton onClick={handleOpenWellnessModal} aria-label="info"> < SpaIcon/> </IconButton>

                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} marginLeft={1.5}
                             flexDirection={'column'}>
                            <Typography fontWeight={'bold'}
                                        variant={'subtitle1'}
                                        fontSize={13}
                                        textAlign={'end'}
                                        width={"100%"}
                                        position={'relative'}
                                        top={4}>
                                سارا وحدت
                            </Typography>
                            <Typography variant={'subtitle1'} fontSize={10} color={"#808080"} position={'relative'}
                                        bottom={4}>
                                متخصص زیبایی ( پشتیبانی آنلاین )
                            </Typography>
                        </Box>

                        <Avatar src={Niko} name={"نیکو"} status="available"/>
                    </Box>
                </Box>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            {messages.map((message, index) => {
                                return (
                                    <Message
                                        style={{height:"auto"}}
                                        key={index}
                                        model={{
                                            message: message.message,
                                            direction: "outgoing",
                                        }}
                                    />
                                );
                                // model={{
                                //     message: message.message,
                                //     direction: "outgoing",
                                // }}
                                // />
                            })}
                            {/*<Message*/}
                            {/*    model={{*/}
                            {/*        message: "سلام من پوستم خوشگله؟",*/}
                            {/*        sentTime: "just now",*/}
                            {/*        sender: "Joe",*/}
                            {/*        direction: "outgoing",*/}
                            {/*    }}*/}
                            {/*/>*/}
                            {/*<Message type="image" model={{*/}
                            {/*    direction: "outgoing",*/}
                            {/*    payload: {*/}
                            {/*        src: Niko,*/}
                            {/*        alt: "Joe avatar",*/}
                            {/*        width: "250px"*/}
                            {/*    }*/}
                            {/*}}>*/}
                            {/*    <img src={Niko} alt="skin"/>*/}
                            {/*</Message>*/}

                            {/*<Message*/}
                            {/*    model={{*/}
                            {/*        message: "جون😍",*/}
                            {/*        sentTime: "just now",*/}
                            {/*        sender: "Joe",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Message.Footer sentTime="همین الان"/>*/}
                            {/*</Message>*/}
                        </MessageList>
                        <MessageInput
                            sendButton={true}
                            placeholder="پیام خود را بنویسید"
                            value={message}
                            onChange={e => setMessage(e)}
                            onSend={sendMessage}
                            onAttachClick={() => console.log('file')}
                        />

                    </ChatContainer>
                </MainContainer>

            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    "& > .MuiModal-root": {
                        padding: "10px"
                    },
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
                    <Box sx={style} padding={"10px"} className={'modal'} display={'flex'} justifyContent={'center'}
                         flexDirection={'column'}>
                        <Typography id="modal-modal-title" fontSize={"1.0em"} fontWeight={"bold"} textAlign={'center'}
                                    marginBottom={1} color={"primary"}>
                            اطلاعات بیش‌تر
                        </Typography>
                        <Divider/>
                        <Typography marginY={1} fontSize={".8em"} id="modal-modal-content" textAlign={'center'}
                                    variant={'body1'}>
                            ارزیابی تخصصی پوست و مو آنلاین
                            <br/>
                            نام متخصص: سارا وحدت
                            <br/>
                            زمان پاسخگویی: شنبه الی پنج‌شنبه (۰۹:۰۰ تا ۱۸:۰۰)
                        </Typography>
                        <Divider/>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Button color={'error'} sx={{fontSize: "1em", width: "100%"}} variant={'text'}
                                    onClick={handleClose}>بازگشت</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <Modal
                open={wellnessOpen}
                onClose={() => setWellnessOpen(false)}
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
                <Fade in={wellnessOpen}>
                    <Box sx={style} className={'modal'} display={'flex'} justifyContent={'center'}
                         flexDirection={'column'}>
                        <Typography id="modal-modal-title" fontSize={"1.0em"} fontWeight={"bold"} textAlign={'center'}
                                    marginBottom={2} marginTop={1} color={"primary"} fontFamily={'system-ui'}>
                            Wellness Center
                        </Typography>
                        <Divider/>
                        <Typography marginTop={2} marginBottom={1} fontSize={".8em"} id="modal-modal-content"
                                    textAlign={'center'}
                                    variant={'body1'}>
                            ارزیابی و ارتقاء تخصصی ابعاد مختلف انسان
                            <br/>
                            ارزیابی هشت بعد ولنس و نوبت‌دهی آنلاین
                        </Typography>

                        <a dir={"ltr"}
                           style={{textAlign: "center", fontSize: "1.2em", color: "#20263d", textDecoration: "none"}}
                           href={"tel:+982122644609"}>۰۲۱-۲۲۶۴ ۴۶۰۹</a>
                        <a target="_blank" href={"https://wellness-front.pages.dev"}
                           style={{width: "100%", textDecoration: "none"}}>
                            <Button variant={'contained'} sx={{
                                bgcolor: "#e3e3e3", color: "#20263d", marginBottom: 3, width: "100%", '&:hover': {
                                    bgcolor: "#e3e3e3"
                                },
                            }}
                                    disableElevation>ورود به وبسایت</Button>
                        </a>
                        <Divider/>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Button color={'error'} sx={{fontSize: "1em", width: "100%"}} variant={'text'}
                                    onClick={() => setWellnessOpen(false)}>بازگشت</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <Footer active={2}/>

        </>
    );
}
