import {colorPickerTemplate} from "./template.js";
import {rgbText} from "./colorpicker.js";
import {navigate} from "../../js/router.js"

export function renderColorPicker()
{
    return colorPickerTemplate();
}

export function initColorPicker()
{
    const picker = document.getElementById("picker");
    const preview = document.getElementById("preview");
    const hex = document.getElementById("hexValue");
    const rgb = document.getElementById("rgbValue");
    const copy = document.getElementById("copyColor");
    const back = document.querySelector(".back-button");

    back.onclick = ()=>navigate("home");

    function update()
    {
        preview.style.background = picker.value;
        hex.value = picker.value.toUpperCase();
        rgb.value = rgbText(picker.value);
    }

    picker.addEventListener("input", update);
    copy.addEventListener("click", ()=>{
        navigator.clipboard.writeText(hex.value);
        copy.textContent="Copied!";
        setTimeout(()=>{
            copy.textContent="Copy HEX";
        }, 1200);
    });

    update();

}