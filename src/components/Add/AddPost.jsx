
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack} from "@mui/icons-material"
import { Fab, Modal, Tooltip,Box, styled, Typography, Avatar, TextField, Stack, Button } from "@mui/material"
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})
export const AddPost =() =>{
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e=>setOpen(true)}
            title="New Post" sx={{position:"fixed", bottom:20}}>
                <Fab color = "primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModal 
            open= {open}
            onClose={e=> setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius = {5} >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create a Post
                    </Typography>
                    <UserBox>
                        <Avatar
                        sx={{width:50, height:50}}
                        />
                        <Typography fontWeight={800} variant="span">
                            Usuario 1
                        </Typography>

                    </UserBox>
                    
                    <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="Escribe tu publicacion"
                    variant="standard"
                    type={"text"}
                    />
                    
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                    </Stack>

                    <Button
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon/>}>
                        Publicar
                    </Button>
                </Box>
                
            </StyledModal>
        </>
    )
}