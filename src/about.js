import aboutimg from "./assets/about.jpg"

const body = document.querySelector("body");
const content = document.querySelector("#content");

const about = () => {
  if (!content) return;

  body.style.backgroundImage = `url(${aboutimg})`;

  content.innerHTML = `
    <h1 class="about-title hero-text">About Us</h1>

    <p class="about-intro">
      The Nomad’s Table was born from a journey across the Mediterranean, and Europe. 
      Its founder, deeply passionate about the diversity of culinary traditions, dreamed of creating 
      a place where every dish tells a story and every flavor carries a memory.
    </p>

    <h2 class="about-subtitle">Our Philosophy</h2>
    <ul class="about-list">
      <li><strong>Authenticity:</strong> we carefully select seasonal, local ingredients, working hand-in-hand with farmers, fishermen, and artisans who share our respect for nature and quality.</li>
      <li><strong>Journey:</strong> our menu is inspired by the spice routes and nomadic traditions, from Moroccan tagines to Mediterranean seafood.</li>
      <li><strong>Hospitality:</strong> food is more than nourishment—it is connection. Our space is designed for sharing and friendship.</li>
    </ul>

    <p class="about-conclusion">
      Here, dining is not only about what you eat—it is about what you feel. 
      We invite you to slow down, to savor each bite, and to let your senses travel.
    </p>
  `;
};

export default about;
