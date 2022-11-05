import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategories } from "../../redux/actions/categories";
import "./Filtros.css";

export default function Filtros() {
  const dispatch = useDispatch();

  const allcategories = useSelector((state) => state.Categories);
  const [currentCss, setCurrentCss] = useState([]);

  function handlerFilterCategories(e) {
    e.preventDefault();
    setCurrentCss(e.target.value)
    dispatch(filterByCategories(e.target.value));
  }
  return (
    <div >
      <p className="parrafo">
        Aqui puedes filtrar las publicaciones para encontrar mas rapido lo que
        buscas
      </p>
      {allcategories &&
        allcategories.map((c) => (
          <button
            className={`button ${currentCss === c.name && "buttonMarcado"}`}
            value={c.name}
            key={c.name}
            onClick={(e) => {
              handlerFilterCategories(e);
              setCurrentCss(e);
            }}
          >
            {c.name}
          </button>
        ))}
    </div>
  );
}
