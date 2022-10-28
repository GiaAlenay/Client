import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack} from "@mui/icons-material"
import { Fab, Modal, Tooltip,Box, styled, Typography, Avatar, TextField, Stack, Button, alertClasses } from "@mui/material"
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { getPost, createPost} from "../../redux/actions/users";



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
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        title: "",
        texto:"",
        media:"",
        userId:"",
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        console.log(input)
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log(input)

        dispatch(createPost(input))
        alert('Nueva publicacion Creada')
        setInput({
            title: "",
            texto:"",
            media:"",
            userId:"",
        })

        
    }
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
                <form onSubmit={(e)=>handleSubmit(e)}>
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius = {5} >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create a Post
                    </Typography>
                    <UserBox>
                        <Avatar
                        sx={{width:50, height:50}}
                        />
                        <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        name="userId"
                        value={input.userId}
                        multiline
                        rows={1}
                        placeholder="ID"
                        variant="standard"
                        onChange={(e)=> handleChange(e)}                     
                        />
                    </UserBox>

                    <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    type="text"
                    name="title"
                    value={input.title}
                    multiline
                    rows={1}
                    placeholder="Titulo de la publicacion"
                    variant="standard"
                    onChange={(e)=> handleChange(e)}
                    
                    />
                    <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="Escribe tu publicacion"
                    variant="standard"
                    type={"text"}
                    name="texto"
                    value={input.texto}
                    onChange={(e)=> handleChange(e)}
                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                    </Stack>

                    <Button
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon/>}
                    type="submit"
                    >
                        Publicar
                    </Button>
                </Box>
                </form>
                
            </StyledModal>
        </>
    )
}