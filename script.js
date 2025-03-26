fetch(Url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      console.log(business[i].name);
      console.log(business[i].address);
      console.log(business[i].imageurl);
      console.log(business[i].description);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      // Adds a classname to the section element above
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);
      document.querySelector("div.cards").appendChild(card);
      let h4 = document.createElement("h4");
      h4.textContent = business[i].address;
      card.appendChild(h4);
      let h6 = document.createElement("h6");
      h6.textContent = business[i].imageurl;

      let img = document.createElement("img");
      img.src = business[i].imageurl;
      img.alt = business[i].name;
      card.appendChild(img);
      let h3 = document.createElement("h3");
      h3.textContent = business[i].description;
      card.appendChild(h3);

      // Create the image location, you can look up how to add image using javascript

      // Include a business location

      // Include a business Description
      // Add the card to the container
      cards.appendChild(card);

      // Apply CSS to style the cards in a 3x3 grid
      cards.style.display = "grid";
      cards.style.gridTemplateColumns = "repeat(3, 1fr)";
      cards.style.gap = "20px";
      // Add a border to the card
      card.style.border = "8px solid rgb(35, 237, 255)";
      card.style.borderRadius = "8px";
      card.style.padding = "16px";
      // Center align all content inside the card
      card.style.textAlign = "center";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";
      card.style.justifyContent = "center";
    }
  });
