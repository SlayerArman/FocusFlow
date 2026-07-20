import { renderHome } from "../pages/home/index.js";

const routes = {
    home: renderHome
};

export function loadPage(page)
{
    const app = document.getElementById("view");
    app.innerHTML = routes[page]();

}