var images= ["img/1.png","img/2.png","img/3.png","img/4.png"];
var caption= ["caption 1","caption 2","caption 3","caption 4"];
var description=["Description 1","Description 2","Description 3","Description 4"]

i=0;
var n;
function load(n){
    i=i+n;
    if(i<0){
        i=images.length-1;
    }
    else if(i>images.length-1){
        i=0;
    }
    document.getElementById('img').setAttribute("src",images[i]);
    document.getElementById('text').innerText=caption[i];
    document.getElementById('desc').innerText=description[i];
}

