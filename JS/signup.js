// Logique form inscription
let btnIns = document.querySelector(".butIns");

btnIns.addEventListener('click', ()=>{

    const userList = JSON.parse(localStorage.getItem('userList')) || []

    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let motdepasse = document.querySelector("#motDePasse").value;

    let user = {
        nom: nom,
        prénom: prenom,
        email: email,
        motdepasse: motdepasse
    }

    userList.push(user)
    localStorage.setItem('userList', JSON.stringify(userList))
});