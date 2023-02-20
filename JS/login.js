
// localStorage.setItem("E-mail", document.querySelector("#emailCon").value);
// localStorage.setItem("Mot de passe", document.querySelector("#motDePasseCon").value);
let btnCon = document.querySelector("#btnCon");

const form = document.querySelector('form')
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('form submit')

    console.log("debut");
    console.log(document.querySelector("#emailCon").value)
    console.log(document.querySelector('#motDePasseCon').value)
    console.log(localStorage.getItem('Mot de passe'))
    console.log(localStorage.getItem("E-mail"))
    if (
        document.querySelector("#emailCon").value === localStorage.getItem("E-mail") &&
        document.querySelector("#motDePasseCon").value === localStorage.getItem("Mot de passe")
    ){
        window.location.href = "http://localhost:5500/HTML/userCon.html";
    } else{
        window.location.href = "http://localhost:5500/HTML/login.html";
    }
} )

btnCon.addEventListener('submit', (e)=>{
    e.preventDefault()

})
