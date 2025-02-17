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

// filter-search button
document.getElementById("filter-search-button").addEventListener("click",()=>{
    const filterMenu = document.querySelector(".filter-menu");
    filterMenu.style.display = "none";
})


// close filter button

document.getElementById("filter-close-button").addEventListener("click",()=>{
    const filterMenu=document.querySelector(".filter-menu");
    filterMenu.style.display = "none";
})


// selected rooms
let selectedRooms = [];

document.querySelectorAll('.room-box').forEach(box => {
    box.addEventListener('click', function() {
        let roomType = this.getAttribute('data-value');

        if (selectedRooms.includes(roomType)) {
            selectedRooms = selectedRooms.filter(item => item !== roomType);
            this.classList.remove('active');
        } else {
            selectedRooms.push(roomType);
            this.classList.add('active');
        }
        document.getElementById('selected-room-types').value = selectedRooms.join(',');
    });
});


// Radio Button Handling (Room Distance, Room Size, Host Gender)
document.querySelectorAll('.radio-group').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.classList.contains('radio-option')) {
            group.querySelectorAll('.radio-option').forEach(label => label.classList.remove('active'));
            event.target.classList.add('active');

            const input = event.target.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true;
            }
        }
    });

    const checkedInput = group.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        checkedInput.parentElement.classList.add('active');
    }
});

// Multi-Select Handling (Amenities, Food Preferences)
document.querySelectorAll('.multi-select').forEach(multiSelect => {
    const hiddenInput = multiSelect.nextElementSibling;
    const selectBoxes = multiSelect.querySelectorAll('.select-box');
    let selectedValues = [];
    selectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (selectedValues.includes(value)) {
                selectedValues = selectedValues.filter(item => item !== value);
                this.classList.remove('active');
            } else {
                selectedValues.push(value);
                this.classList.add('active');
            }

            hiddenInput.value = selectedValues.join(',');
        });
    });
});

// type of location
let selectedLocations = [];
document.querySelectorAll('#room-location .select-box').forEach(box => {
  box.addEventListener('click', function() {
    let location = this.getAttribute('data-value');

    if (selectedLocations.includes(location)) {
      selectedLocations = selectedLocations.filter(item => item !== location);
      this.classList.remove('active');
    } else {
      selectedLocations.push(location);
      this.classList.add('active');
    }
    document.getElementById('selected-room-location').value = selectedLocations.join(',');
  });
});

// shared room
document.querySelectorAll('.radio-group').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.classList.contains('radio-option')) {
            group.querySelectorAll('.radio-option').forEach(label => label.classList.remove('active'));
            event.target.classList.add('active');

            const input = event.target.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true;
            }
        }
    });

    const checkedInput = group.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        checkedInput.parentElement.classList.add('active');
    }
});

// price
window.onload = function () {
    loadStoredValues();
    updateSlider();
};

const minVal = document.querySelector(".min-input");
const maxVal = document.querySelector(".max-input");
const range = document.querySelector(".range-selected");
const priceInputMin = document.querySelector(".min-price");
const priceInputMax = document.querySelector(".max-price");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);
const minGap = 1500;

// Load values from localStorage if they exist
function loadStoredValues() {
    const storedMin = localStorage.getItem("priceMin");
    const storedMax = localStorage.getItem("priceMax");

    if (storedMin) minVal.value = storedMin;
    if (storedMax) maxVal.value = storedMax;

    priceInputMin.value = minVal.value;
    priceInputMax.value = maxVal.value;
}

