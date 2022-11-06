import { ModeNight, Settings } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

export const Filters=()=>{
    return(
     <Box 
     flex={1} 
     p={2} 
     sx={{ display: {xs:"none", sm: "block"}}}>
         <Box position="fixed">

           
         <List>

             <ListItem disablePadding>
                 {/* <ListItemButton component="a" href="configuracion">
                     <ListItemIcon>
                        <Settings/>
                     </ListItemIcon>
                     <ListItemText primary="Configuracion"/>
                 </ListItemButton> */}
            </ListItem>

            <ListItem disablePadding>
            {/* <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch/>
            </ListItemButton> */}
          </ListItem>
         </List>


         </Box>
     </Box>
    );
}
