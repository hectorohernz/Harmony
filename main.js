
// Slider Expansion selector 
var moblieMenu = document.querySelector(".moblie-nav-bar");

// Hamburger Animation Selector 
var menuTopBar = document.querySelector(".top");
var menuMiddleBar = document.querySelector(".middle");
var menuBottomBar = document.querySelector(".bottom");
// No scroll 

// Hamburger Animation 
function hamburgerAnim(){
         menuBtn.classList.toggle("hamburger-animate");
         menuTopBar.classList.toggle("top-animate");
         menuMiddleBar.classList.toggle("middle-animate");
        menuBottomBar.classList.toggle("bottom-animate");
}

// Click event on hamburger 

var menuBtn = document.querySelector(".moblie-hamburger-icon");

menuBtn.addEventListener("click", function(){
        moblieMenu.classList.toggle("expanded")
         hamburgerAnim();
});

 
// Shop By Category Filter Bar 

var list = document.querySelector(".dropdown");

function filterByGenre(genre){ // Initilze a function for 
    var albums = document.querySelectorAll(".individual__product");
    for(i = 0; i < albums.length; i++){
       var el = albums[i];
       var elGenre = el.getAttribute("data-genre")
       var price = el.getAttribute("data-total");
       var trending = el.getAttribute("data-trending")
       var exclusives = el.getAttribute("data-exclusive");
       var sale = el.getAttribute("data-sale");
       
        if(elGenre === genre || !genre){
            el.classList.remove("hidden");
        } else if (price === genre || !genre){
            el.classList.remove("hidden");
        } else if (trending === genre || !genre){
            el.classList.remove("hidden");
        } else if(exclusives === genre || !genre){
            el.classList.remove("hidden");
        } else if(sale === genre || !genre ){
            el.classList.remove("hidden");
        } 
        else {
            el.classList.add("hidden");
        }
    }
}


list.addEventListener("change",function(event){
    var selectedGenre = event.target.value;
    filterByGenre(selectedGenre);
})

// Name Text Valdation 

