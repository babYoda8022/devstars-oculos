
const button = document.querySelector("#menus");
const nav = document.querySelector(".nav");
var img = document.querySelector(".text").style

button.addEventListener('click', () => {
    if (nav.getAttribute('id')) {
        nav.removeAttribute('id');
    } else {
        nav.setAttribute('id', 'nav');
    }
})

function slide1() {
    img.backgroundImage = "url('./src/img/slide/slide-1.webp')";
    img.backgroundSize = "cover";
    img.backgroundRepeat= "no-repeat";
    if(window.innerWidth <= 412)
    {
        img.backgroundPosition = "-30rem";
    }else{
        img.backgroundPosition = "0";
    }
    setTimeout("slide2()", 3000);
}
function slide2() {
    img.backgroundImage = "url('./src/img/slide/slide-2.webp')";
    if(window.innerWidth <= 412)
    {
        img.backgroundPosition = "-90rem";
    }else{
        img.backgroundPosition = "-75rem";
    }
    setTimeout("slide3()", 3000);
}

function slide3() { 
    img.backgroundImage = "url('./src/img/slide/slide-3.webp')";
    if(window.innerWidth <= 412)
    {
        img.backgroundPosition = "-37rem";
    }else{

        img.backgroundPosition = "-10rem";
    }
    setTimeout("slide1()", 3000);
}

