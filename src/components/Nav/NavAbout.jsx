import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavAbout = () => {
  const history = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "rgb(19, 13, 102)",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <button
            className="SYN"
            onClick={(e) => {
              history(`/`);
            }}
          >
            SYT
          </button>
        </Typography>
        <Stack direction="row" spacing={2}>
          {/* <Button  color="inherit">Iniciar Sesion</Button>
                    <Button color="inherit">Crear Cuenta</Button> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
