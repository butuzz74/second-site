const workCards = document.querySelectorAll('.work-cards')
// const cardeds1 = document.querySelector("#cards1");
// const cardeds2 = document.querySelector("#cards2");
// const cardeds3 = document.querySelector("#cards3");
// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");

workCards.forEach(elem=>{
const cet = elem.querySelector('.cards')
const but = elem.querySelector('.buttons')
slider(cet, but)
}
)

function slider(cards, buttons) {
  const len = cards.querySelectorAll(".img");

  let n = 0;
  buttons.addEventListener("click", moveImg);
  function moveImg(event) {
    if (event.target.classList.contains("btn-next")) {
      buttons.lastElementChild.removeAttribute("disabled");
      if (n < len.length - 1) {
        cards.style.transform = `translateX(-${(1 + n) * 400}px)`;
        n++;
      } else {
        event.target.setAttribute("disabled", true);
      }
    } else if (event.target.classList.contains("btn-prev")) {
      buttons.firstElementChild.removeAttribute("disabled");
      if (n > 0) {
        --n;
        cards.style.transform = `translateX(-${n * 400}px)`;
      } else {
        event.target.setAttribute("disabled", true);
      }
    }
  }
}
// slider(cardeds1, btn1);
// slider(cardeds2, btn2);
// slider(cardeds3, btn3);
