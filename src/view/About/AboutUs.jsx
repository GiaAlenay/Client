import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { infoUs } from "../../components/InfoUs/InfoUs";

import AboutCard from "./AboutCard";
export const AboutUs = ({ title }) => {
  return (
    <Box sx={{ width: "100%", padding: "0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "title.main" }}
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
          flex={8}
          p={{ xs: 20, md: 2 }}
          sx={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            height: "100%",
            width: "80%",
            backgroundColor: "rgb(19, 13, 102)",
            fontWeight: "bold",
            padding: "3em",
            borderRadius: "1em",
          }}
        >
          {/* <Stack direction="row" spacing={1.5} justifyContent="space-between"> */}

          {infoUs.map((e) => (
            <AboutCard
              key={e.id}
              img={e.img}
              nombre={e.nombre}
              cargo={e.cargo}
              git={e.git}
              link={e.link}
            />
          ))}

          {/* </Stack> */}
        </Box>
      </Box>
    </Box>
  );
};
