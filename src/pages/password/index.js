import { passwordTemplate } from "./template.js";
import { checkPassword } from "./password.js";

export function renderPassword()
{
    return passwordTemplate();
}

export function initPassword()
{
    const input = document.getElementById("passwordInput");
    if (!input) return;
    input.addEventListener("input", () => {
        console.log(checkPassword(input.value));
    });
}