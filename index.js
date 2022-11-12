
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

        let title=document.createElement("h3")
        title.innerText=elem.title
        

        let price=document.createElement("p")
        price.innerText="RS-"+elem.price

        let des=document.createElement("p")
        des.innerText=elem.description

        let btn=document.createElement("button")
        btn.innerText="Add to Cart"

        div.append(image,title,price,des,btn)
        document.querySelector(".catalog").append(div)
    });
}