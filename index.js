

let url="https://api.escuelajs.co/api/v1/products";

async function getData(){
    try{
        let res=await fetch(url);
        let out=await res.json();
        displayCard(out)
    }
    catch(err){
        alert(err);
    }
}
getData();

function displayCard(out){
    console.log(out);
    out.forEach(elem => {
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.setAttribute("src",elem.images)

        let h1=document.createElement("p")
        h1.innerText="Min 60% off"
        
        let sale=document.createElement("h3")
        sale.innerText="Budget Buys"


        div.append(image,h1)
       
        document.querySelector(".product").append(div)
        
    });
}

var counter=1;
setInterval(function(){
    document.getElementsByClassName("carousel" + counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);

