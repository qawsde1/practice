menu.onclick = function myFunction(){
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const swiper = new Swiper('.swiper-container',{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})


