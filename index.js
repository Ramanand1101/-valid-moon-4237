var counter=1;
setInterval(function(){
    document.getElementsByClassName("carousel" + counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);