const url = "http://livros.letscode.dev.netuno.org:25390/services";

const uidAluno = "ffc4b689-4351-4988-99ae-23cebd450657";


window.createLivros = async function (tiragemLivro, tituloLivro, autorLivro, descricaoLivro) {
  try {
    const promise = await fetch(`${url}/livro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         aluno: {
          uid: uidAluno,
        },
        tiragem: tiragemLivro,
        titulo: tituloLivro,
        autor: autorLivro,
        descricao: descricaoLivro,
       
      }),
    });
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.listLivros = async function () {
  try {
    const promise = await fetch(`${url}/livro/lista`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        aluno: {
          uid: uidAluno
        },
      }),
    });

    if (!promise.ok) {
      return [];
    }
    const livros = await promise.json();
    localStorage.setItem("livros", JSON.stringify(livros));
    return livros;
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};


window.listLivrosByName = async function (titleLivro) {
  try {
    const promise = await fetch(`${url}/livro/lista`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: titleLivro,
        aluno: {
          uid: uidAluno
        },
      }),
    });

    if (!promise.ok) {
      return [];
    }
    const livros = await promise.json();
    localStorage.setItem("livros", JSON.stringify(livros));
    return livros;
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.deleteLivros = async function (idLivro) {
  try {
    const promise = await fetch(`${url}/livro`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aluno: {
          uid: uidAluno
        },
        uid: idLivro,
      }),
    });
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.editLivros = async function (
  idLivro,
  title,
  autor,
  descricao
) {
  try {
    const promise = await fetch(`${url}/livro`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: idLivro,
        aluno: {
          uid: uidAluno
        },
        tiragem: 1,
        titulo: title,
        autor: autor,
        descricao: descricao,
      }),
    }).catch((error) => {});

    if (!promise) {
      return [];
    }
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};
