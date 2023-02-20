// Logique form

let btnIns = document.querySelector(".butIns");

btnIns.addEventListener('click', ()=>{

    // stocker dans le Local Storage
    localStorage.setItem("Nom", document.querySelector("#nom").value);
    localStorage.setItem("Prénom", document.querySelector("#prenom").value);
    localStorage.setItem("E-mail", document.querySelector("#email").value);
    localStorage.setItem("Mot de passe", document.querySelector("#motDePasse").value);
    localStorage.setItem("Confirme Mot de passe", document.querySelector("#confirmeMotDePasse").value);
    
    // récupérer et afficher les données sur la page
    // document.querySelector("#fullName").innerHTML = localStorage.getItem("Nom");
    // console.log(document.querySelector("#fullName").innerHTML);
});