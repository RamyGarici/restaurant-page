const content = document.querySelector("#content");
const home = ()=>{
    if(!content) return;
    content.innerHTML = `
   
        <h1 class="hero-text">The Nomad’s Table</h1>
        <p class="text">
          Welcome to The Nomad’s Table, where flavors travel beyond borders. 
          Step inside and embark on a culinary journey inspired by the caravans of the desert, 
          the markets of the Mediterranean, and the warmth of shared meals. 
          Whether you come for a quick bite, a refined dinner, or simply a moment of escape,
           our table is always open to curious souls and passionate food lovers.
        </p>
      `




}
export default home;