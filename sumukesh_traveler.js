document.getElementById("user-button").addEventListener("click",()=>{
    const user_menu=document.getElementById("user-menu");
    if(user_menu.display==="block"){
        user_menu.style.display = "none"; 
    }
    else{
        user_menu.style.display = "block"; 
    }
});
document.getElementById("user-close-btn").addEventListener("click", ()=> {
    const user_menu = document.getElementById("user-menu"); 
    user_menu.style.display = "none"; 
});

document.getElementById("menubotton").addEventListener("click", ()=> {
    const menu = document.getElementById("menu"); 
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block";
    }
});
document.getElementById("close-btn").addEventListener("click", ()=> {
    const menu = document.getElementById("menu"); 
    menu.style.display = "none"; 
});


const photo = [
    "img/photo1.jpg",
    "img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg"
];

const photoblock = document.querySelector(".slide-2");
let i = 0;
function updateBackgroundImage() {
    photoblock.style.backgroundImage = `url(${photo[i]})`; 
}

updateBackgroundImage();
// sliding photos,below nav bar
setInterval(() => {
    i++;
    if(i === photo.length) i = 0; 
    updateBackgroundImage();
}, 3000);
document.getElementById("filter-button").addEventListener("click", () => {
    const filter_menu=document.querySelector(".filter-menu");
    if (filter_menu.style.display === "none") {
        filter_menu.style.display = "flex";  
    } else {
        filter_menu.style.display = "none";  
    }
});
// no.of bedrooms
let bedroom = 1;

document.getElementById("sub-bedroom").addEventListener("click", () => {
    if (bedroom > 1) {
        bedroom -= 1;
        document.getElementById("bedrooms").innerText = bedroom;
    }
});

document.getElementById("add-bedroom").addEventListener("click", () => {
    if (bedroom < 9) {
        bedroom += 1;
        document.getElementById("bedrooms").innerText = bedroom;
    }
});


// no.of beds
let beds = 1;

document.getElementById("sub-beds").addEventListener("click", () => {
    if (beds > 1) {
        beds -= 1;
        document.getElementById("beds").innerText = beds;
    }
});

document.getElementById("add-beds").addEventListener("click", () => {
    if (beds < 9) {
        beds += 1;
        document.getElementById("beds").innerText = beds;
    }
});

// no.of adults
let adults = 1;
document.getElementById("sub-adults").addEventListener("click", () => {
    if (adults > 0) {
        adults -= 1;
        document.getElementById("adults").innerText = adults;
    }
});

document.getElementById("add-adults").addEventListener("click", () => {
    if (adults < 9) {
        adults += 1;
        document.getElementById("adults").innerText = adults;
    }
});


// no.of childrens
let childrens = 1;
document.getElementById("sub-childrens").addEventListener("click", () => {
    if (childrens > 0) {
        childrens -= 1;
        document.getElementById("childrens").innerText = childrens;
    }
});

document.getElementById("add-childrens").addEventListener("click", () => {
    if (childrens < 9) {
        childrens += 1;
        document.getElementById("childrens").innerText = childrens;
    }
});



window.addEventListener("click", (event) => {
    const userMenu = document.getElementById("user-menu");
    const menu = document.getElementById("menu");
    const filterMenu = document.querySelector(".filter-menu");

    if (!userMenu.contains(event.target) && !document.getElementById("user-button").contains(event.target)) {
        userMenu.style.display = "none";
    }
    if (!menu.contains(event.target) && !document.getElementById("menubotton").contains(event.target)) {
        menu.style.display = "none";
    }
    if (!filterMenu.contains(event.target) && !document.getElementById("filter-button").contains(event.target)) {
        filterMenu.style.display = "none";
    }
});


document.getElementById("filter-search-button").addEventListener("click",()=>{
    const filterMenu = document.querySelector(".filter-menu");
    filterMenu.style.display = "none";
})