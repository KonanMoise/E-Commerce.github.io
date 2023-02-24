
// Changer l'image au click sur la page details
let TetDet = document.querySelectorAll('.TeT');
let nomARt = document.querySelector('.nomARt');
let prix = document.querySelector(".static_price");
let parAjout = document.querySelector('.prix');

TetDet.forEach(item => {
    item.addEventListener('click', (e) => {
        const parent = e.target.closest('.c')
        const nomA = parent.querySelector('.elem .TeT');
        const prixA = parent.querySelector('.elem .prixEle');
        const src = parent.querySelector('img').src
        let imageDet = document.querySelector('.image img');
        console.log('source : ', src)
        imageDet.src = src;
        nomARt.innerHTML = nomA.textContent;
        prix.textContent = prixA.innerHTML;
        parAjout.textContent = prixA.innerHTML; 
    })
})



// Logique du panier

let nom = document.querySelector('.nomARt').innerHTML;
let prixAjout = document.querySelector('.static_price').innerHTML;
let quntiteAjout = document.querySelector('.quantite').value;

console.log(nom)
console.log(prixAjout)
console.log(quntiteAjout)

let product = {
    nom: nom,
    prix: prixAjout,
    quantite: quntiteAjout,
}

function saveArticle(article){
    localStorage.setItem("article", JSON.stringify(article));
}

function getArticle(){
    let article = localStorage.getItem("article");
    if (article == null){
        return [];
    } else{
        return JSON.parse(article);
    }
}

function addArticle(product){
    let article = getArticle();
    let foundProduct = article.find(p => p.nom == product.nom);
    if (foundProduct != undefined){
        foundProduct.quantite++;
    } else{
        product.quantite = 1;
        article.push(product);
    }
    saveArticle(article);
}

function removeArticle(){
    let article = getArticle();
    article = article.filter(p => p.id == product.id);
    saveArticle();
}

function changeQuantity(product, quantite){
    let article = getArticle();
    let foundProduct = article.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantite += quantite;
        if (foundProduct.quantite <= 0){
            removeArticle(foundProduct);
        } else{
            saveArticle();
        }
    }
}

function getNumberArticle(){
    let article = getArticle();
    let number = 0;
    for (let item of article){
        number += item.quantite;
    }
    return number;
}

function getTotalPrice(){
    let article = getArticle();
    let total = 0;
    for (let item of article){
        total += item.quantite * item.prix;
    }
    return total;
}

let ajoutPan = document.querySelector('#AjoutPan');
ajoutPan.addEventListener('click', ()=>{
    addArticle(product);
    confirm("Le produit à été ajouter!!");
    let panTop = document.querySelector('.bloc_right .panTop').innerHTML
    panTop = parseInt(panTop)
    panTop = panTop+1

    console.log("le toto" + panTop)
})



    







