import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material"
import { Link } from "react-router-dom"

export const NavAbout =() => {
    return (
        <AppBar position="static">
            <Toolbar
            sx={{
                backgroundColor: "#3f50b5"
            }}
            >
                <Typography variant="h4" component="h1" sx={{flexGrow:1}}>
                    <Link to={"/"}>
                    <Button color="inherit"> SYT</Button>
                    </Link>
                   
                </Typography>
                <Stack direction="row" spacing={2}>
                    {/* <Button  color="inherit">Iniciar Sesion</Button>
                    <Button color="inherit">Crear Cuenta</Button> */}
                </Stack>
            </Toolbar>

        </AppBar>
    )
}