const textXML = `
<produtos>
    <produto>
        <titulo>Camiseta Esportiva</titulo>
        <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
        <preco>35,50</preco>
    </produto>
    <produto>
        <titulo>Bermuda Jeans</titulo>
        <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
        <preco>54,62</preco>
    </produto>
    <produto>
        <titulo>Calça Moletom</titulo>
        <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
        <preco>79,90</preco>
    </produto>
</produtos>
`
const parser = new DOMParser();
const documentXml = parser.parseFromString(textXML, 'text/xml');

const divs = document.querySelectorAll('div');

let xmlTitle = documentXml.getElementsByTagName('titulo');
let xmlDescription = documentXml.getElementsByTagName('descricao');
let xmlPrice = documentXml.getElementsByTagName('preco');

let newTitle;
let newDescription;
let newPrice;

function buildStructureHtml() {
    let title;
    let description;
    let price;
    
    divs.forEach((element, index) => {

        title = document.createElement('h1');
        description = document.createElement('p');
        price = document.createElement('span');

        newTitle = xmlTitle[index].childNodes[0].nodeValue;
        divs[0].appendChild(title).textContent = newTitle;

        newDescription = xmlDescription[index].childNodes[0].nodeValue;
        divs[0].appendChild(description).textContent = newDescription;

        newPrice = xmlPrice[index].childNodes[0].nodeValue;
        divs[0].appendChild(price).textContent = newPrice;

    });
}

buildStructureHtml();