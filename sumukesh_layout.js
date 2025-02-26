// Sample data for homes
var homes = [
    {
        id: 1,
        title: "Modern Apartment",
        location: "New York",
        price: "250000",
        description: "Beautiful home with a great view and spacious rooms.",
        liked: false,
        discountPercentage: 20,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    },
    {
        id: 2,
        title: "Cozy Cottage",
        location: "California",
        price: "180000",
        description: "A charming cottage surrounded by nature.",
        liked: false,
        discountPercentage: 30,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: false, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "alex", review: "amazing place", rating: 4.8, image: "img/photo1.jpg" },
            { name: "maria", review: "peaceful", rating: 4.2, image: "img/photo2.jpg" }
        ],
        host: { name: "Jane Smith", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 34.052235, longitude: -118.243683 }
    },
    {
        id: 3,
        title: "Luxury Villa",
        location: "Miami",
        price: "120000",
        description: "A stunning villa with a private beach and pool.",
        liked: false,
        discountPercentage: 25,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "tom", review: "great luxury experience", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Mark Taylor", image: "img/photo3.jpg", yearsWithUs: 4, latitude: 25.7617, longitude: -80.1918 }
    },
    {
        id: 4,
        title: "Downtown Loft",
        location: "Chicago",
        price: "300000",
        description: "Spacious loft in the heart of the city with modern amenities.",
        liked: false,
        discountPercentage: 15,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: true, taps: true, lift: true, carParking: false, EvCharging: false, Electricity: true },
        review_main: [
            { name: "lisa", review: "loved the urban vibe", rating: 4.6, image: "img/photo1.jpg" }
        ],
        host: { name: "Alice Green", image: "img/photo4.jpg", yearsWithUs: 6, latitude: 41.8781, longitude: -87.6298 }
    },
    {
        id: 5,
        title: "Beach House",
        location: "Florida",
        price: "450000",
        description: "A beautiful beachfront property with stunning ocean views.",
        liked: false,
        discountPercentage: 10,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "emma", review: "perfect beach house", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Chris Brown", image: "img/photo5.jpg", yearsWithUs: 2, latitude: 27.994402, longitude: -81.760254 }
    },
    {
        id: 6,
        title: "Mountain Retreat",
        location: "Colorado",
        price: "350000",
        description: "A perfect getaway nestled in the mountains with breathtaking views.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 12,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    },
    {
        id: 7,
        title: "Suburban House",
        location: "Texas",
        price: "280000",
        description: "A spacious family home in a quiet neighborhood.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 18,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    },
    {
        id: 8,
        title: "Penthouse Suite",
        location: "Los Angeles",
        price: "750000",
        description: "A luxurious penthouse with panoramic city views.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 22,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    },
    {
        id: 9,
        title: "Farmhouse",
        location: "Iowa",
        price: "230000",
        description: "A traditional farmhouse with acres of land and fresh air.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 17,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    },
    {
        id: 10,
        title: "Lakefront Cabin",
        location: "Minnesota",
        price: "200000",
        description: "A cozy cabin on the lake, perfect for relaxing weekends.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 14,
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.557136, longitude: 80.025129 }
    }
];
// Function to format currency
function formatCurrency(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
}

// Function to update amenities verification
function updateAmenitiesVerification(home) {
    for (const [amenity, isVerified] of Object.entries(home.amenities)) {
        const elementId = `${amenity}-verify`;
        const element = document.getElementById(elementId);

        if (element) {
            element.textContent = isVerified ? "Verified" : "Not Verified";
            element.style.color = isVerified ? "green" : "red";
        }
    }
}

// Function to generate star ratings
function generateStars(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    if (halfStar) {
        starsHTML += `<i class="fa fa-star-half-o" aria-hidden="true"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
    }

    return starsHTML;
}

// Function to display reviews
function displayReview(rev) {
    const reviewMainBlock = document.querySelector(".review-main");
    if (!reviewMainBlock) return;

    const reviewBlock = document.createElement("div");
    reviewBlock.classList.add("review-block");

    const starsHTML = generateStars(rev.rating);

    reviewBlock.innerHTML = `
        <div class="review-content">
            <img class="review-image" src="${rev.image}" alt="user photo">
            <div class="review-text">
                <h5 class="review-name">${rev.name}</h5>
                <div class="stars">${starsHTML}</div>
                <span class="review-description" style="font-size: small;">${rev.review}</span>
            </div>
        </div>
    `;

    reviewMainBlock.appendChild(reviewBlock);
}

// Function to calculate and display average rating
function calculateAverageRating(home) {
    let rating_sum = 0;
    home.review_main.forEach(rev => {
        rating_sum += rev.rating;
    });
    const averageRating = rating_sum / home.review_main.length;
    return averageRating.toFixed(1);
}

function displayAverageRating(home) {
    const averageRating = calculateAverageRating(home);
    const avgStarsDiv = document.getElementById("avg-stars");
    if (avgStarsDiv) {
        avgStarsDiv.innerHTML = generateStars(averageRating);
    }
}

// Function to calculate rent based on dates
function calculateRent(home) {
    const checkInInput = document.getElementById("check-in");
    const checkOutInput = document.getElementById("check-out");
    const rentButton = document.getElementById("rent-button");

    if (checkInInput && checkOutInput && rentButton) {
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);

        if (checkInDate && checkOutDate && checkOutDate > checkInDate) {
            const timeDiff = checkOutDate - checkInDate;
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate number of days
            const pricePerNight = parseFloat(home.price); // Get price from home data
            const totalCost = days * pricePerNight; // Calculate total cost
            rentButton.textContent = `Rent Now for ₹${totalCost}`; // Update button text
        } else {
            rentButton.textContent = "Select valid dates";
        }
    }
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const homeId = parseInt(params.get("id"));
    const home = homes.find(h => h.id === homeId);

    const layoutHtmlDetails = document.getElementById("home-details");

    if (home && layoutHtmlDetails) {
        const discountedPrice = parseFloat(home.price) * (1 - home.discountPercentage / 100);
        const originalPrice = parseFloat(home.price);

        // Set page title
        document.title = `${home.title} - ${home.location}`;

        // Render home details
        layoutHtmlDetails.innerHTML = `
            <div class="home-name">
                <h1 style="color:#d72d6e">${home.title}</h1>
                <div class="share-button-div">
                    <button id="share-button"><i class="fa fa-share-alt" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="dynamic-layout-img" id="dynamic-layout-img">
                <button id="img-move-left">&lt;</button>
                <button id="img-move-right">&gt;</button>
            </div>
            <div class="container">
                <div class="left-side">
                    <div class="layout-description">
                        <h2 style="color:#d72d6e">Description</h2>
                        <p>${home.description}</p>
                    </div>
                    <div class="verification">
                        <h2 style="color:#d72d6e">Amenities</h2>
                        <ul class="amenities-list">
                            <li><span class="amenity-name">Wifi</span> <span class="separator">:</span> <span id="wifi-verify">Pending</span></li>
                            <li><span class="amenity-name">AC</span> <span class="separator">:</span> <span id="ac-verify">Pending</span></li>
                            <li><span class="amenity-name">Laundry</span> <span class="separator">:</span> <span id="laundry-verify">Pending</span></li>
                            <li><span class="amenity-name">Hot Water</span> <span class="separator">:</span> <span id="hotWater-verify">Pending</span></li>
                            <li><span class="amenity-name">Taps</span> <span class="separator">:</span> <span id="taps-verify">Pending</span></li>
                            <li><span class="amenity-name">Lift</span> <span class="separator">:</span> <span id="lift-verify">Pending</span></li>
                            <li><span class="amenity-name">Car Parking</span> <span class="separator">:</span> <span id="carParking-verify">Pending</span></li>
                            <li><span class="amenity-name">EV Charging</span> <span class="separator">:</span> <span id="EvCharging-verify">Pending</span></li>
                            <li><span class="amenity-name">Electricity</span> <span class="separator">:</span> <span id="Electricity-verify">Pending</span></li>
                        </ul>
                    </div>
                </div>
                <div class="right-side">
                    <div class="rent">
                        <h2 style="color: #d72d6e;">Book Your Stay</h2>
                        <p><strong>Cost:</strong> <span id="cost">₹${home.price}</span> / night</p>
                        <p><strong>Rating:</strong> <span id="rating">${calculateAverageRating(home)}</span> / 5</p>
                        <div id="avg-stars"></div>
                        <label for="check-in">Check-in Date:</label>
                        <input type="date" id="check-in" name="check-in">
                        <label for="check-out">Check-out Date:</label>
                        <input type="date" id="check-out" name="check-out">
                        <button id="rent-button">Rent Now</button>
                    </div>
                    <div class="host">
                        <img src="${home.host.image}" alt="Host Photo" class="host-photo">
                        <div class="host-details">
                            <h3>Hosted by ${home.host.name}</h3>
                            <p>${home.host.yearsWithUs} years with us</p>
                            <button id="message">Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map"></div>
            <hr style="opacity:0.2;">
            <div class="review-main" style="margin-left: 5vw;">
                <h2 style="color:#d72d6e">Review from our Users</h2>
            </div>
        `;

        // Update amenities verification
        updateAmenitiesVerification(home);

        // Display average rating
        displayAverageRating(home);

        // Display reviews
        home.review_main.forEach(rev => displayReview(rev));

        // Image navigation
        const photoblock = document.getElementById("dynamic-layout-img");
        const leftButton = document.getElementById("img-move-left");
        const rightButton = document.getElementById("img-move-right");
        let i = 0;

        function updateMedia() {
            if (home.media.length === 0) return;
            photoblock.style.backgroundImage = `url(${home.media[i]})`;
        }

        leftButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            i = (i === 0) ? home.media.length - 1 : i - 1;
            updateMedia();
        });

        rightButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            i = (i + 1) % home.media.length;
            updateMedia();
        });

        updateMedia();

        // Rent calculation
        const checkInInput = document.getElementById("check-in");
        const checkOutInput = document.getElementById("check-out");

        if (checkInInput && checkOutInput) {
            checkInInput.addEventListener("change", () => calculateRent(home));
            checkOutInput.addEventListener("change", () => calculateRent(home));
        }
    } else {
        layoutHtmlDetails.innerHTML = "<p>Home not found.</p>";
    }

const map = L.map('map').setView([home.host.latitude, home.host.longitude], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([home.host.latitude, home.host.longitude]).addTo(map)
    .bindPopup("Your Room 🏠")
    .openPopup();

});