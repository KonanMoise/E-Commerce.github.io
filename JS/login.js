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

        window.location.replace("https://konanmoise.github.io/E-Commerce.github.io/UserHtml/indexCon.html");
        console.log(typeof result)
    }
    else{
        document.querySelector('#erreur').textContent = "ERREUR! Vos informations sont incorrect."
        // window.location.reload()
    }
   
})

btnCon.addEventListener('submit', (e)=>{
    e.preventDefault()

})
