
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
    let prix = parseInt(document.querySelector(".static_price").innerText);
    let quantite = parseInt(document.querySelector(".quantite").value);
    let subT = eval(prix*quantite)

    console.log("le prix" + prix)
    console.log(" la quntité " + quantite)
    console.log(subT)

    document.querySelector(".prix").innerHTML = subT
}

let TetDet = document.querySelector('.TeT');

console.log(document.querySelectorAll('.TeT'))
document.querySelectorAll('.TeT').forEach(item => {
    item.addEventListener('click', (e) => {
        const parent = e.target.closest('.c')
        const src = parent.querySelector('img').src
        let imageDet = document.querySelector('.image');
        console.log(imageDet.style.background)
        console.log(src)
        imageDet.style.background = `url(${src})`
        imageDet.style.backgroundSize = 'cover'
    })
})




function save(article){
    localStorage.setItem("article", JSON.stringify(article));
}


// Logique du panier

class Article{

    save(article){
        localStorage.setItem("article", JSON.stringify(article));
    }

    add(product){
        let foundProduct = this.article.find(p => p.id == product.id);
        if (foundProduct != undefined){
            foundProduct.quantite++;
        } else{
            product.quantite = 1;
            this.article.push(product);
        }
        this.save();
    }
    
    remove(){
        this.article = this.article.filtre(p => p.id == product.id);
        this.save();    
    }


    changeQuantity(product, quantite){
        let foundProduct = this.article.find(p => p.id == product.id);
        if (foundProduct != undefined){
            foundProduct.quantite += quantite;
            if (foundProduct.quantite <= 0){
                remove(foundProduct);
            } else{
                save();
            }
        }
    }

    getNumberArticle(){
        let number = 0;
        for (let item of this.article){
            number += item.quantite;
        }
        return number;
    }

    getTotalPrice(){
        let total = 0;
        for (let item of this.article){
            total += item.quantite * item.prix;
        }
        return total;
    }
}