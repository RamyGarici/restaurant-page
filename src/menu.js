
import menuimg from "./assets/menu.jpg"

 const body = document.querySelector("body");




const content = document.querySelector("#content");
const menu = ()=>{
    if(!content) return;
    body.style.backgroundImage=`url(${menuimg})`;
    content.innerHTML = ` <h1 class="hero-text">Starter</h1>
    <div class="dish-box"></div>
    <div class="dish-box"></div>
    <h1 class="hero-text">Main</h1>
    <div class="dish-box"></div>
    <div class="dish-box"></div>
    <h1 class="hero-text">Dessert</h1>
    <div class="dish-box"></div>
    <div class="dish-box"></div>
 `
}
    export default menu