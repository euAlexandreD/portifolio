const buttonTudum = document.querySelector(".button-tudum");

buttonTudum.addEventListener("click", function () {
  const tudum = document.querySelector(".audio");
  tudum.play();
});
