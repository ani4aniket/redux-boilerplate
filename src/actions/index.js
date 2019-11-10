import { MOVIES_LIST } from "../types";
import axios from "axios";

export function moviesList() {
  const request = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.data);

  return {
    type: MOVIES_LIST,
    payload: request
  };
}
