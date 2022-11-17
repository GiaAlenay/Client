import React, { useEffect, useState } from "react";
import { Nav } from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { creatReport } from "../../redux/actions/email";
import "./SendEmail.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
export function SendEmail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    !isLoading && !isAuthenticated && navigate("/");
  }, [isLoading, isAuthenticated]);

  const [error, setError] = useState({
    msg: "",
    usarioreport: "",
    tituloPost: "",
  });

  const [input, setInput] = useState({
    msg: "",
    usarioreport: "",
    tituloPost: "",
  });
  function handleChang(e) {
    setInput((prevent) => {
      const newState = {
        ...input,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      creatReport({
        name: user.nickname,
        email: user.email,
        msg: input.msg,
        usarioreport: input.usarioreport,
        tituloPost: input.usarioreport,
      })
    );
    // alert("Su report se a enviado correctamente revise su gmail");
    setInput({
      msg: "",
      usarioreport: "",
      tituloPost: "",
    });
    Swal.fire({
      title: "Reporte enviado exitosamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
  })
    navigate("/home");
  }

  if (isLoading) {
    <div>Loading...</div>;
  }

  function validate(state) {
    const errors = {};
    if (!state.usarioreport) {
      errors.usarioreport = "Falta el nombre del propietario del posts";
    } else if (state.usarioreport.length >= 90) {
      errors.usarioreport = "El nombre del propietario del posts es muy largo";
    } else if (state.usarioreport[0] === " ") {
      errors.usarioreport =
        "El nombre del propietario del posts comenzar con una letra ";
    } else if (state.usarioreport.length >= 4) {
      error.usarioreport =
        "No exite un usuario que tengo 3 letras ya lo busque";
    }
    if (!state.tituloPost) {
      errors.tituloPost = "Debe ingresar el titulo de post a reportar ";
    }

    if (!state.msg) {
      errors.msg = "Falta el motivo para reporta el post";
    }

    return errors;
  }

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>
        <Typography gutterBottom variant="h3" align="center">Haz tu Reporte</Typography>
        <Card style={{maxWidth:550 , margin:"0 auto", padding:"5px 5px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5">Reporte</Typography>
            <Typography gutterBottom color="textSecondary" variant="body2" component="p">Haz tu reporte llenando este formulario</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={1}>
              <Grid sx={12} sm={15} item>
                <TextField 
                type="text"
                label="Titulo del post a reportar"
                placeholder="Ingrese el titulo"
                error={error.tituloPost}
                fullWidth
                variant="outlined"
                name="tituloPost"
                value={input.tituloPost}
                onChange={(e) => handleChang(e)}
                />
                 <p className="denegar">{error.tituloPost || ""}</p>
              </Grid>
              <Grid sx={15} sm={15} item>
                <TextField 
                label="Nombre del propietario del post"
                type="text"
                placeholder="Ingrese el nombre"
                error={error.usarioreport}
                fullWidth
                variant="outlined"
                name="usarioreport"
                value={input.usarioreport}
                onChange={(e) => handleChang(e)}
                />
                <p className="denegar">{error.usarioreport || ""}</p>

              </Grid>
              <Grid sx={15} sm={15} item>
                <TextField 
                label="Razones del reporte del post"
                type="text"
                placeholder="Ingrese las razones"
                error={error.msg}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                name="msg"
                value={input.msg}
                onChange={(e)=> handleChang(e)}
                />
                <p className="denegar">{error.msg || ""}</p>
              </Grid>

              <button
                id="submit"
                className="button"
                type="submit"
                disabled={Object.entries(error).length ? true : false}
              >
                Enviar
              </button> 
            </Grid>
            </form>
          </CardContent>
        </Card>
      </div>


      {/* <div>
        <div className="BodyReport">
          <div className="ContenedorReport">
            <h2 className="tituloReport">Realice su report </h2>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label className="labelReport">Titulo del post a reportar</label>
              <input
                className="inputReport"
                type={"text"}
                name="tituloPost"
                value={input.tituloPost}
                onChange={(e) => handleChang(e)}
              />
              <p className="denegar">{error.tituloPost || ""}</p>
              <label className="labelReport">
                Ingrese el nombre del propietario del posts{" "}
              </label>
              <br />
              <input
                className="inputReport"
                type={"text"}
                name="usarioreport"
                value={input.usarioreport}
                onChange={(e) => handleChang(e)}
              />
              <br />

              <label className="labelReport">Razones de report</label>
              <br></br>
              <textarea
                className="textReport"
                name="msg"
                value={input.msg}
                onChange={(e) => handleChang(e)}
                cols="10"
                rows="10"
              />
              <br />
              <button
                id="submit"
                className="buttonReport"
                type="submit"
                disabled={Object.entries(error).length ? true : false}
              >
                Enviar su report
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}
