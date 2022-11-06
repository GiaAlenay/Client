import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import { infoUs } from "../../components/InfoUs/InfoUs"

import AboutCard from "./AboutCard"
export const AboutUs =({title})=>{
 
    return (
        <Box sx={{width: "100%", padding: "0"}}>

            <Box
             sx={{
             display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",          
            }}
            >
            <Typography
              sx={{color:"title.main"}}
              variant="h4"
              component="h3"
              gutterBottom
              display="flex"
              justifyContent="center"
            >
              {title}
            </Typography>
            
            <Box 
// #3f50b5
            flex={4}
            p={{ xs: 8, md: 4 }}
            sx={{
                display:"grid",
                gridTemplateColumns:"25% 25% 25% 25%",
                 height: "100%",
                 width: "90%",
                 backgroundColor: "#3f50b5",                
                 fontWeight: "bold",
                 padding: "1em",
                 borderRadius: "1em",

            }}>
            {/* <Stack direction="row" spacing={1.5} justifyContent="space-between"> */}
            
            {
              infoUs.map((e)=>(
                <AboutCard
                key={e.id}
                img={e.img}
                nombre={e.nombre}
                cargo={e.cargo}
                git={e.git}
                link={e.link}
                />

              ))
            }
            
            {/* </Stack> */}
            </Box>

      </Box>

        </Box>
    )
 }