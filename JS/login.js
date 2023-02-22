// localStorage.setItem("E-mail", document.querySelector("#emailCon").value);
// localStorage.setItem("Mot de passe", document.querySelector("#motDePasseCon").value);
let btnCon = document.querySelector("#btnCon");

const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    tabUser = JSON.parse(localStorage.getItem('userList'))
    let result;
    tabUser.forEach(element => {
        if (
            document.querySelector("#emailCon").value === element.email &&
            document.querySelector("#motDePasseCon").value === element.motdepasse
            
            
        ){
          result = element;
          console.log(element)
        }
        
    });

    console.log(typeof result)
    if (typeof result !== "undefined"){

        window.location.replace("http://127.0.0.1:5500/UserHtml/indexCon.html");
        console.log(typeof result)
    }
    else{
        window.location.reload()
    }
   
})

btnCon.addEventListener('submit', (e)=>{
    e.preventDefault()

})
