
// Logique du button ajouter
let btnPlus = document.querySelector('.plus'),
btnMinus = document.querySelector('.minus');

btnPlus.addEventListener('click', ()=>{
    document.querySelector('.quantite').value = parseInt(document.querySelector('.quantite').value) + 1;
    subTotal();
});

btnMinus.addEventListener('click', ()=>{
    if (document.querySelector('.quantite').value > 0){
        document.querySelector('.quantite').value = parseInt(document.querySelector('.quantite').value) - 1;
        subTotal();
    }
});

function subTotal(){
    let prix = parseInt(document.querySelector(".prix").innerText);
    let quantite = parseInt(document.querySelector(".quantite").value);
    let subT = prix*quantite

    document.querySelector(".prix").innerText = subT
}


// Logique du panier


class Article{
    
}

function saveArticle(article){
    localStorage.setItem("prduct", JSON.stringify(article));
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
    let foundProduct = article.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantite++;
    } else{
        foundProduct.quantite = 1;
        article.push(product);
    }
    saveArticle(article);
}


function removeFromArticle(){
    let article = getArticle();
    article = article.filtre(p => p.id == product.id);
    saveArticle(article);    
}


function changeQuantity(product, quantite){
    let article = getArticle();
    let foundProduct = article.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantite += quantite;
        if (foundProduct.quantite <= 0){
            removeFromArticle(foundProduct);
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