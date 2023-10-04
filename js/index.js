const url = "../data.json";
const tabs = document.querySelectorAll(".tab");
const tabImg = document.querySelectorAll(".tab img");
const tabH2 = document.querySelectorAll(".tab h2");
const tabSpan = document.querySelectorAll(".tab p span");

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i <= tabs.length - 1; i++) {
      tabImg[i].setAttribute("src", json[i].icon);
      tabH2[i].innerText = json[i].category;
      tabSpan[i].innerText = json[i].score;
    }
  });
