import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategories } from "../../redux/actions/categories";
import "./Filtros.css";

export default function Filtros(props) {
  const dispatch = useDispatch();

  const allcategories = useSelector((state) => state.Categories);
  const [selectcss, setSelectcss] = useState([]);
  const [acumulador, setAcumulador] = useState([]);

  function handlerFilterCategories(e) {
    e.preventDefault();
    console.log(acumulador)
    dispatch(filterByCategories(acumulador));
    props.function(false);
  }

  function handleChange(e) {
    e.preventDefault();
    if (!acumulador.includes(e.target.value)) {
      setAcumulador((prev) => [...prev, e.target.value]);
      setSelectcss((prev) => [...prev, e.target.value]);
    } else {
      setAcumulador(acumulador.filter((c) => c !== e.target.value));
      setSelectcss(selectcss.filter((c) => c !== e.target.value));
    }
  }

  return (
    <div className={`${props.open ? "fondo" : "nofondo"}`}>
      <button
        className="butonCloseFiltro"
        onClick={(e) => {
          handlerFilterCategories(e);
        }}
      >
        X
      </button>
      <div className="categoriasDivMap">
        {allcategories &&
          allcategories.map((c, i) => (
            <div className="buttonCategorieHover" key={i}>
              <button
                className={`imgIcono ${
                  selectcss.includes(c.name) && "categorieSelect"
                }`}
                style={{ backgroundImage: `url(${c.name}.png)` }}
                value={c.name}
                key={c.name}
                onClick={(e) => {
                  handleChange(e);
                }}
              ></button>
              <br />
              <span className="spanNombres">{c.name.toUpperCase()}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
