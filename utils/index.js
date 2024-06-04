const buttonTudum = document.querySelector(".button-tudum");

buttonTudum.addEventListener("click", function () {
  const tudum = document.querySelector(".audio");
  tudum.play();
});

const buttonBg = document.querySelector(".button-bg");

buttonBg.addEventListener("click", () => {
  const header = document.querySelector("#cabecalho");
  header.classList.add("header-two");

  buttonBg.addEventListener("click", function () {
    const header = document.querySelector("#cabecalho");
    header.classList.remove("header-two");
  });
  return;
});
