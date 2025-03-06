document.addEventListener("DOMContentLoaded", function () {
    const homes = [
        {
            id: 1,
            title: "Modern Apartment",
            location: "Mumbai",
            price: "2500",
            description: "Beautiful home with a great view and spacious rooms.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 20,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac"],
            bedrooms: 2,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 2,
            title: "Cozy Cottage",
            location: "Kerala",
            price: "1800",
            description: "A charming cottage surrounded by nature.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 30,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi"],
            bedrooms: 1,
            beds: 2,
            adults: 1,
            children: 0
        },
        {
            id: 3,
            title: "Luxury Villa",
            location: "Goa",
            price: "1200",
            description: "A stunning villa with a private beach and pool.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 25,
            roomType: "full",
            locationType: "outside-town",
            amenities: ["wifi", "ac", "pool"],
            bedrooms: 3,
            beds: 4,
            adults: 4,
            children: 2
        },
        {
            id: 4,
            title: "Downtown Loft",
            location: "Bengaluru",
            price: "3000",
            description: "Spacious loft in the heart of the city with modern amenities.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 15,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift"],
            bedrooms: 2,
            beds: 2,
            adults: 2,
            children: 0
        },
        {
            id: 5,
            title: "Beach House",
            location: "Pondicherry",
            price: "4500",
            description: "A beautiful beachfront property with stunning ocean views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 10,
            roomType: "full",
            locationType: "outside-town",
            amenities: ["wifi", "ac", "hotwater"],
            bedrooms: 3,
            beds: 4,
            adults: 4,
            children: 2
        },
        {
            id: 6,
            title: "Mountain Retreat",
            location: "Himachal Pradesh",
            price: "3500",
            description: "A perfect getaway nestled in the mountains with breathtaking views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 12,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 2,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 7,
            title: "Suburban House",
            location: "Gurgaon",
            price: "2800",
            description: "A spacious family home in a quiet neighborhood.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 18,
            roomType: "full",
            locationType: "residential-area",
            amenities: ["wifi", "ac", "car-parking"],
            bedrooms: 3,
            beds: 4,
            adults: 4,
            children: 2
        },
        {
            id: 8,
            title: "Penthouse Suite",
            location: "Delhi",
            price: "7500",
            description: "A luxurious penthouse with panoramic city views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 22,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift", "car-parking"],
            bedrooms: 3,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 9,
            title: "Farmhouse",
            location: "Punjab",
            price: "2300",
            description: "A traditional farmhouse with acres of land and fresh air.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 17,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 4,
            beds: 5,
            adults: 6,
            children: 3
        },
        {
            id: 10,
            title: "Lakefront Cabin",
            location: "Uttarakhand",
            price: "2000",
            description: "A cozy cabin on the lake, perfect for relaxing weekends.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 14,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi"],
            bedrooms: 1,
            beds: 2,
            adults: 2,
            children: 0
        },
        {
            id: 11,
            title: "Hilltop Mansion",
            location: "Rajasthan",
            price: 6000,
            description: "A magnificent mansion on top of a hill with expansive views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 30,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "ac", "pool", "car-parking"],
            bedrooms: 5,
            beds: 6,
            adults: 6,
            children: 3
        },
        {
            id: 12,
            title: "Contemporary House",
            location: "Hyderabad",
            price: 3500,
            description: "Sleek and modern house with floor-to-ceiling windows.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 18,
            roomType: "full",
            locationType: "residential-area",
            amenities: ["wifi", "ac", "lift"],
            bedrooms: 3,
            beds: 3,
            adults: 3,
            children: 1
        },
        {
            id: 13,
            title: "Tropical Villa",
            location: "Andaman and Nicobar Islands",
            price: 5000,
            description: "Luxurious villa surrounded by tropical gardens.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 15,
            roomType: "full",
            locationType: "outside-town",
            amenities: ["wifi", "ac", "pool"],
            bedrooms: 4,
            beds: 5,
            adults: 4,
            children: 2
        },
        {
            id: 14,
            title: "Urban Studio",
            location: "Chennai",
            price: 2200,
            description: "Chic studio apartment with a modern feel and city views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 10,
            roomType: "shared",
            locationType: "in-town",
            amenities: ["wifi", "ac"],
            bedrooms: 1,
            beds: 1,
            adults: 1,
            children: 0
        },
        {
            id: 15,
            title: "Victorian House",
            location: "Kolkata",
            price: 4200,
            description: "A grand Victorian home with vintage charm and modern upgrades.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 12,
            roomType: "full",
            locationType: "residential-area",
            amenities: ["wifi", "ac", "lift"],
            bedrooms: 4,
            beds: 5,
            adults: 4,
            children: 2
        },
        {
            id: 16,
            title: "Country Estate",
            location: "Maharashtra",
            price: 5000,
            description: "A luxurious estate with large grounds and a private lake.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 20,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "ac", "pool", "car-parking"],
            bedrooms: 5,
            beds: 6,
            adults: 6,
            children: 3
        },
        {
            id: 17,
            title: "Modern Condo",
            location: "Ahmedabad",
            price: 2500,
            description: "A stylish condo with a rooftop terrace and great amenities.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 17,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift"],
            bedrooms: 2,
            beds: 2,
            adults: 2,
            children: 1
        },
        {
            id: 18,
            title: "Ranch House",
            location: "Madhya Pradesh",
            price: 3500,
            description: "A spacious ranch with a beautiful garden and private stables.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 10,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 4,
            beds: 5,
            adults: 4,
            children: 2
        },
        {
            id: 19,
            title: "Beachfront Villa",
            location: "Kochi",
            price: 7000,
            description: "An exclusive beachfront villa with luxury amenities.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 5,
            roomType: "full",
            locationType: "outside-town",
            amenities: ["wifi", "ac", "pool", "car-parking"],
            bedrooms: 4,
            beds: 5,
            adults: 4,
            children: 2
        },
        {
            id: 20,
            title: "Skyscraper Apartment",
            location: "Noida",
            price: 8000,
            description: "A penthouse apartment with panoramic views of the city skyline.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 8,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift", "car-parking"],
            bedrooms: 3,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 21,
            title: "Rustic Lodge",
            location: "Madhya Pradesh",
            price: 2800,
            description: "A cozy lodge surrounded by forests and mountains.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 16,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 2,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 22,
            title: "Heritage Haveli",
            location: "Jaipur",
            price: 6000,
            description: "A beautiful heritage haveli with traditional architecture and modern amenities.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 15,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift", "car-parking"],
            bedrooms: 5,
            beds: 6,
            adults: 6,
            children: 3
        },
        {
            id: 23,
            title: "Countryside Villa",
            location: "Coorg",
            price: 4500,
            description: "A serene villa surrounded by coffee plantations and lush greenery.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 20,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "ac", "pool"],
            bedrooms: 4,
            beds: 5,
            adults: 4,
            children: 2
        },
        {
            id: 24,
            title: "Luxury Apartment",
            location: "Gurgaon",
            price: 8000,
            description: "A luxurious apartment with state-of-the-art facilities and city views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 10,
            roomType: "full",
            locationType: "in-town",
            amenities: ["wifi", "ac", "lift", "car-parking"],
            bedrooms: 3,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 25,
            title: "Eco-Friendly Cottage",
            location: "Rishikesh",
            price: 3000,
            description: "An eco-friendly cottage near the Ganges, perfect for yoga and meditation.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 15,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 2,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 26,
            title: "Charming Bungalow",
            location: "Mysore",
            price: 3500,
            description: "A charming bungalow with a garden and vintage decor.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 12,
            roomType: "full",
            locationType: "residential-area",
            amenities: ["wifi", "ac"],
            bedrooms: 3,
            beds: 4,
            adults: 3,
            children: 1
        },
        {
            id: 27,
            title: "Desert Camp",
            location: "Jaisalmer",
            price: 4000,
            description: "A unique desert camp experience with luxury tents and cultural activities.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 20,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi", "hotwater"],
            bedrooms: 2,
            beds: 3,
            adults: 2,
            children: 1
        },
        {
            id: 28,
            title: "Hill Station Retreat",
            location: "Manali",
            price: 5000,
            description: "A beautiful retreat in the hills with stunning views and cozy interiors.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 15,
            roomType: "shared",
            locationType: "countryside",
            amenities: ["wifi", "ac", "pool"],
            bedrooms: 3,
            beds: 4,
            adults: 3,
            children: 5
        },
        {
            id: 29,
            title: "Penthouse Suite",
            location: "Kolkata, West Bengal",
            price: "7500",
            description: "A luxurious penthouse with panoramic city views.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 22,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "ac", "hotwater"],
            bedrooms: 3,
            beds: 4,
            adults: 3,
            children: 6
        },
        {
            id: 30,
            title: "Farmhouse",
            location: "Pune, Maharashtra",
            price: "2300",
            description: "A traditional farmhouse with acres of land and fresh air.",
            images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
            liked: false,
            discountPercentage: 17,
            roomType: "full",
            locationType: "countryside",
            amenities: ["wifi", "ac"],
            bedrooms: 3,
            beds: 4,
            adults: 3,
            children: 0
        }
    ]; 

    let likedHomes = [];
    displayHomes(homes);

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    // Search functionality
    document.getElementById("filter-search-button").addEventListener("click", function () {
        applyFilters();
    });
    document.getElementById("search-button").addEventListener("click", function () {
        applyFilters();
    });

    // Apply filters
    function applyFilters() {
        // Get the search input and split it into an array of keywords
        const cityInput = document.getElementById("search-bar")?.value.trim().toLowerCase();
        const keywords = cityInput.split(",").map(keyword => keyword.trim()); // Split by comma and trim whitespace
    
        const minPrice = parseInt(document.querySelector(".min-input")?.value) || 0;
        const maxPrice = parseInt(document.querySelector(".max-input")?.value) || Infinity;
    
        // Get selected house types
        const selectedTypes = [];
        document.querySelectorAll(".room-box.active").forEach(house => {
            selectedTypes.push(house.getAttribute("data-value"));
        });
    
        // Get selected room type (shared, full, any)
        const selectedRoomType = document.querySelector('input[name="room"]:checked').value;
    
        // Get selected room locations
        const selectedRoomLocations = [];
        document.querySelectorAll("#room-location .select-box.active").forEach(location => {
            selectedRoomLocations.push(location.getAttribute("data-value"));
        });
    
        // Get selected amenities
        const selectedAmenities = [];
        document.querySelectorAll("#amenities .select-box.active").forEach(amenity => {
            selectedAmenities.push(amenity.getAttribute("data-value"));
        });
    
        // Get selected bedrooms
        const selectedBedrooms = parseInt(document.getElementById("bedrooms").textContent);
    
        // Get selected beds
        const selectedBeds = parseInt(document.getElementById("beds").textContent);
    
        // Get selected adults
        const selectedAdults = parseInt(document.getElementById("adults").textContent);
    
        // Get selected children
        const selectedChildren = parseInt(document.getElementById("childrens").textContent);
    
    
        // Filter homes based on user inputs
        const filteredHomes = homes.filter(home => {
            const homePrice = parseFloat(home.price);
    
            // Check if any keyword matches the home's title or location
            const matchesKeywords = keywords.some(keyword => {
                return (
                    home.title.toLowerCase().includes(keyword) ||
                    home.location.toLowerCase().includes(keyword)
                );
            });
    
            const matchesPrice = homePrice >= minPrice && homePrice <= maxPrice;
    
            // Check if the home type matches any selected types
            const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => {
                return home.title.toLowerCase().includes(type);
            });
    
            // Check if the room type matches the selected room type
            const matchesRoomType = selectedRoomType === "any" || home.roomType === selectedRoomType;
    
            // Check if the room location matches any selected locations
            const matchesRoomLocation = selectedRoomLocations.length === 0 || selectedRoomLocations.some(location => {
                return home.locationType === location;
            });
    
            // Check if the amenities match any selected amenities
            const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(amenity => {
                return home.amenities.includes(amenity);
            });
    
            // Check if the number of bedrooms matches the selected bedrooms
            const matchesBedrooms = home.bedrooms >= selectedBedrooms;
    
            // Check if the number of beds matches the selected beds
            const matchesBeds = home.beds >= selectedBeds;
    
            // Check if the number of adults matches the selected adults
            const matchesAdults = home.adults >= selectedAdults;
    
            // Check if the number of children matches the selected children
            const matchesChildren = home.children >= selectedChildren;
    
            console.log(`Home: ${home.title}, Price: ${homePrice}, Location: ${home.location}`);
            console.log(`Matches Keywords: ${matchesKeywords}, Matches Price: ${matchesPrice}, Matches Type: ${matchesType}`);
            console.log(`Matches Room Type: ${matchesRoomType}, Matches Room Location: ${matchesRoomLocation}, Matches Amenities: ${matchesAmenities}`);
            console.log(`Matches Bedrooms: ${matchesBedrooms}, Matches Beds: ${matchesBeds}, Matches Adults: ${matchesAdults}, Matches Children: ${matchesChildren}`);
    
            // Return true if all conditions are met
            return (
                matchesKeywords &&
                matchesPrice &&
                matchesType &&
                matchesRoomType &&
                matchesRoomLocation &&
                matchesAmenities &&
                matchesBedrooms &&
                matchesBeds &&
                matchesAdults &&
                matchesChildren
            );
        });
    
        // Display filtered homes
        displayHomes(filteredHomes);
    }

    // Display homes
    function displayHomes(homes) {
        const container = document.getElementById("homes-container");
        container.innerHTML = ""; // Clear the container before adding new homes

        if (homes.length === 0) {
            container.innerHTML = "<p>No houses found.</p>";
            console.log("No houses found matching the filters."); // Debugging
            return;
        }

        homes.forEach(home => {
            addHomeToPage(home);
            console.log(`Displaying Home: ${home.title}`); // Debugging
        });
    }

    // Function to add a home to the page
    function addHomeToPage(home) {
        const container = document.getElementById("homes-container");

        const homeBlock = document.createElement("div");
        homeBlock.classList.add("home-block");

        homeBlock.innerHTML = `
            <div class="home-photos-block">
                <button id="home-like" data-home-id="${home.id}"><i class="fa fa-heart"></i></button>
                <button id="img-move-left">&lt;</button>
                <button id="img-move-right">&gt;</button>
                <div class="home-image" style="background-image: url(${home.images[0]})"></div> 
            </div>
            <hr style="opacity: 0.3;">
            <div class="home-content">
                <h3>${home.title}</h3>
                <p>Location: ${home.location}</p>
                <p class="price">${formatCurrency(home.price * (1 - home.discountPercentage / 100))}</p>
                <span class="old-price">${formatCurrency(home.price)}</span>
                <p style="color: green;font-weight: bold;">Discount : ${home.discountPercentage}% off</p>
                <p>Description: ${home.description}</p>
            </div>
        `;

        const homeImage = homeBlock.querySelector(".home-image");
        const leftButton = homeBlock.querySelector("#img-move-left");
        const rightButton = homeBlock.querySelector("#img-move-right");
        let currentImageIndex = 0;

        function showSlide(index) {
            homeImage.style.backgroundImage = `url(${home.images[index]})`;
        }

        leftButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            currentImageIndex = (currentImageIndex === 0) ? home.images.length - 1 : currentImageIndex - 1;
            showSlide(currentImageIndex);
        });

        rightButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation(); 
            currentImageIndex = (currentImageIndex === home.images.length - 1) ? 0 : currentImageIndex + 1;
            showSlide(currentImageIndex);
        });

        const likeButton = homeBlock.querySelector("#home-like");
        likeButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            home.liked = !home.liked;
            likeButton.classList.toggle("liked");
            if (home.liked) {
                likedHomes.push(home.id);
            } else {
                likedHomes = likedHomes.filter(id => id !== home.id);
            }
        });

        // Add click event listener to the entire home block
        homeBlock.addEventListener("click", () => {
            link.href = `room_layout.html?id=${home.id}`;
            link.click();
        });

        container.appendChild(homeBlock);
    }

    function formatCurrency(number) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
    }
});