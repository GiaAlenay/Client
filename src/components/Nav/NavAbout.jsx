import { AppBar, Toolbar, Typography, Stack, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"

export const NavAbout = () => {
  const history = useNavigate();
  const logoStyle={
    width: "100px",
  }

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "rgb(19, 13, 102)",
        }}
      >
          <button
            className="SYN"
            onClick={(e) => {
              history(`/`);
            }}
>

          <img src={logo} alt="Logo" style={logoStyle}/>
          </button>
        <Stack direction="row" spacing={2}>
          {/* <Button  color="inherit">Iniciar Sesion</Button>
                    <Button color="inherit">Crear Cuenta</Button> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
