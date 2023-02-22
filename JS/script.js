
// Logique du button ajouter
let btnPlus = document.querySelector('.plus'),
btnMinus = document.querySelector('.minus');

btnPlus.addEventListener('click', ()=>{
    let quntite = document.querySelector('.quantite').value;
    quntite = parseInt(quntite) + 1;
    subTotal();
});

btnMinus.addEventListener('click', ()=>{
    if (quntite > 0){
        quntite = parseInt(quntite) - 1;
        subTotal();
    }
});

// Somme totale
function subTotal(){
    let prix = parseInt(document.querySelector(".static_price").innerText);
    let quantite = parseInt(document.querySelector(".quantite").value);
    let subT = eval(prix*quantite)

    console.log("le prix" + prix)
    console.log(" la quntité " + quantite)
    console.log(subT)

    document.querySelector(".prix").innerHTML = subT
}


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
    save();
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
})


// recuperer les data du details 
// function redirectpanier(){
//     let btnAjout = document.querySelector('.btn-detail');
//     btnAjout.addEventListener('click', (e)=>{
//         const dataList = JSON.parse(localStorage.getItem('dataList')) || [];
//         let nomArPan = document.querySelector('.nomARt').innerHTML;
//         let prixArPan = document.querySelector('.prix').innerHTML;
//         // let afficheR = document.querySelector('.prixArPan');
//         let dataPanier = {
//             nomPan: nomArPan,
//             prixPan: prixArPan
//         }

//         dataList.push(dataPanier)
//         localStorage.setItem('dataList', JSON.stringify(dataList))
//         window.location.replace("http://127.0.0.1:5500/UserHtml/panierCon.html");

//         if (window.location.href("http://127.0.0.1:5500/UserHtml/panierCon.html")){
//             data = JSON.parse(localStorage.getItem('dataList'))
//             let prix = document.querySelector('.prixArPan');
//             let nom = document.querySelector('.nonArPan');
//             data.forEach(item => {
//                 prix.innerHTML = item.prixPan;
//                 nom.innerHTML = item.nomPan;
//             }) 
//         }
//     });
// }


    



    







