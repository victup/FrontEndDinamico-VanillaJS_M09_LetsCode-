window.hiddenFormRegister = function (
  buttonSelect,
  buttonSecondary,
  buttonEdit,
  container,
  item
) {
  const button = buttonSelect;
  const containerRegister = container;
  const buttonEditUpdate = buttonEdit;
  const propriedadesContainerRegister = containerRegister.style;
  containerRegister.style.display = "none";
  buttonEditUpdate.style.display = "none";
  buttonSecondary.style.display = "block";

  button.addEventListener("click", function (event) {
    event.preventDefault();
    clearForm();
    titleRegistryForm();

    if (propriedadesContainerRegister["display"] == "none") {
      containerRegister.style.display = "block";
      buttonEditUpdate.style.display = "none";
      buttonSecondary.style.display = "block";
      button.textContent = "Voltar";
    } else {
      containerRegister.style.display = "none";
      button.textContent = item;
      document.getElementById("edit-image").disabled = false;
    }
  });
};

window.hiddenSection = (event) => {
  event.preventDefault();
  const className = event.path[0].parentNode.classList;
  const home = document.querySelector(".homeContainer");
  if (className == "Home") {
    category.classList.add("hide");
  }
};

window.hiddenFormEdit = function (
  buttonPrincipal,
  buttonSecondary,
  buttonEdit,
  container
) {
  const containerEdit = container;
  const buttonEditUpdate = buttonEdit;
  const propriedadesContainerEdit = containerEdit.style;
  buttonSecondary.style.display = "none";
  buttonEditUpdate.style.display = "block";

  if (propriedadesContainerEdit["display"] == "none") {
    containerEdit.style.display = "block";
    buttonPrincipal.textContent = "Voltar";
  } else {
    containerEdit.style.display = "none";
    buttonPrincipal.textContent = "Cadastrar";
  }
};

window.clearForm = function () {
  const trs = document.querySelectorAll(".campo");
  for (let i = 0; i < trs.length; i++) {
    trs[i].value = "";
  }
};
