import React from 'react';
import {Card, CardContent, Box, Avatar, Typography, Button, Divider,} from "@mui/material";
import Man from '../assets/img/man1.jpeg';
import CommentIcon from "../assets/img/comment (2).png";
import LikeIcon from '../assets/img/heart (1).png';
import Share from '../assets/img/share.png';

export function ForumCard(props) {
    return (
        <Card variant={'outlined'} sx={{minWidth: 275, width: "100%", borderRadius: 5, backgroundColor: "#ecedf2" , marginBottom:1}}>
            <CardContent sx={{":last-child": {paddingBottom: 2}}}>
                <Box display={'grid'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} position={"relative"} bottom={2}>
                            <Avatar src={props.image}/>
                            <Box marginLeft={1}>
                                <Typography variant={'body1'} fontSize={15} fontWeight={'bold'}
                                            sx={{position: "relative", top: 4}}>
                                    {props.name}
                                </Typography>
                                <Typography variant={'subtitle1'} fontSize={12} sx={{position: "relative", bottom: 4}}>
                                    کاربر
                                    عادی
                                </Typography>
                            </Box>
                        </Box>
                        <Typography fontSize={".8em"} sx={{opacity: .5}}>{props.time}</Typography>
                    </Box>
                    <Divider sx={{marginY: 1}}/>
                    <Box>
                        <Typography variant={'body1'} fontSize={".8em"}>
                            {props.content}
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} marginTop={2}>
                        <Button sx={{borderRadius: 3, fontSize: ".8em"}} variant="contained">ورود به انجمن</Button>
                        <Box display={'flex'}>
                            <Button sx={{borderRadius: 3, color: "#000", width: 35, padding: 0, minWidth: 0}} variant="text">
                                <img src={Share} alt="like" height={23} style={{opacity:.7}}/>
                            </Button>
                            <Button sx={{borderRadius: 3, color: "#000", width: 35, padding: 0, minWidth: 0}}
                                    variant="text">
                                <img src={CommentIcon} alt="comment" height={30} style={{opacity:.7}}/>
                            </Button>
                            <Button sx={{borderRadius: 3, color: "#000", width: 35, padding: 0, minWidth: 0}} variant="text">
                                <img src={LikeIcon} alt="like" height={25} style={{opacity:.7}}/>
                            </Button>

                        </Box>
                    </Box>

                </Box>
            </CardContent>
        </Card>
    );
}
