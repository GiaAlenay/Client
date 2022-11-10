import axios from "axios";

export function getCategories() {
  try {
    return async function (dispacth) {
      var response = await axios.get("/categories");
      return dispacth({ type: "GET_CATEGORIES", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function filterByCategories(value) {
  return {
    type: "FILTER_CATEGORIES",
    payload: value,
  };
}

export function filterParaPremium(value) {
  return {
    type: "FILTER_PARA_PREMIUM",
    payload: value,
  };
}
