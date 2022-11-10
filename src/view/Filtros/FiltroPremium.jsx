import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterParaPremium } from "../../redux/actions/categories";
import "./Filtros.css";

export default function Filtros(props) {
  const dispatch = useDispatch();
  const [selectcss, setSelectcss] = useState("");

  function handlerFilterCategories(e) {
    e.preventDefault();

    setSelectcss(e.target.value);

    dispatch(filterParaPremium(e.target.value));
  }
  const array = ["Principiante", "Avanzado", "Experto"];

  return (
    <div className={`${props.open ? "fondo" : "nofondo"}`}>
      <button
        className="butonCloseFiltro"
        onClick={() => {
          props.function(false);
        }}
      >
        X
      </button>
      <div className="categoriasDivMap">
        {array.map((c, i) => (
          <div className="buttonCategorieHover" key={i}>
            <button
              className={`imgIcono ${
                selectcss.includes(c) && "categorieSelect"
              }`}
              style={{ backgroundImage: `url(${c}.png)` }}
              value={c}
              key={c}
              onClick={(e) => {
                handlerFilterCategories(e);
              }}
            ></button>
            <br />
            <span className="spanNombres">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
