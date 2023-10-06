const url = "data.json";
const tabs = document.querySelectorAll(".tab");
const tabImg = document.querySelectorAll(".tab img");
const tabH2 = document.querySelectorAll(".tab h2");
const tabSpan = document.querySelectorAll(".tab p span");

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((elem, i) => {
      const { category, score, icon } = elem;
      tabImg[i].setAttribute("src", icon);
      tabH2[i].innerText = category;
      tabSpan[i].innerText = score;
    });
  });
