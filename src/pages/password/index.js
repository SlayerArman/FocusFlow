import {passwordTemplate} from "./template.js";
import {analyzePassword} from "./password.js";
import { navigate } from "../../js/router.js";

export function renderPassword()
{
    return passwordTemplate();
}

export function initPassword()
{
    const input = document.getElementById("passwordInput");
    const fill = document.getElementById("strengthFill");
    const text = document.getElementById("strengthText");
    const toggle = document.getElementById("togglePassword");

    if (!input) return;
    input.addEventListener("input", () => {
        const result = analyzePassword(input.value);
        updateStrength(result);
    });

    toggle.addEventListener("click", () => {
        input.type =
            input.type === "password"
                ? "text"
                : "password";
    });

    function updateStrength(result)
    {
        text.textContent = result.strength;
        fill.style.width = `${result.score * 20}%`;
        document.getElementById("length").textContent =
            `${result.checks.length ? "✅" : "❌"} At least 8 characters`;
        document.getElementById("uppercase").textContent =
            `${result.checks.uppercase ? "✅" : "❌"} Uppercase letter`;
        document.getElementById("lowercase").textContent =
            `${result.checks.lowercase ? "✅" : "❌"} Lowercase letter`;
        document.getElementById("number").textContent =
            `${result.checks.number ? "✅" : "❌"} Number`;
        document.getElementById("symbol").textContent =
            `${result.checks.symbol ? "✅" : "❌"} Special character`;
        const colors = [
            "#EF4444",
            "#F97316",
            "#FACC15",
            "#22C55E",
            "#16A34A",
            "#15803D"
        ];
        fill.style.background = colors[result.score];
    }
}