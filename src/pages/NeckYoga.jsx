import React, { useState } from 'react';
import { Box, Button, Drawer, Typography } from '@mui/material';
import Nose1 from '../assets/vids/گردن 1.mp4';
import Nose2 from '../assets/vids/گردن 2.mp4';
import VideoJS from '../component/VideoJS';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

function NeckYoga() {
    const playerRef = React.useRef(null);
    const [videoSrc, setVideoSrc] = useState(Nose1); // Use state to manage the video source
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(open);
    };

    const videoJsOptions = {
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoSrc,
            type: 'video/mp4'
        }]
    };
    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });

        player.on('ended', () => {
            videojs.log('video ended');
            videoSrc === Nose1 ? setVideoSrc(Nose2) : setVideoSrc(Nose1); // Set the source to the next video
        });
    };
    return (
        <Box height="100vh" position="relative">
            <div data-vjs-player style={{ width: '100%', }}>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
            <Box sx={{ backgroundColor: "#fff" }} width="100%" height="300px" position="absolute" bottom={0} borderRadius="5px 5px 0 0">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: "column" }}>
                    <Button variant='text' onClick={toggleDrawer(true)} >
                        <InfoIcon />
                        اطلاعات بیشتر
                    </Button>
                    <Button sx={{ width: 100, height: 100 }} variant='text' onClick={() => {
                        if (playerRef.current.paused()) {
                            playerRef.current.play();
                        } else {
                            playerRef.current.pause();
                        }
                    }}>
                        {playerRef.current && playerRef.current.paused() ? <PlayCircleIcon sx={{ fontSize: "5rem" }} /> : <PauseCircleIcon sx={{ fontSize: "3rem" }} />}
                    </Button>
                    <Button variant='text' onClick={() => navigate('/analyze/yoga')} >

                        <ReplyIcon />
                        بازگشت
                    </Button>
                </Box>

            </Box>
            <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer(false)}>
                {/* Your drawer content goes here */}
                <Box height={280} borderRadius="5px 5px 0 0" width={"90%"}>
                    <Typography variant='h4' textAlign="center">یوگای گردن</Typography>
                    <ul style={{ position: "relative", right: 40 }}>
                        <li>کمک به سفت شدن پوست گردن</li>
                        <li>کمک به کاهش تنش عضلات گردن</li>
                        <li>کمک به بهبود جریان خون و در نتیجه بهبود سلامت پوست گردن</li>
                    </ul>
                </Box>
            </Drawer>
        </Box>
    );
}

export default NeckYoga;