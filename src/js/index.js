const button = document.querySelector(".fa-user");
const containerBoxmodal = document.querySelector(".container-boxmodal");
const btnClose = document.querySelector(".container-boxmodal-close");
button.onclick = () => {
  containerBoxmodal.style.display = "block";
};
btnClose.addEventListener("click", () => {
  containerBoxmodal.style.display = "none";
});
