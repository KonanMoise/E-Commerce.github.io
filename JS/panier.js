

// Logique Ajouter o panier
let AjoutPan = document.querySelector("#AjoutPan");

AjoutPan.addEventListener('click', ()=>{
    const panierList = JSON.parse(localStorage.getItem('panierList')) || []
    let image = document.querySelector("img").getAttribute('src');
    let nom = document.querySelector(".nomARt").innerHTML;
    let prix = document.querySelector(".prix").innerHTML;
    let quantite = document.querySelector(".quantite").value;

    let article = {
        image,
        nom,
        prix,
        quantite
    }

    panierList.push(article)
    localStorage.setItem('panierList', JSON.stringify(panierList))
});



