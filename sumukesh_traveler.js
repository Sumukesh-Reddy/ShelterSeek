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

setInterval(() => {
    i++;
    if(i === photo.length) i = 0; 
    updateBackgroundImage();
}, 3000);
