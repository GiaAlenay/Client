import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function AboutCard({nombre, img, cargo, git,link}) {
  const url ="https://www.google.com/?hl=es";

  return (
    <Card sx={{border:"1px solid black", width:"95%", marginTop:"5%",  backgroundColor:"rgba(208, 234, 255, 0.555)"}}>
       <Grid
          padding="2em"
          container
          spacing={2}
           columns={10}
          direction="row"
          alignItems="center"
        >
      <CardMedia
        component="img"
        height="194"
        src={img}
        alt=""
        sx={{
          marginLeft:"30%",
          borderRadius: "100px",
          width: "100px",
          height: "100px",
          border: "2px solid",
          borderColor: "primary.main",                          
        }}

      />
      <CardContent sx={{marginLeft:"15%"}}>

        <Typography variant="body2" color="text.secondary"
                   justifyContent="center"
                   display="flex"
                   gutterBottom
                   sx={{

                    textAlign: "center",
                    marginTop: "1rem",
                    marginBottom: "1rem",                          
                  }}>
        {nombre}
        </Typography>

        <Typography variant="body2" color="text.secondary"
                  //  justifyContent="center"

                   display="flex"
                   gutterBottom
                   sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                    marginBottom: "1rem",                          
                  }}>
       {cargo}
        </Typography>
      </CardContent>

      <CardActions disableSpacing
        sx={{ marginLeft:"30%"}}
      >
        <Link
           href={git}
           color="inherit"
           underline="none"
           target="_blank"
        >
        <IconButton>
          <GitHub />
        </IconButton>
        </Link>
      <Link
        href={link}
        color="inherit"
        underline='none'
        target="_blank"
        >
        <IconButton>
          <LinkedIn />
        </IconButton>

      </Link>

      </CardActions>
      </Grid>
    </Card>
  );
}