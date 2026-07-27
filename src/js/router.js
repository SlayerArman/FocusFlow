import {renderHome} from "../pages/home/index.js";
import {renderPassword, initPassword} from "../pages/password/index.js";
import { renderColorPicker, initColorPicker} from "../pages/colorpicker/index.js";

const routes = {
    home: {
        render: renderHome
    },
    password: {
        render: renderPassword,
        init: initPassword
    },

    colorpicker: {
        render: renderColorPicker,
        init: initColorPicker
    },
};

export function navigate(page)
{
    const view = document.getElementById("view");
    const route = routes[page];
    if (!route) return;
    view.innerHTML = route.render();
    if (route.init)
        route.init();
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