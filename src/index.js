import "./styles.css";
import { homeDiv } from "./pages/home.js";
import { menuDiv } from "./pages/menu.js";
import { contactDiv } from "./pages/contact.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");
const contentDiv = document.getElementById("content");

const uiFunctions = (() => {
    const resetContent = () => contentDiv.innerHTML = "";
    return { resetContent };
})();

contentDiv.appendChild(homeDiv); // initial content

homeBtn.addEventListener("click", ()=>{
    uiFunctions.resetContent();
    contentDiv.appendChild(homeDiv);
})

menuBtn.addEventListener("click", ()=>{
    uiFunctions.resetContent();
    contentDiv.appendChild(menuDiv);
})

contactBtn.addEventListener("click", ()=>{
    uiFunctions.resetContent();
    contentDiv.appendChild(contactDiv);
})

