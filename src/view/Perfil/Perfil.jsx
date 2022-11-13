import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import "./Perfil.css";
import { Esqueleto } from "../../components/Skeleton/Skeleton";
import { Nav } from "../../components/Nav/Nav";
import { Reglas } from "../../components/Reglas/Reglas";
import { ChangeForm } from "../../components/ChangeForm/ChangeForm";
import { CuadroSobrepuesto } from "../../components/CuadroSobrepuesto/CuadroSobrepuesto";
import { DescUsuario } from "../../components/DescripcionUsuario/DescripcionUsuario";
import { Feed } from "../../components/Feed/Feed.jsx";

import { deleteUser, createUser } from "../../redux/actions/users";
import { getPosts } from "../../redux/actions/posts";

import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  Logout as LogoutIcon,
  Info as InfoIcon,
  BorderColorTwoTone as BorderColorTwoToneIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
  WorkspacePremium as WorkspacePremiumIcon,
} from "@mui/icons-material";

export const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const loading = useSelector((state) => state.loading);
  const userLoged = useSelector((state) => state.UserLoged);
  const allPosts = useSelector((state) => state.Posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useNavigate();

  const [reglas, setreglas] = useState(false);
  const [configurar, setConfigurar] = useState(false);
  const [current, setCurrent] = useState(0);
  const [currentConf, setCurrentConf] = useState(1);
  const [aceptar, setAceptar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    !isLoading && !isAuthenticated && navigate("/");
    if (!isLoading && isAuthenticated) {
      dispatch(createUser({ usuario: user.nickname, email: user.email }));
      dispatch(getPosts());
    }
  }, [isLoading, isAuthenticated]);

  const handlePrimium = (e) => {
    history("/premium");
  };
  const handleCuadroSobrepuesto = (e) => {
    if (e.target.value === "reglas") {
      setreglas(true);
    }
    if (e.target.value === "config") {
      setConfigurar(true);
    }
  };
  const onClose = (close) => {
    setConfigurar(close);
    setreglas(close);
  };
  const changeCurrent = (e) => {
    setCurrent(parseInt(e.target.value, 10));
  };
  const handleConfOp = (e) => {
    setCurrentConf(parseInt(e.target.name, 10));
    if (e.target.name === "4") {
      setAceptar(true);
    }
    if (e.target.name === "3") {
      history("/");
    }
    if (e.target.name === "2") {
      console.log("reglamento");
    }
  };
  const handleEliminarCuenta = async (e) => {
    if (e.target.value === "0") {
      setAceptar(false);
    } else {
      setOpen(true);
      dispatch(deleteUser(userLoged.id));
      setOpen(false);
      alert("Eliminado correctamente");
      history("/");
    }
  };

  return (
    <div>
      {loading || isLoading ? (
        <div>
          <Nav />
          <div className="esqCont">
            <Esqueleto type={3} />
          </div>
        </div>
      ) : (
        <div className="perfil">
          <Nav />

          <div
            className={`${configurar ? "configurarCuenta" : "noConfigurar"}`}
          >
            <CuadroSobrepuesto
              onClose={onClose}
              child={<ChangeForm />}
              reason={"Editar Perfil"}
            />
          </div>

          <div className={`${reglas ? "configurarCuenta" : "noConfigurar"}`}>
            <CuadroSobrepuesto
              onClose={onClose}
              child={<Reglas />}
              reason={"Reglamento"}
            />
          </div>

          <div className="profile">
            <div className="allInfoContainer">
              <div className="firstCont">
                <img
                  className="secondPicture"
                  src={userLoged.foto_principal}
                  alt={"profile"}
                />
                <img
                  className="mainPicture"
                  src={userLoged.foto_portada}
                  alt={"profile"}
                />
                <div className="infoContainer">
                  <div className="userNameCont">
                    <span className="userName">{userLoged.usuario}</span>
                    {userLoged.nombre && userLoged.apellido && (
                      <h2 className="nameApellido">
                        {userLoged && (
                          <div>
                            {userLoged.nombre + " " + userLoged.apellido}
                          </div>
                        )}
                      </h2>
                    )}
                  </div>

                  <div className="buttonContainer">
                    <Stack spacing={2} direction="row">
                      <Button
                        className="ou"
                        sx={{
                          backgroundColor: "rgb(22, 17, 41)",
                          display: `${!userLoged ? "none" : "block"}`,
                        }}
                        size="medium"
                        onClick={(e) => {
                          handlePrimium();
                        }}
                        variant="contained"
                      >
                        Go Premium
                      </Button>
                      <Button
                        onClick={handleCuadroSobrepuesto}
                        value={"config"}
                        sx={{ backgroundColor: "rgb(22, 17, 41)" }}
                        size="medium"
                        variant="contained"
                      >
                        <BorderColorTwoToneIcon />
                        Editar Perfil
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>

              <div className="detalle">
                <div className="tipoDetalle">
                  <button
                    value={0}
                    onClick={(e) => {
                      changeCurrent(e);
                    }}
                    className={`btn ${current === 0 && "selectedDetalle"}`}
                  >
                    Publicaciones
                  </button>
                  <button
                    value={1}
                    onClick={(e) => {
                      changeCurrent(e);
                    }}
                    className={`btn ${current === 1 && "selectedDetalle"}`}
                  >
                    Información
                  </button>
                  <button
                    value={2}
                    onClick={(e) => {
                      changeCurrent(e);
                    }}
                    className={`btn ${current === 2 && "selectedDetalle"}`}
                  >
                    Amigos
                  </button>
                  <button
                    value={3}
                    onClick={(e) => {
                      changeCurrent(e);
                    }}
                    className={`btn ${current === 3 && "selectedDetalle"}`}
                  >
                    Favoritos
                  </button>
                  <button
                    value={4}
                    onClick={(e) => {
                      changeCurrent(e);
                    }}
                    className={`btn ${current === 4 && "selectedDetalle"}`}
                  >
                    Configuraciones
                  </button>
                </div>

                <div className="detalleInfo">
                  {current === 0 && (
                    <div className={`detInf detInf0`}>
                      <Feed
                        allPosts={allPosts.filter(
                          (e) => e.userId === userLoged.id
                        )}
                      />
                    </div>
                  )}
                  {current === 1 && (
                    <div className={`detInf detInf1`}>
                      <DescUsuario />
                    </div>
                  )}
                  {current === 2 && (
                    <div className={`detInf detInf2`}>Amigos</div>
                  )}
                  {current === 3 && (
                    <div className={`detInf detInf3`}>Favoritos</div>
                  )}
                  {current === 4 && (
                    <div className={`detInf detInfdetInf4`}>
                      <div className="configOpCont1">
                        <button
                          onClick={(e) => {
                            handlePrimium();
                          }}
                          className={`optPerf ${currentConf === 1 && "confOn"}`}
                          name={1}
                        >
                          <WorkspacePremiumIcon fontSize={"small"} />
                          Haste Premium
                        </button>

                        <button
                          onClick={handleCuadroSobrepuesto}
                          value={"reglas"}
                          className={`optPerf ${currentConf === 2 && "confOn"}`}
                          name={2}
                        >
                          <InfoIcon fontSize={"small"} />
                          Reglamento
                        </button>
                      </div>
                      <div className="configOpCont2">
                        <button
                          onClick={handleConfOp}
                          className={`optPerf ${currentConf === 3 && "confOn"}`}
                          name={3}
                        >
                          <LogoutIcon fontSize={"small"} />
                          Cerrar Sesión
                        </button>

                        <button
                          onClick={handleConfOp}
                          className={`optPerf ${currentConf === 4 && "confOn"}`}
                          name={4}
                        >
                          <RemoveCircleOutlineIcon fontSize={"small"} />
                          Eliminar Cuenta
                        </button>
                      </div>
                      <Dialog
                        open={aceptar}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Estas seguro de querer eliminar tu cuenta?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Si acepta,su cuenta sera completamente eliminada de
                            SYT.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button value={0} onClick={handleEliminarCuenta}>
                            Cancelar
                          </Button>
                          <Button
                            value={1}
                            onClick={handleEliminarCuenta}
                            autoFocus
                          >
                            Aceptar
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
