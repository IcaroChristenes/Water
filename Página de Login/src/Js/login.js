const btn = document.querySelector(".card-btn");

btn.addEventListener("click", togleLogin);

function togleLogin() {
  const login = document.querySelector(".forms-login");
  const register = document.querySelector(".forms-register");

  register.classList.toggle("active");
  login.classList.toggle("remove");

  if (register.classList.contains("active")) {
    btn.textContent = "login";
  } else {
    btn.textContent = "cadastre";
  }
}