// Update the slider when inputs change
function updateSlider() {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);

    if (maxValue - minValue < minGap) {
        if (event.target === minVal) {
            minVal.value = maxValue - minGap;
        } else {
            maxVal.value = minValue + minGap;
        }
    }

    let minPercent = ((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
    let maxPercent = ((maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

    range.style.left = minPercent + "%";
    range.style.right = (100 - maxPercent) + "%";

    priceInputMin.value = minVal.value;
    priceInputMax.value = maxVal.value;

    // Store values in localStorage
    localStorage.setItem("priceMin", minVal.value);
    localStorage.setItem("priceMax", maxVal.value);
}

// Event Listeners
minVal.addEventListener("input", updateSlider);
maxVal.addEventListener("input", updateSlider);
priceInputMin.addEventListener("input", function () {
    minVal.value = this.value;
    updateSlider();
});
priceInputMax.addEventListener("input", function () {
    maxVal.value = this.value;
    updateSlider();
});


// liked rooms
// let likedrooms=[];
// document.getElementById("home-like").addEventListener("click",()=>{
//     if(document.)

// // write code


// })

// rooms boxes js starts from here
// const homes = [
//     {
//         id: 1,
//         title: "Modern Apartment",
//         location: "New York",
//         price: "$250,000",
//         description: "Beautiful home with a great view and spacious rooms.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false
//     },
//     {
//         id: 2,
//         title: "Cozy Cottage",
//         location: "California",
//         price: "$180,000",
//         description: "A charming cottage surrounded by nature.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false
//     },
//     {
//         id: 3,
//         title: "Luxury Villa",
//         location: "Miami",
//         price: "$1,200,000",
//         description: "A stunning villa with a private beach and pool.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false
//     }
// ];

// homes.forEach(home => addHomeToPage(home));

// function addHomeToPage(home) {
//     const container = document.getElementById("homes-container"); // Ensure an element with this ID exists

//     // Create the home block
//     const homeBlock = document.createElement("div");
//     homeBlock.classList.add("home-block");

//     // Create the photo container
//     const homePhotos = document.createElement("div");
//     homePhotos.classList.add("home-photos");

//     // Create the like button
//     const likeButton = document.createElement("button");
//     likeButton.id = `home-like-${home.id}`;
//     likeButton.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
//     likeButton.classList.add("like-button");
//     if (home.liked) likeButton.classList.add("liked");

//     // Toggle like functionality
//     likeButton.addEventListener("click", () => {
//         home.liked = !home.liked;
//         likeButton.classList.toggle("liked");
//     });

//     // Create left and right navigation buttons
//     const leftButton = document.createElement("button");
//     leftButton.innerHTML = "&lt;";
//     leftButton.classList.add("img-move-left");

//     const rightButton = document.createElement("button");
//     rightButton.innerHTML = "&gt;";
//     rightButton.classList.add("img-move-right");

//     // Create image slider container
//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("image-container");

//     // Add images
//     home.images.forEach((src, index) => {
//         const img = document.createElement("img");
//         img.src = src;
//         img.classList.add("slide");
//         if (index === 0) img.classList.add("active"); // Show the first image initially
//         imageContainer.appendChild(img);
//     });

//     let currentImageIndex = 0;
//     const slides = imageContainer.querySelectorAll(".slide");

//     // Function to show the next or previous image
//     function showSlide(index) {
//         slides.forEach(slide => slide.classList.remove("active"));
//         slides[index].classList.add("active");
//     }

//     // Event listeners for navigation buttons
//     leftButton.addEventListener("click", () => {
//         currentImageIndex = (currentImageIndex === 0) ? slides.length - 1 : currentImageIndex - 1;
//         showSlide(currentImageIndex);
//     });

//     rightButton.addEventListener("click", () => {
//         currentImageIndex = (currentImageIndex === slides.length - 1) ? 0 : currentImageIndex + 1;
//         showSlide(currentImageIndex);
//     });

//     // Append elements
//     homePhotos.appendChild(likeButton);
//     homePhotos.appendChild(leftButton);
//     homePhotos.appendChild(rightButton);
//     homePhotos.appendChild(imageContainer);

//     // Home content
//     const homeContent = document.createElement("div");
//     homeContent.classList.add("home-content");
//     homeContent.innerHTML = `
//         <h3>${home.title}</h3>
//         <p>Location: ${home.location}</p>
//         <p class="price">${home.price}</p>
//         <p>Description: ${home.description}</p>
//     `;

//     // Append everything to the home block
//     homeBlock.appendChild(homePhotos);
//     homeBlock.appendChild(document.createElement("hr"));
//     homeBlock.appendChild(homeContent);

//     // Append to main container
//     container.appendChild(homeBlock);
// }

// home images in blocks
const bgImages = [
    "img/photo1.jpg",
    "img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg"
];
let currentIndex = 0;

const homeImageDiv = document.querySelector('.home-image');
const leftBtn = document.getElementById('img-move-left');
const rightBtn = document.getElementById('img-move-right');

function updateBackground() {
    homeImageDiv.style.backgroundImage = `url(${bgImages[currentIndex]})`;
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? bgImages.length - 1 : currentIndex - 1;
    updateBackground();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % bgImages.length;
    updateBackground();
});


