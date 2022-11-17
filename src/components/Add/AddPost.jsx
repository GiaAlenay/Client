import { Add as AddIcon, FileUpload } from "@mui/icons-material";
import {
  Fab,
  Modal,
  Tooltip,
  Box,
  styled,
  Typography,
  TextField,
  Stack,
  Button,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import List from "@mui/material/List";
import SendIcon from "@mui/icons-material/Send";

import MenuItem from "@mui/material/MenuItem";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../../redux/actions/posts";
import { getCategories } from "../../redux/actions/categories";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AddPost = () => {
  const [open, setOpen] = useState(false);
  const userLoged = useSelector((state) => state.UserLoged);
  const allcategorias = useSelector((state) => state.Categories);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    titulo: "",
    texto: "",
    file: {},
    categories: [],
    premium: "",
  });

  const style={
    backgroundColor: "rgb(33, 25, 155)",
    cursor:"pointer",
    color:"rgb(226, 200, 143)",
    borderradius: "8px",
  
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleArchivos(e) {
    e.preventDefault();
    setInput({
      ...input,
      file: e.target.files[0],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createPost({
        titulo: input.titulo,
        texto: input.texto,
        file: input.file,
        categories: JSON.stringify(input.categories),
        userId: userLoged.id,
        premium: input.premium,
      })
    );
    alert("Nueva publicacion Creada");
    setOpen(false);
    setInput({
      titulo: "",
      texto: "",
      file: {},
      categories: [],
      premium: "",
    });
  }

  const handlerSelectCategoria = (e) => {
    if (!input.categories.find((c) => c === e.target.value)) {
      setInput({
        ...input,
        categories: [...input.categories, e.target.value],
      });
    }
  };
  const handlerDeleteCategoria = (e) => {
    setInput({
      ...input,
      categories: input.categories.filter((c) => c !== e),
    });
  };

  const handleCheck = (e) => {
    if (!input.premium) {
      if (e.target.checked) {
        setInput({
          ...input,
          premium: e.target.value,
        });
      }
    }
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 30,
          left: 20,
          backgroundColor: "rgb(33, 25, 155)",
        }}
        title="Nuevo Post"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box width={500} height={500} bgcolor="white" p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">
              Create a Post
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              type="text"
              name="titulo"
              value={input.titulo}
              multiline
              rows={1}
              placeholder="Titulo de la publicacion"
              variant="standard"
              onChange={(e) => handleChange(e)}
            />

            <div>
              <FormControl fullWidth sx={{mt:2}}>
            <InputLabel id="demo-simple-select-label">Elige una Cateforia</InputLabel>
              <Select onChange={(e) => handlerSelectCategoria(e)} 
              label="Elige un Categoria">
                <MenuItem value="" hidden key={0} disabled>
                  Elije una categoria
                </MenuItem>
                {allcategorias &&
                  allcategorias.map((c, i) => (
                    <MenuItem value={c.name} key={i + 1}>
                      {c.name}
                    </MenuItem>
                  ))}
              </Select>
              </FormControl>

              <ul >
                <List>
                  {input.categories.map((c, i) => (
                    <Box
                      component="span"
                      sx={{ p: 1}}
                      key={i}
                    >
                      {c}
                      <button
                        onClick={() => handlerDeleteCategoria(c)}
                        type="button"
                        style={style}

                      >
                        X
                      </button>
                    </Box>
                  ))}
                </List>
              </ul>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="Principiante"
                  value="Principiante"
                  onChange={(e) => handleCheck(e)}
                ></input>
                Principiante
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Avanzado"
                  value="Avanzado"
                  onChange={(e) => handleCheck(e)}
                ></input>
                Avanzado
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Experto"
                  value="Experto"
                  onChange={(e) => handleCheck(e)}
                ></input>
                Experto
              </label>
            </div>

            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={6}
              placeholder="Escribe tu publicacion"
              variant="standard"
              type={"text"}
              name="texto"
              value={input.texto}
              onChange={(e) => handleChange(e)}
            />

            <Stack direction="row" gap={1} mt={2} mb={3}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  type="file"
                  name="file"
                  onChange={(e) => handleArchivos(e)}
                />

                <FileUpload color="action" />
              </IconButton>
              <label>{input.file ? input.file.name : <>"Select File"</>}</label>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              sx={{ backgroundColor: "rgb(33, 25, 155)" }}
            >
              Publicar
            </Button>
          </Box>
        </form>
      </StyledModal>
    </>
  );
};
