let newTable = document.createElement("table");
let header = newTable.createTHead();
let tableBody = newTable.createTBody();
let footer = newTable.createTFoot();

newTable.appendChild(header);
newTable.appendChild(tableBody);
newTable.appendChild(footer);

document.body.appendChild(newTable);

const titles = ['Nome', 'Especie', 'País', 'N Exemplares']

const animalsContent = [
    {
        "nome": "Lobo",
        "especie": "Lobo-vermelho",
        "pais": "América do Norte",
        "exemplares": 200
      },
    {
        "nome": "Tigre",
        "especie": "Tigre-de-bengala",
        "pais": "Bangladesh, Índia",
        "exemplares": "< 2000"
      },
    {
        "nome": "Arara",
        "especie": "Ararinha-azul",
        "pais": "Brasil",
        "exemplares": "< 60"
      },
  
    {
        "nome": "Orangotango",
        "especie": "Orangotango-de-sumatra",
        "pais": "Indonésia",
        "exemplares": 6000
      },

    {
        "nome": "Zebra",
        "especie": "Zebra-de-Grévy",
        "pais": "Quênia",
        "exemplares": 2400
      },

    {
        "nome": "Gorila",
        "especie": "Gorila-das-montanhas",
        "pais": "República Democrática do Congo",
        "exemplares": 1000
      },

    {
        "nome": "Papagaio",
        "especie": "papagaio-mocho ou Kakapo",
        "pais": "Nova Zelândia",
        "exemplares": "100"
      }
]


function addAnimalsTable(animalsContent){
    const arraySize = animalsContent.length;

    for(let i = 0; i < arraySize; i++){
        let linha = document.createElement('tr')
        tableBody.appendChild(linha);
        
        let addColuna = document.createElement('td');
        linha.appendChild(addColuna);
        addColuna.textContent = animalsContent[i].nome;

        addColuna = document.createElement('td');
        linha.appendChild(addColuna);
        addColuna.textContent = animalsContent[i].especie;

        addColuna = document.createElement('td');
        linha.appendChild(addColuna);
        addColuna.textContent = animalsContent[i].pais;

        addColuna = document.createElement('td');
        linha.appendChild(addColuna);
        addColuna.textContent = animalsContent[i].exemplares;
        
    }

}

function addTitlesTable(titles){
    const arraySize = titles.length;

    let linha = document.createElement('tr')
    header.appendChild(linha);

    for(let i = 0; i < arraySize; i++){
        
        
        let addTh = document.createElement('th');
        linha.appendChild(addTh);
        addTh.textContent = titles[i];

    }

}

addTitlesTable(titles);
addAnimalsTable(animalsContent)
