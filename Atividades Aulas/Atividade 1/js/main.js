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
const title = document.createElement('h1');
const description = document.createElement('p');
const price = document.createElement('span');

xmlSizeContent = documentXml.getElementsByTagName('produto').length;
let xmlTitle = documentXml.getElementsByTagName('titulo');
let xmlDescription = documentXml.getElementsByTagName('descricao');
let xmlPrice = documentXml.getElementsByTagName('preco');


let newTitle;
let newDescription;
let newPrice; 

 function buildStructureHtml(){
    divs.forEach((element, index) => {
        newTitle = xmlTitle[index].childNodes[0].nodeValue;
        newDescription = xmlDescription[index].childNodes[0].nodeValue;
        newPrice = xmlPrice[index].childNodes[0].nodeValue;

        divs[index].innerHTML = `
            <h1>${newTitle}</h1>
            <p>${newDescription}</p>
            <span>${newPrice}</span>`
        
    });
}

buildStructureHtml();