import "./styles.css";
import home from "./home.js";




let content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

home();
homeBtn.addEventListener("click", home);

