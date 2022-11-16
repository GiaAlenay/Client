/* eslint-disable react/style-prop-object */
import "./ChangeForm.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import PersonIcon from "@mui/icons-material/Person";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useSelector } from "react-redux";
const axios = require("axios");

export const ChangeForm = (props) => {
  const userLoged = useSelector((state) => state.UserLoged);
  const User = useSelector((state) => state.User);
  const [input, setinput] = useState({});
  const [change, setChange] = useState({
    usuario: false,
    nombre: false,
    apellido: false,
    foto_principal: false,
    foto_portada: false,
    descripcion: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    console.log("cam");
    const re = await axios
      .patch(`/users/${userLoged.id}`, input)
      .then((d) => {
        console.log(d);
        return d.data.msg;
      })
      .catch((e) => {
        console.log(e);
        return "No se pudo completar los cambios, intente mas tarde";
      });
    alert(re);
    window.location.reload();
  };
  const handleBtnEditar = (e) => {
    if (e.target.value === "false") {
      setChange({ ...change, [e.target.name]: true });
    } else {
      setChange({ ...change, [e.target.name]: false });
    }
  };
  const handleInputChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    // setErrors(Validate({...input,
    //     [e.target.name]:e.target.value},users))
  };
  return (
    <div >
      {change.nombre ? (
        <div className="changeInptCont">
          <TextField
            type="text"
            name="nombre"
            value={input.name}
            onChange={handleInputChange}
            sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
          />
          <button
            type="button"
            name="nombre"
            value={change.nombre}
            onClick={handleBtnEditar}
            className="btnFormEditListo"
          ></button>
        </div>
      ) : (
        <div className="changeInptCont">
          {userLoged.nombre ? (
            <div className="descChang">
              <PermContactCalendarIcon /> {userLoged.nombre}
            </div>
          ) : (
            <div className="descChang">
              <PermContactCalendarIcon /> Nombre
            </div>
          )}
          <button
            type="button"
            name="nombre"
            value={change.nombre}
            onClick={handleBtnEditar}
            className="btnFormEdit"
          ></button>
        </div>
      )}
      {change.apellido ? (
        <div className="changeInptCont">
          <TextField
            type="text"
            name="apellido"
            value={input.apellido}
            onChange={handleInputChange}
            sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
            id="outlined-basic"
            label="apellido"
            variant="outlined"
          />
          <button
            type="button"
            name="apellido"
            value={change.apellido}
            onClick={handleBtnEditar}
            className="btnFormEditListo"
          ></button>
        </div>
      ) : (
        <div className="changeInptCont">
          {userLoged.apellido ? (
            <div className="descChang">
              <PermContactCalendarIcon /> {userLoged.apellido}
            </div>
          ) : (
            <div className="descChang">
              <PersonIcon /> apellido
            </div>
          )}
          <button
            type="button"
            name="apellido"
            value={change.apellido}
            onClick={handleBtnEditar}
            className="btnFormEdit"
          ></button>
        </div>
      )}
 { change.foto_portada ? (
        <div className="changeInputCont">
          { userLoged.premiun === true ? <TextField
            type="text"
            name="foto_portada"
            value={input.foto_portada}
            onChange={handleInputChange}
            sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
            id="outlined-basic"
            label="foto portada"
            variant="outlined"
          /> : <select name="foto_portada" onChange={handleInputChange}>
            <option hidden>elige un color</option>
            <option value={`https://th.bing.com/th/id/OIP.rVUXgLLmNZbxoGFKjGtXYgHaE7?pid=ImgDet&rs=1`}
            >celeste</option>
            <option value={"https://th.bing.com/th/id/OIP.zwRbpXccuVcHt3fYD4oXqgHaHa?pid=ImgDet&rs=1"}
            >morado</option>
            <option value={"https://th.bing.com/th/id/R.0b27b0db4253aa7afd345c4aa6034fc4?rik=qgmGQZeyvE%2f8Sg&riu=http%3a%2f%2fsabware.com%2f1109-medium_default%2fhoja-tamano-carta-eurocolors-color-rosa-51519.jpg&ehk=3VdX9TFAmL%2bg8Py7idAz8G0cwhSdgUV4LRPjKVXxDNA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
            >rosa</option>
             <option value={"https://th.bing.com/th/id/OIP.3em8I3vBBTPf6xJr2vnnngHaEK?pid=ImgDet&rs=1"}
            >azul</option>
            </select>
          }
          <button
            type="button"
            name="foto_portada"
            value={change.foto_portada}
            onClick={handleBtnEditar}
            className="btnFormEditListo" 
          ></button>
        </div>
      ) : (
        <div className="changeInptCont">
          {userLoged.foto_portada ? (
            <div className="descChang">
              <AddAPhotoIcon /> {"Foto Portada"}
            </div>
          ) : (
            <div className="descChang">
              <PersonIcon /> Foto portada
            </div>
          )}
          <button
            type="button"
            name="foto_portada"
            value={change.foto_portada}
            onClick={handleBtnEditar}
            className="btnFormEdit"
          ></button>
        </div>
      )}
      {change.descripcion ? (
        <div className="changeInptCont">
          <TextField
            type="text"
            name="descripcion"
            value={input.name}
            onChange={handleInputChange}
            sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
            id="outlined-basic"
            label="descripcion"
            variant="outlined"
          />
          <button
            type="button"
            name="descripcion"
            value={change.descripcion}
            onClick={handleBtnEditar}
            className="btnFormEditListo"
          ></button>
        </div>
      ) : (
        <div className="changeInptCont">
          {userLoged.descripcion ? (
            <div className="descChang">
              <AccessibilityIcon /> {"Descripcion"}
            </div>
          ) : (
            <div className="descChang">
              <PersonIcon /> Descripcion
            </div>
          )}
          <button
            type="button"
            name="descripcion"
            value={change.descripcion}
            onClick={handleBtnEditar}
            className="btnFormEdit"
          ></button>
        </div>
      )}

      { change.foto_principal ? (
        <div className="asadasa">
          { userLoged.premiun === true ? <TextField
            type="text"
            name="foto_principal"
            value={input.foto_principal}
            onChange={handleInputChange}
            sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
            id="outlined-basic"
            label="foto principal"
            variant="outlined"
          /> : <select name="foto_principal" onChange={handleInputChange}>
            <option hidden>elige tu avatar</option>
            <option value={`https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170534554/79193874-dise%C3%B1o-gr%C3%A1fico-de-vector-de-dibujos-animados-lindo-gato-color.jpg`}
            >gatito</option>
            <option value={"https://img.freepik.com/vector-premium/avatar-perros-lindos-retrato-cabeza-perrito-adorable-hocico-cachorro-pura-raza-labrador-cara-cachorros-felices-lengua-fuera-ilustracion-vector-plano-hocico-mascotas-encantador-aislado-sobre-fondo-blanco_633472-124.jpg?w=360"}
            >perrito</option>
            <option value={"https://cdn5.dibujos.net/dibujos/pintados/201750/oveja-bebe-animales-la-granja-11226967.jpg"}
            >ovejita</option>
            <option value={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ2qcw_eqmoCv4E4y1sCIgyDbiOJSoNTm_5o97Dmy6eG0HHaQZR0riNTweWGwYS8xSpo&usqp=CAU"}>
            pulpito
            </option>
            </select>
          }
          <button
            type="button"
            name="foto_principal"
            value={change.foto_principal}
            onClick={handleBtnEditar}
            className="btnFormEditListo" 
          ></button>
        </div>
      ) : (
        <div className="changeInptCont">
          {userLoged.foto_principal ? (
            <div className="descChang">
              <AddAPhotoIcon /> {"Foto"}
            </div>
          ) : (
            <div className="descChang">
              <PersonIcon /> Foto principal
            </div>
          )}
          <button
            type="button"
            name="foto_principal"
            value={change.foto_principal}
            onClick={handleBtnEditar}
            className="btnFormEdit"
          ></button>
        </div>
      )}
      <button onClick={handleSubmit} className="btnGuarCamb">
        Guardar Cambios
      </button>
    </div>
  );
};

