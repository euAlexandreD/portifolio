const buttonTudum = document.querySelector(".button-tudum");

buttonTudum.addEventListener("click", function () {
  const tudum = document.querySelector(".audio");
  tudum.play();
});

const buttonBg = document.querySelector(".button-bg");

buttonBg.addEventListener("click", () => {
  const header = document.querySelector(".header");

  header.style.background = "url(../assets/7_Navegando.gif)";
});
