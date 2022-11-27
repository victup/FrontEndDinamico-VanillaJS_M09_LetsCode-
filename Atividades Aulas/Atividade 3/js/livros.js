window.livros = async () => {
  (() => {
    const styleJS = document.createElement("script");
    styleJS.setAttribute("src", "js/styles/livrosStyle.js");
    document.body.appendChild(styleJS);
  })();

  (async () => {
   
    createLinkApiGoogle();


    const requestLivro = await listLivros();
    const listLivro =
    requestLivro.length != 0
      ? requestLivro
      : JSON.parse(localStorage.livros)

    const titlesTable = ["Tiragem", "Titulo", "Autor", "Descrição", "Excluir", "Editar"];

    const livrosContainer = document.createElement("section");
    livrosContainer.classList.add("livrosContainer");


    const main = document.querySelector("main");
    if (main) {
      main.appendChild(livrosContainer);
    } else {
      const main = document.createElement("main");
      document.body.appendChild(main);
      main.appendChild(livrosContainer);
    }

    const titlePage = document.createElement("h1");
    titlePage.textContent = "Livros";
    livrosContainer.appendChild(titlePage);
    const divButton = document.createElement("div");
    divButton.classList.add("div-btn");
    divButton.setAttribute("id", "div-btn");
    const buttonCadastrar = document.createElement("button");
    buttonCadastrar.textContent = "Novo Livro";
    buttonCadastrar.setAttribute("id", "btn-novo-livro");
    divButton.appendChild(buttonCadastrar);
    livrosContainer.appendChild(divButton);

    createFormRegisterLivro();

    createFormSearchLivros();

    const newTable = document.createElement("table");
    const headerTable = newTable.createTHead();
    const tableBody = newTable.createTBody();
    livrosContainer.appendChild(newTable);

    insertTitlesTable(headerTable, titlesTable);

    insertContentTable(listLivro);

    const button = document.querySelector("#btn_busca");
    const input = document.querySelector("#busca");

    button.addEventListener("click", async function (event) {
      event.preventDefault();
      await showLivros(input);
    });

    function createLinkApiGoogle() {
      const newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      );
      document.head.appendChild(newlink);
    }

    function createFormRegisterLivro() {

      const divRegister = document.createElement("div");
      divRegister.classList.add("div-register");
      livrosContainer.appendChild(divRegister);

      const form = document.createElement("form");
      form.setAttribute("action", "");
      form.setAttribute("method", "POST");
      form.setAttribute("id", "form-register");

      const inputTiragem = document.createElement("input");
      inputTiragem.classList.add("campo");
      inputTiragem.setAttribute("type", "text");
      inputTiragem.setAttribute("id", "tiragem");
      inputTiragem.setAttribute("placeholder", "Digite a tiragem");

      const inputTitleLivro = document.createElement("input");
      inputTitleLivro.classList.add("campo");
      inputTitleLivro.setAttribute("type", "text");
      inputTitleLivro.setAttribute("id", "tituloLivro");
      inputTitleLivro.setAttribute("placeholder", "Digite o Titulo do Livro");

      const inputAuthorName = document.createElement("input");
      inputAuthorName.classList.add("campo");
      inputAuthorName.setAttribute("type", "text");
      inputAuthorName.setAttribute("id", "nomeAutor");
      inputAuthorName.setAttribute("placeholder", "Digite o nome do autor");

      const inputDescriptionLivro = document.createElement("input");
      inputDescriptionLivro.classList.add("campo");
      inputDescriptionLivro.setAttribute("type", "text");
      inputDescriptionLivro.setAttribute("id", "descricaoLivro");
      inputDescriptionLivro.setAttribute("placeholder", "Digite a descrição do livro");

      const button = document.createElement("button");
      button.setAttribute("id", "btn-cadastrar-livro");
      button.textContent = "Cadastrar Livro";

      const buttonEdit = document.createElement("button");
      buttonEdit.setAttribute("id", "btn-alterar-livro");
      buttonEdit.style.display = "none";
      buttonEdit.textContent = "Alterar Livro";

      divRegister.appendChild(form);
      form.appendChild(inputTiragem);
      form.appendChild(inputTitleLivro);
      form.appendChild(inputAuthorName);
      form.appendChild(inputDescriptionLivro);
      form.appendChild(button);
      form.appendChild(buttonEdit);
    }

    function createFormSearchLivros() {
      const form = document.createElement("form");
      form.setAttribute("action", "");
      form.setAttribute("method", "POST");

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Pesquise por titulo, autor ou descrição.");
      input.setAttribute("id", "busca");
      input.classList.add("campo");

      const button = document.createElement("button");
      button.textContent = "Buscar";
      button.setAttribute("id", "btn_busca");

      livrosContainer.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    }

    function insertTitlesTable(headerTable, titlesTable) {
      for (let i = 0; i < titlesTable.length; i++) {
        const headerCell = document.createElement("th");
        headerTable.appendChild(headerCell);
        headerCell.textContent = titlesTable[i];
      }
    }

    function insertContentTable(listLivro) {
      for (let i = 0; i < listLivro.length; i++) {
        const rowTable = tableBody.insertRow();

        Object.values(listLivro[i]).forEach((item) => {
          const headerCell = document.createElement("td");
          rowTable.appendChild(headerCell);
          headerCell.textContent = item;
        });

        rowTable.firstChild.classList.add("idLivro");

        createIcon("delete", rowTable);
        createIcon("draw", rowTable);
      }
    }

    function createIcon(icon, rowTable) {
      const cell = document.createElement("td");
      const iconGoogle = document.createElement("span");

      if (icon == "delete") {
        iconGoogle.addEventListener("dblclick", deleteLivro);
      } else {
        iconGoogle.addEventListener("dblclick", editLivroLocal);
      }

      function editLivroLocal() {
        const itemEdit = this.parentNode.parentNode.querySelectorAll("td");
        const idLivroTable = itemEdit[0].textContent;
        const tiragemLivroTable = itemEdit[1].textContent;
        const tituloLivroTable = itemEdit[2].textContent;
        const autorLivroTable = itemEdit[3].textContent;
        const descricaoLivroTable = itemEdit[4].textContent;

        const tituloLivroInput = document.querySelector("#tituloLivro");
        const tiragemLivroInput = document.querySelector("#tiragem");
        const autorLivroInput = document.querySelector("#nomeAutor");
        const descricaoLivroInput = document.querySelector("#descricaoLivro");
        const buttonCreateLivro = document.querySelector(
          "#btn-cadastrar-livro"
        );
        const buttonHide = document.querySelector("#btn-novo-livro");
        const divRegister = document.querySelector(".div-register");
        const buttonEdit = document.querySelector("#btn-alterar-livro");

        buttonHide.textContent = "Esconder Form";
        divRegister.style.display = "block";
        buttonCreateLivro.style.display = "none";

        if (buttonEdit["display"] == "block") {
          buttonEdit.style.display = "none";
        } else {
          buttonEdit.style.display = "block";
        }

        tiragemLivroInput.value = tiragemLivroTable;
        tituloLivroInput.value = tituloLivroTable;
        autorLivroInput.value = autorLivroTable;
        descricaoLivroInput.value = descricaoLivroTable;

        


        buttonEdit.addEventListener("click", async function (event) {
          event.preventDefault();
          if(tiragemLivroInput.value == ""){
            alert("Tiragem não pode ser um campo vazio");
            return;
          }
          if(tituloLivroInput.value == ""){
            alert("Titulo não pode ser um campo vazio");
            return;
          } 
          if(autorLivroInput.value == ""){
            alert("Autor não pode ser um campo vazio");
            return;
          } 
          if(descricaoLivroInput.value == ""){
            alert("Descrição não pode ser um campo vazio");
            return;
          }
          await editLivros(
            idLivroTable,
            tituloLivroInput.value,
            autorLivroInput.value,
            descricaoLivroInput.value
          );
          await alert(
            "Livro " + tituloLivroInput.value + "alterado com sucesso!"
          );
          livrosRenderAux();
        });
      }


      iconGoogle.textContent = icon;
      iconGoogle.setAttribute("class", "material-symbols-outlined");

      cell.appendChild(iconGoogle);
      rowTable.appendChild(cell);
    }

    
    function selectBtnNovaCategoria() {
      const btnNovaCategoria = document.querySelector("#btn-novo-livro");
      const btnEditCategoria = document.querySelector("#btn-alterar-livro");
      const btnCadastrarCategoria = document.querySelector("#btn-cadastrar-livro");

      btnNovaCategoria.addEventListener("click", function (event) {
        event.preventDefault();

        if (btnCadastrarCategoria.style.display == "none") {
          btnCadastrarCategoria.style.display = "block";
          btnEditCategoria.style.display = "none";
        }
      });
    }

    selectBtnNovaCategoria();

    async function deleteLivro(event) {
      const itemDelete = this.parentNode.parentNode.querySelectorAll("td");
      const tituloLivroTable = itemDelete[2].textContent;

      await deleteLivros(itemDelete[0].textContent);
      livrosRenderAux();
        
      
    }

    window.showLivros = async function (input) {
    

      const result = await listLivrosByName(input.value);

      clearTable();

      if (result.length) insertContentTable(result);
      else insertContentTable(listLivro);
    };

    function clearTable() {
      const trs = tableBody.querySelectorAll("tr");
      for (i = 0; i < trs.length; i++) {
        trs[i].remove();
      }
    }

    async function registerLivro() {

      const button = document.querySelector("#btn-cadastrar-livro");
      
      

      button.addEventListener("click", async function (event) {
        event.preventDefault();

        const tiragem = parseInt(document.querySelector("#tiragem").value);
        const titulo = document.querySelector("#tituloLivro").value;
        const autor = document.querySelector("#nomeAutor").value;
        const descricao = document.querySelector("#descricaoLivro").value;

        if(tiragem == ""){
          alert("Tiragem não pode ser um campo vazio");
          return;
        }
        if(titulo == ""){
          alert("Titulo não pode ser um campo vazio");
          return;
        } 
        if(autor == ""){
          alert("Autor não pode ser um campo vazio");
          return;
        } 
        if(descricao == ""){
          alert("Descrição não pode ser um campo vazio");
          return;
        }
    
        await createLivros(
          parseInt(tiragem), 
          titulo, 
          autor, 
          descricao
        );

        alert("Livro Cadastrado com sucesso.");
        livrosRenderAux();

      });

    }

    registerLivro();


    window.hiddenFormRegister = function (buttonSelect, container, item) {
      const button = buttonSelect;
      const containerRegister = container;
      const propriedadesContainerRegister = containerRegister.style;
      containerRegister.style.display = "none";

      button.addEventListener("click", function (event) {
        event.preventDefault();

        if (propriedadesContainerRegister["display"] == "none") {
          containerRegister.style.display = "block";
          button.textContent = "Voltar";
        } else {
          containerRegister.style.display = "none";
          button.textContent = item;
        }
      });
    };

    hiddenFormRegister(
      document.querySelector("#btn-novo-livro"),
      document.querySelector(".div-register"),
      "Novo Livro"
    );
  })();
};

livros();

async function livrosRenderAux() {
  const main = document.querySelector("main");
  const section = document.querySelector("section.livrosContainer");
  main.removeChild(section);
  await livros("no hide");
}
