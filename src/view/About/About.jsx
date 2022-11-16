import { Box, Container, Typography } from "@mui/material"
import { NavAbout } from "../../components/Nav/NavAbout"
import { AboutUs } from "./AboutUs"


export const About =()=>{
    return (

        <Box sx={{width: "100%", padding: "0", backgroundColor:"rgb(230, 231, 231)"}}>
          <NavAbout/>
            <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            mt: 10,
            mb: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="sm"
        >

        <Typography
           variant="h3"
            component="h2"
            display="flex"
            gutterBottom
            justifyContent="center"
          >
            De Programadores, para programadores!
          </Typography>

          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgb(19, 13, 102)",
              fontWeight: "bold",
              padding: "1em",
              borderRadius: "1em",
            }}
          >
            <Typography variant="body1" color="white" 
            gutterBottom
            sx={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "1rem",                          
              }}>
            Un sitio web de marcadores sociales donde los usuarios son capaces de compartir información educativa sobre lenguajes de programación y tecnologías referentes al desarrollo software, además
            podrás interactuar con los otros usuarios y así crear una gran comunidad.
            </Typography>
          </Box>

        </Container>
        </Box>
        <AboutUs title="Programadores"/>
        </Box>

    )
}