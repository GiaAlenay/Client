import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategories } from "../../redux/actions/categories";
import "./Filtros.css";

export default function Filtros(props) {
  const dispatch = useDispatch();

  const allcategories = useSelector((state) => state.Categories);
  const [selectcss, setSelectcss] = useState([]);

  function handlerFilterCategories(e) {
    e.preventDefault();
    setSelectcss((prev) => [...prev, e.target.value]);
    dispatch(filterByCategories(e.target.value));
  }

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
        {allcategories &&
          allcategories.map((c) => (
            <div className="buttonCategorieHover">
              <button
                className={`imgIcono ${
                  selectcss.includes(c.name) && "categorieSelect"
                }`}
                style={{ backgroundImage: `url(${c.name}.png)` }}
                value={c.name}
                key={c.name}
                onClick={(e) => {
                  handlerFilterCategories(e);
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
