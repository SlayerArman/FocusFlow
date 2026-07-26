import {renderHome} from "../pages/home/index.js";
import {renderPassword} from "../pages/password/index.js";

const routes = {
    home: renderHome,
    password: renderPassword
};

export function navigate(page)
{
    const view = document.getElementById("view");
    if (!routes[page]) return;
    view.innerHTML = routes[page]();
    attachEvents(page);

}

function attachEvents(page)
{
    if(page === "home")
        {
        document.querySelectorAll(".feature-card").forEach(card=>{
            card.addEventListener("click",()=>{
                navigate(card.dataset.page);
            });
        });
    }
}