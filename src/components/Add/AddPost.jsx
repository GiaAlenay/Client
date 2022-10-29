import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack} from "@mui/icons-material"
import { Fab, Modal, Tooltip,Box, styled, Typography, Avatar, TextField, Stack, Button, alertClasses } from "@mui/material"
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost, createPost} from "../../redux/actions/users";


const user={
    id:1,
    name:'Henry',
    apellido:'Luna',
    image:'https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*'
  }

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
    const history = useNavigate()

    const [input, setInput] = useState({
        titulo: "",
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
            titulo: "",
            texto:"",
            media:"",
            userId:"",
        })

        history('/home')

        
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
                <Box width={400} height={380} bgcolor="white" p={3} borderRadius = {5} >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create a Post
                    </Typography>
                    <UserBox>

                        <Avatar
                        sx={{width:50, height:50}}>
                            <img src={user.image} alt="image not found" height={50}/>
                        </Avatar>
                        
                        
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

                        {/* <Typography variant="h6" color="gray" textAlign="center">
                        {`${user.name} ${user.apellido}`}
                        </Typography> */}

                    </UserBox>

                    <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    type="text"
                    name="titulo"
                    value={input.titulo}
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

                    <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={2}
                    placeholder="Inserta un link"
                    variant="standard"
                    type={"text"}
                    name="media"
                    value={input.media}
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