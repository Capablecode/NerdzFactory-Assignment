// const factElement = document.getElementById("fact");
// const generateFactBtn = document.getElementById("generate-fact-btn");

// generateFactBtn.addEventListener("click", getCatFact);

// function getCatFact() {
//   fetch("https://catfact.ninja/facts")
//     .then((response) => response.json())
//     .then((data) => {
//       const fact = data.data[0].fact;
//       factElement.innerText = fact;
//     })
//     .catch((error) => console.log("Error:", error));
// }

// function getCatFact() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", );
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       const fact = response.data[0].fact;
//       factElement.innerText = fact;
//     } else {
//       console.error("Error:", xhr.statusText);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Error:", xhr.statusText);
//   };
//   xhr.send();
// }
// console.log("JavaScript code is running");
// const generateFactBtn = document.getElementById("generate-fact-btn");
// console.log("generateFactBtn:", generateFactBtn);
// generateFactBtn.addEventListener("click", getCatFact);

const factElement = document.getElementById("fact");
const generateFactBtn = document.getElementById("generate-fact-btn");
let index = 0;

generateFactBtn.addEventListener("click", function () {
  const req = new XMLHttpRequest();
  req.open("GET", "https://catfact.ninja/facts");
  req.onload = function () {
    if (req.status === 200) {
      const response = JSON.parse(req.responseText);
      const facts = response.data;
      if (index >= facts.length) {
        index = 0;
      }
      const fact = facts[index].fact;
      factElement.innerText = fact;
      index++;
    }
  };
  req.send();
});
//number 15
