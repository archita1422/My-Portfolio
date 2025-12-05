let element= document.getElementsByClassName("lines")[0];
console.log(element);
function changecolor(){
    let menu=document.querySelector(".menu");
    console.log(menu);
    menu.style="visibility:visible";
}

element.addEventListener('click', changecolor);
