import { render, replaceTo, routes } from "./utils/route";
import "./style.scss";

window.addEventListener("popstate", render);

document.addEventListener("DOMContentLoaded", () => {
  render();
});
