
// Logique du button ajouter
// let btnPlus = document.querySelector('.plus'),
// btnMinus = document.querySelector('.minus');

// btnPlus.addEventListener('click', ()=>{
//     document.querySelector('.quantite').value = parseInt(document.querySelector('.quantite').value) + 1;
//     subTotal();
// });

// btnMinus.addEventListener('click', ()=>{
//     if (document.querySelector('.quantite').value > 0){
//         document.querySelector('.quantite').value = parseInt(document.querySelector('.quantite').value) - 1;
//         subTotal();
//     }
// });

// function subTotal(){
//     let prix = parseInt(document.querySelector(".prix").innerText);
//     let quantite = parseInt(document.querySelector(".quantite").value);
//     let subT = prix*quantite

//     document.querySelector(".prix").innerText = subT
// }




// Logique du panier

// class Article{
//     constructor(){
//         let article = localStorage.getItem("article");
//         if (article == null){
//             this.article = []; 
//         } else{
//             this.article = JSON.parse(article);
//         }
//     }

//     save(){
//         localStorage.setItem("article", JSON.stringify(this.article));
//     }

//     add(product){
//         let foundProduct = this.article.find(p => p.id == product.id);
//         if (foundProduct != undefined){
//             foundProduct.quantite++;
//         } else{
//             product.quantite = 1;
//             this.article.push(product);
//         }
//         this.save();
//     }
    
//     remove(){
//         this.article = this.article.filtre(p => p.id == product.id);
//         this.save();    
//     }


//     changeQuantity(product, quantite){
//         let foundProduct = this.article.find(p => p.id == product.id);
//         if (foundProduct != undefined){
//             foundProduct.quantite += quantite;
//             if (foundProduct.quantite <= 0){
//                 remove(foundProduct);
//             } else{
//                 save();
//             }
//         }
//     }

//     getNumberArticle(){
//         let number = 0;
//         for (let item of this.article){
//             number += item.quantite;
//         }
//         return number;
//     }

//     getTotalPrice(){
//         let total = 0;
//         for (let item of this.article){
//             total += item.quantite * item.prix;
//         }
//         return total;
//     }
// }


// Logique form

// let btnIns = document.querySelector(".butIns");


// btnIns.addEventListener('click', ()=>{

//     // stocker dans le Local Storage
//     localStorage.setItem("Nom", document.querySelector("#nom").value);
//     localStorage.setItem("Prénom", document.querySelector("#prenom").value);
//     localStorage.setItem("E-mail", document.querySelector("#email").value);
//     localStorage.setItem("Mot de passe", document.querySelector("#motDePasse").value);
//     localStorage.setItem("Confirme Mot de passe", document.querySelector("#confirmeMotDePasse").value);
//     console.log(document.querySelector("#nom").value);

//     // récupérer et afficher les données sur la page
//     document.querySelector("#fullName").innerHTML = localStorage.getItem("Nom");
//     console.log(document.querySelector("#fullName").innerHTML)
// });