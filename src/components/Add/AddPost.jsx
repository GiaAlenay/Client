import { Add as AddIcon, FileUpload} from "@mui/icons-material"
import { Fab, Modal, Tooltip,Box, styled, Typography, TextField, Stack, Button, IconButton } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/users";
import MenuItem from '@mui/material/MenuItem';


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

export const AddPost =() =>{
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        titulo: "",
        texto:"",
        file:{},
        userId :1,
        categories :"JAVASCRIPT"
    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    function handleArchivos(e){
        e.preventDefault()
        setInput({
            ...input,
            file: e.target.files[0]
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createPost(input))
        alert('Nueva publicacion Creada')
        setOpen(false)
        setInput({
            titulo: "",
            texto:"",
            file:{},
            userId :1,
        })
    }
    return (
        <>
            <Tooltip 
            onClick={e=>setOpen(true)}
            sx={{position:"fixed", bottom:30 , left:20}}
            title="New Post"
            >
                <Fab color = "primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal 
            open= {open}
            onClose={e=> setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <Box width={400} height={330} bgcolor="white" p={3} borderRadius = {5} >

                        <Typography variant="h6" color="gray" textAlign="center">
                            Create a Post
                        </Typography>

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
                        rows={6}
                        placeholder="Escribe tu publicacion"
                        variant="standard"
                        type={"text"}
                        name="texto"
                        value={input.texto}
                        onChange={(e)=> handleChange(e)}
                        />
                        
                         
                        <Stack direction="row" gap={1} mt={2} mb={3}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden type="file" name="file" onChange={(e)=> handleArchivos(e)}/>    
                                <FileUpload color="action"/>  
                            </IconButton>
                            <label>{input.file ? input.file.name : <>"Select File"</>}</label>
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