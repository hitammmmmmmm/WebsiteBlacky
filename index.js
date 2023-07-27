conts menu = document.querySelector(".menu");
conts nav = document.querySelection(".nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("menuon");
    if (nav.classList.contains("menuon")){
        menu.src = "heker.jpg";
    }
    else{
        menu.src= "bisnis.jpg";
    }
})