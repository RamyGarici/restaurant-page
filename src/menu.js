
import menuimg from "./assets/menu.jpg"
import starter1 from "./assets/menu-starter-1.webp";
import starter2 from "./assets/menu-starter-2.jpg";
import starter3 from "./assets/menu-starter-3.jpg";
import main1 from "./assets/menu-main-1.jpg";
import main2 from "./assets/menu-main-2.jpg";
import main3 from "./assets/menu-main-3.jpg";
import dessert1 from "./assets/menu-dessert-1.jpg";
import dessert2 from "./assets/menu-dessert-2.jpg";
import dessert3 from "./assets/menu-dessert-3.jpg";
 const body = document.querySelector("body");




const content = document.querySelector("#content");
const menu = ()=>{
    if(!content) return;
    body.style.backgroundImage=`url(${menuimg})`;
    content.innerHTML = ` <div class="hero-box">
  <h1 class="hero-text">Menu</h1>


  <h3 class="menu">Starters</h3>
  <div class="grid-box">
    <div class="box">
      <h3>Pumpkin velouté with roasted hazelnuts</h3>
      <img src="${starter1}" alt="Pumpkin Velouté" width="300" height="200">
    </div>
    <div class="box">
      <h3>Sea bream carpaccio with lime zest</h3>
      <img src="${starter2}" alt="Sea Bream Carpaccio" width="300" height="200">
    </div>
    <div class="box">
      <h3>Nomad Salad (arugula, dates, fresh goat cheese)</h3>
      <img src="${starter3}" alt="Nomad Salad" width="300" height="200">
    </div>
  </div>


  <h3 class="menu">Main Courses</h3>
  <div class="grid-box">
    <div class="box">
      <h3>Lamb tagine with apricots & almonds (served with aromatic couscous)</h3>
      <img src="${main1}" alt="Lamb Tagine" width="300" height="200">
    </div>
    <div class="box">
      <h3>Roasted sea bass fillet, sweet potato purée & saffron sauce</h3>
      <img src="${main2}" alt="Sea Bass Fillet" width="300" height="200">
    </div>
    <div class="box">
      <h3>Homemade fresh pasta with pistachio pesto & creamy burrata</h3>
      <img src="${main3}" alt="Fresh Pasta" width="300" height="200">
    </div>
  </div>

  <h3 class="menu">Desserts</h3>
  <div class="grid-box">
    <div class="box">
      <h3>Chocolate fondant with cardamom heart</h3>
      <img src="${dessert1}" alt="Chocolate Fondant" width="300" height="200">
    </div>
    <div class="box">
      <h3>Fig tart with light lavender cream</h3>
      <img src="${dessert2}" alt="Fig Tart" width="300" height="200">
    </div>
    <div class="box">
      <h3>Homemade ice cream – date & orange blossom flavor</h3>
      <img src="${dessert3}" alt="Ice Cream" width="300" height="200">
    </div>
  </div>
</div>


`
}
    export default menu