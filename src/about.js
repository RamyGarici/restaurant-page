
import aboutimg from "./assets/about.jpg"

 const body = document.querySelector("body");




const content = document.querySelector("#content");
const about = ()=>{
    if(!content) return;
    body.style.backgroundImage=`url(${aboutimg})`;
    content.innerHTML = ` <h1 class="hero-text">About Us</h1>

    
    
    
    
    
    
    `





}
    export default about