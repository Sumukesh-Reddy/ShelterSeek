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
        amenities: ["wifi", "ac", "laundry"],
        bedrooms: 2,
        beds: 3,
        adults: 2,
        children: 1,
        food: "veg",
        hostgender: "male",
        maxdays: 4,
        transport: "2km", // Added
        size: "1200", // Added
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
        children: 0,
        food: "non-veg",
        hostgender: "male",
        maxdays: 3,
        transport: "5km", // Added
        size: "900", // Added
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
        amenities: ["wifi", "ac", "pool", "laundry"],
        bedrooms: 3,
        beds: 4,
        adults: 4,
        children: 2,
        food: "veg",
        hostgender: "female",
        maxdays: 2,
        transport: "10km", // Added
        size: "1000", // Added
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
        children: 0,
        food: "no",
        hostgender: "male",
        maxdays: 5,
        transport: "2km", // Added
        size: "medium", // Added
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
        children: 2,
        food: "non-veg",
        hostgender: "male",
        maxdays: 5,
        transport: "5km", // Added
        size: "2000 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "male",
        maxdays: 7,
        transport: "10km", // Added
        size: "1800 sq.feet", // Added
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
        children: 2,
        food: "veg",
        hostgender: "female",
        maxdays: 3,
        transport: "5km", // Added
        size: "2200 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "family",
        maxdays: 7,
        transport: "2km", // Added
        size: "3000 sq.feet", // Added
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
        children: 3,
        food: "veg",
        hostgender: "family",
        maxdays: 7,
        transport: "10km", // Added
        size: "4000 sq.feet", // Added
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
        children: 0,
        food: "veg",
        hostgender: "family",
        maxdays: 1,
        transport: "5km", // Added
        size: "1000 sq.feet", // Added
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
        children: 3,
        food: "non-veg",
        hostgender: "male",
        maxdays: 1,
        transport: "10km", // Added
        size: "5000 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "female",
        maxdays: 1,
        transport: "5km", // Added
        size: "1800 sq.feet", // Added
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
        children: 2,
        food: "non-veg",
        hostgender: "male",
        maxdays: 1,
        transport: "10km", // Added
        size: "3000 sq.feet", // Added
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
        children: 0,
        food: "non-veg",
        hostgender: "family",
        maxdays: 1,
        transport: "2km", // Added
        size: "800 sq.feet", // Added
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
        children: 2,
        food: "veg",
        hostgender: "female",
        maxdays: 1,
        transport: "5km", // Added
        size: "2500 sq.feet", // Added
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
        children: 3,
        food: "veg",
        hostgender: "family",
        maxdays: 3,
        transport: "10km", // Added
        size: "6000 sq.feet", // Added
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
        children: 1,
        food: "veg",
        hostgender: "family",
        maxdays: 12,
        transport: "2km", // Added
        size: "1200 sq.feet", // Added
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
        children: 2,
        food: "non-veg",
        hostgender: "male",
        maxdays: 13,
        transport: "10km", // Added
        size: "3500 sq.feet", // Added
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
        children: 2,
        food: "veg",
        hostgender: "male",
        maxdays: 14,
        transport: "10km", // Added
        size: "4000 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "female",
        maxdays: 16,
        transport: "2km", // Added
        size: "2800 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "family",
        maxdays: 16,
        transport: "10km", // Added
        size: "1500 sq.feet", // Added
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
        children: 3,
        food: "veg",
        hostgender: "male",
        maxdays: 3,
        transport: "5km", // Added
        size: "4500 sq.feet", // Added
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
        children: 2,
        food: "veg",
        hostgender: "female",
        maxdays: 4,
        transport: "10km", // Added
        size: "3000 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "male",
        maxdays: 2,
        transport: "2km", // Added
        size: "2000 sq.feet", // Added
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
        children: 1,
        food: "veg",
        hostgender: "family",
        maxdays: 5,
        transport: "5km", // Added
        size: "1200 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "family",
        maxdays: 3,
        transport: "5km", // Added
        size: "1800 sq.feet", // Added
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
        children: 1,
        food: "non-veg",
        hostgender: "male",
        maxdays: 2,
        transport: "10km", // Added
        size: "1000 sq.feet", // Added
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
        roomType: "full",
        locationType: "countryside",
        amenities: ["wifi", "ac", "hotwater", "laundry", "carParking"],
        bedrooms: 3,
        beds: 6,
        adults: 2,
        children: 6,
        food: "non-veg",
        hostgender: "female",
        maxdays: 4,
        transport: "10km", // Added
        size: "2500 sq.feet", // Added
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
        amenities: ["wifi", "ac"],
        bedrooms: 3,
        beds: 4,
        adults: 3,
        children: 6,
        food: "non-veg",
        hostgender: "male",
        maxdays: 7,
        transport: "5km", // Added
        size: "3000 sq.feet", // Added
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
        children: 0,
        food: "non-veg",
        hostgender: "family",
        maxdays: 7,
        transport: "10km", // Added
        size: "5000 sq.feet", // Added
    }
];

var layout_homes = [
    {
        id: 1,
        title: "Modern Apartment",
        location: "Mumbai",
        price: "2500",
        description: "Beautiful home with a great view and spacious rooms.",
        liked: false,
        discountPercentage: 20,
        locationType: "in-town",
        size: "1200 sq.feet", // Added
        transport: "2km", // Added
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
        host: { name: "John Doe", gen: "male", food: "vegeterain", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 19.0760, longitude: 72.8777 },
        maxdays: 4
    },
    {
        id: 2,
        title: "Cozy Cottage",
        location: "Kerala",
        price: "1800",
        description: "A charming cottage surrounded by nature.",
        liked: false,
        discountPercentage: 30,
        locationType: "countryside",
        size: "800 sq.feet", // Added
        transport: "5km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: false, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "alex", review: "amazing place", rating: 4.8, image: "img/photo1.jpg" },
            { name: "maria", review: "peaceful", rating: 4.2, image: "img/photo2.jpg" }
        ],
        host: { name: "Jane Smith", gen: "male", food: "no food", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 10.8505, longitude: 76.2711 },
        maxdays: 3
    },
    {
        id: 3,
        title: "Luxury Villa",
        location: "Goa",
        price: "1200",
        description: "A stunning villa with a private beach and pool.",
        liked: false,
        discountPercentage: 25,
        locationType: "outside-town",
        size: "2500 sq.feet", // Added
        transport: "10km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "tom", review: "great luxury experience", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Mark Taylor", gen: "female", food: "vegetarian", image: "img/photo3.jpg", yearsWithUs: 4, latitude: 15.2993, longitude: 74.1240 },
        maxdays: 2
    },
    {
        id: 4,
        title: "Downtown Loft",
        location: "Bengaluru",
        price: "3000",
        description: "Spacious loft in the heart of the city with modern amenities.",
        liked: false,
        discountPercentage: 15,
        locationType: "in-town",
        size: "1500 sq.feet", // Added
        transport: "2km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: true, taps: true, lift: true, carParking: false, EvCharging: false, Electricity: true },
        review_main: [
            { name: "lisa", review: "loved the urban vibe", rating: 4.6, image: "img/photo1.jpg" }
        ],
        host: { name: "Alice Green", gen: "family", food: "no food", image: "img/photo4.jpg", yearsWithUs: 6, latitude: 12.9716, longitude: 77.5946 },
        maxdays: 5
    },
    {
        id: 5,
        title: "Beach House",
        location: "Pondicherry",
        price: "4500",
        description: "A beautiful beachfront property with stunning ocean views.",
        liked: false,
        discountPercentage: 10,
        locationType: "outside-town",
        size: "2000 sq.feet", // Added
        transport: "5km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "emma", review: "perfect beach house", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Chris Brown", gen: "male", food: "non-vegetarian", image: "img/photo5.jpg", yearsWithUs: 2, latitude: 11.9416, longitude: 79.8083 },
        maxdays: 5
    },
    {
        id: 6,
        title: "Mountain Retreat",
        location: "Himachal Pradesh",
        price: "3500",
        description: "A perfect getaway nestled in the mountains with breathtaking views.",
        liked: false,
        discountPercentage: 12,
        locationType: "countryside",
        size: "1800 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 32.0657, longitude: 77.1983 },
        maxdays: 7
    },
    {
        id: 7,
        title: "Suburban House",
        location: "Gurgaon",
        price: "2800",
        description: "A spacious family home in a quiet neighborhood.",
        liked: false,
        discountPercentage: 18,
        locationType: "residential-area",
        size: "2200 sq.feet", // Added
        transport: "5km", // Added
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
        host: { name: "John Doe", gen: "female", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.4595, longitude: 77.0266 },
        maxdays: 3
    },
    {
        id: 8,
        title: "Penthouse Suite",
        location: "Delhi",
        price: "7500",
        description: "A luxurious penthouse with panoramic city views.",
        liked: false,
        discountPercentage: 22,
        locationType: "in-town",
        size: "3000 sq.feet", // Added
        transport: "2km", // Added
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
        host: { name: "John Doe", gen: "family", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.6139, longitude: 77.2090 },
        maxdays: 7
    },
    {
        id: 9,
        title: "Farmhouse",
        location: "Punjab",
        price: "2300",
        description: "A traditional farmhouse with acres of land and fresh air.",
        liked: false,
        discountPercentage: 17,
        locationType: "countryside",
        size: "4000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "female", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 30.7333, longitude: 76.7794 },
        maxdays: 7
    },
    {
        id: 10,
        title: "Lakefront Cabin",
        location: "Uttarakhand",
        price: "2000",
        description: "A cozy cabin on the lake, perfect for relaxing weekends.",
        liked: false,
        discountPercentage: 14,
        locationType: "countryside",
        size: "1000 sq.feet", // Added
        transport: "5km", // Added
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
        host: { name: "John Doe", gen: "family", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 30.0668, longitude: 79.0193 },
        maxdays: 1
    },
    {
        id: 11,
        title: "Hilltop Mansion",
        location: "Rajasthan",
        price: 6000,
        description: "A magnificent mansion on top of a hill with expansive views.",
        liked: false,
        discountPercentage: 30,
        locationType: "countryside",
        size: "5000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 27.0238, longitude: 74.2176 },
        maxdays: 1
    },
    {
        id: 12,
        title: "Contemporary House",
        location: "Hyderabad",
        price: 3500,
        description: "Sleek and modern house with floor-to-ceiling windows.",
        liked: false,
        discountPercentage: 18,
        locationType: "residential-area",
        size: "1800 sq.feet", // Added
        transport: "5km", // Added
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
        host: { name: "John Doe", gen: "female", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 17.3850, longitude: 78.4867 },
        maxdays: 1
    },
    {
        id: 13,
        title: "Tropical Villa",
        location: "Andaman and Nicobar Islands",
        price: 5000,
        description: "Luxurious villa surrounded by tropical gardens.",
        liked: false,
        discountPercentage: 15,
        locationType: "outside-town",
        size: "3000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 11.6234, longitude: 92.7265 },
        maxdays: 1
    },
    {
        id: 14,
        title: "Urban Studio",
        location: "Chennai",
        price: 2200,
        description: "Chic studio apartment with a modern feel and city views.",
        liked: false,
        discountPercentage: 10,
        locationType: "in-town",
        size: "800 sq.feet", // Added
        transport: "2km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.0827, longitude: 80.2707 },
        maxdays: 1
    },
    {
        id: 15,
        title: "Victorian House",
        location: "Kolkata",
        price: 4200,
        description: "A grand Victorian home with vintage charm and modern upgrades.",
        liked: false,
        discountPercentage: 12,
        locationType: "residential-area",
        size: "2500 sq.feet", // Added
        transport: "5km", // Added
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
        host: { name: "John Doe", gen: "female", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 22.5726, longitude: 88.3639 },
        maxdays: 1
    },
    {
        id: 16,
        title: "Country Estate",
        location: "Maharashtra",
        price: 5000,
        description: "A luxurious estate with large grounds and a private lake.",
        liked: false,
        discountPercentage: 20,
        locationType: "countryside",
        size: "6000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "family", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 19.6633, longitude: 75.3280 },
        maxdays: 3
    },
    {
        id: 17,
        title: "Modern Condo",
        location: "Ahmedabad",
        price: 2500,
        description: "A stylish condo with a rooftop terrace and great amenities.",
        liked: false,
        discountPercentage: 17,
        locationType: "in-town",
        size: "1200 sq.feet", // Added
        transport: "2km", // Added
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
        host: { name: "John Doe", gen: "family", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 23.0225, longitude: 72.5714 },
        maxdays: 12
    },
    {
        id: 18,
        title: "Ranch House",
        location: "Madhya Pradesh",
        price: 3500,
        description: "A spacious ranch with a beautiful garden and private stables.",
        liked: false,
        discountPercentage: 10,
        locationType: "countryside",
        size: "3500 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 23.1815, longitude: 79.9867 },
        maxdays: 13
    },
    {
        id: 19,
        title: "Beachfront Villa",
        location: "Kochi",
        price: 7000,
        description: "An exclusive beachfront villa with luxury amenities.",
        liked: false,
        discountPercentage: 5,
        locationType: "outside-town",
        size: "4000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "male", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 9.9312, longitude: 76.2673 },
        maxdays: 14
    },
    {
        id: 20,
        title: "Skyscraper Apartment",
        location: "Noida",
        price: 8000,
        description: "A penthouse apartment with panoramic views of the city skyline.",
        liked: false,
        discountPercentage: 8,
        locationType: "in-town",
        size: "2800 sq.feet", // Added
        transport: "2km", // Added
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
        host: { name: "John Doe", gen: "female", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.5355, longitude: 77.3910 },
        maxdays: 16
    },
    {
        id: 21,
        title: "Rustic Lodge",
        location: "Madhya Pradesh",
        price: 2800,
        description: "A cozy lodge surrounded by forests and mountains.",
        liked: false,
        discountPercentage: 16,
        locationType: "countryside",
        size: "1500 sq.feet", // Added
        transport: "10km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo1.jpg"}
        ],
        host: { name: "John Doe", gen: "family", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.5355, longitude: 77.3910 },
        maxdays: 16
    },
    {
        id: 22,
        title: "Heritage Haveli",
        location: "Jaipur",
        price: 6000,
        description: "A beautiful heritage haveli with traditional architecture and modern amenities.",
        liked: false,
        discountPercentage: 15,
        locationType: "in-town",
        size: "4500 sq.feet", // Added
        transport: "5km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "arjun", review: "A royal experience!", rating: 5, image: "img/photo1.jpg" },
            { name: "neha", review: "Loved the decor!", rating: 4.8, image: "img/photo2.jpg" }
        ],
        host: { name: "Ravi Singh", gen: "male", food: "vegetarian", image: "img/photo1.jpg", yearsWithUs: 4, latitude: 26.9124, longitude: 75.7873 },
        maxdays: 3
    },
    {
        id: 23,
        title: "Countryside Villa",
        location: "Coorg",
        price: 4500,
        description: "A serene villa surrounded by coffee plantations and lush greenery.",
        liked: false,
        discountPercentage: 20,
        locationType: "countryside",
        size: "3000 sq.feet", // Added
        transport: "10km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "suresh", review: "Perfect getaway!", rating: 5, image: "img/photo1.jpg" },
            { name: "anita", review: "Very peaceful!", rating: 4.7, image: "img/photo2.jpg" }
        ],
        host: { name: "Kumar", gen: "female", food: "vegetarian", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 12.3372, longitude: 75.7310 },
        maxdays: 4
    },
    {
        id: 24,
        title: "Luxury Apartment",
        location: "Gurgaon",
        price: 8000,
        description: "A luxurious apartment with state-of-the-art facilities and city views.",
        liked: false,
        discountPercentage: 10,
        locationType: "in-town",
        size: "2000 sq.feet", // Added
        transport: "2km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: true, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "rahul", review: "Amazing place!", rating: 5, image: "img/photo1.jpg" },
            { name: "priya", review: "Very comfortable!", rating: 4.5, image: "img/photo2.jpg" }
        ],
        host: { name: "Anil Sharma", gen: "male", food: "non-vegetarian", image: "img/photo3.jpg", yearsWithUs: 5, latitude: 28.4595, longitude: 77.0266 },
        maxdays: 2
    },
    {
        id: 25,
        title: "Eco-Friendly Cottage",
        location: "Rishikesh",
        price: 3000,
        description: "An eco-friendly cottage near the Ganges, perfect for yoga and meditation.",
        liked: false,
        discountPercentage: 15,
        locationType: "countryside",
        size: "1200 sq.feet", // Added
        transport: "5km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: false, laundry: false, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "deepak", review: "A peaceful retreat!", rating: 5, image: "img/photo1.jpg" },
            { name: "sita", review: "Loved the ambiance!", rating: 4.8, image: "img/photo2.jpg" }
        ],
        host: { name: "Vikram", gen: "family", food: "vegetarian", image: "img/photo4.jpg", yearsWithUs: 2, latitude: 30.0865, longitude: 78.2675 },
        maxdays: 5
    },
    {
        id: 26,
        title: "Charming Bungalow",
        location: "Mysore",
        price: 3500,
        description: "A charming bungalow with a garden and vintage decor.",
        liked: false,
        discountPercentage: 12,
        locationType: "residential-area",
        size: "1800 sq.feet", // Added
        transport: "5km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "manoj", review: "Very cozy!", rating: 5, image: "img/photo1.jpg" },
            { name: "neelam", review: "Felt like home!", rating: 4.6, image: "img/photo2.jpg" }
        ],
        host: { name: "Ramesh", gen: "family", food: "non-vegetarian", image: "img/photo5.jpg", yearsWithUs: 3, latitude: 12.2958, longitude: 76.6393 },
        maxdays: 3
    },
    {
        id: 27,
        title: "Desert Camp",
        location: "Jaisalmer",
        price: 4000,
        description: "A unique desert camp experience with luxury tents and cultural activities.",
        liked: false,
        discountPercentage: 20,
        locationType: "countryside",
        size: "1000 sq.feet", // Added
        transport: "10km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: false, ac: false, laundry: false, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sanjay", review: "An unforgettable experience!", rating: 5, image: "img/photo1.jpg" },
            { name: "isha", review: "Loved the cultural shows!", rating: 4.9, image: "img/photo2.jpg" }
        ],
        host: { name: "Karan", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 4, latitude: 26.9157, longitude: 70.9083 },
        maxdays: 2
    },
    {
        id: 28,
        title: "Hill Station Retreat",
        location: "Manali",
        price: 5000,
        description: "A beautiful retreat in the hills with stunning views and cozy interiors.",
        liked: false,
        discountPercentage: 15,
        locationType: "countryside",
        size: "2500 sq.feet", // Added
        transport: "10km", // Added
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "pradeep", review: "A perfect getaway!", rating: 5, image: "img/photo1.jpg" },
            { name: "ananya", review: "Stunning views!", rating: 4.8, image: "img/photo2.jpg" }
        ],
        host: { name: "Raj", gen: "female", food: "non-vegetarian", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 32.2397, longitude: 77.1887 },
        maxdays: 4
    },
    {
        id: 29,
        title: "Penthouse Suite",
        location: "Kolkata, West Bengal",
        price: "7500",
        description: "A luxurious penthouse with panoramic city views.",
        liked: false,
        discountPercentage: 22,
        locationType: "countryside",
        size: "3000 sq.feet", // Added
        transport: "5km", // Added
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
        host: { name: "John Doe", gen: "male", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 22.5726, longitude: 88.3639 },
        maxdays: 7
    },
    {
        id: 30,
        title: "Farmhouse",
        location: "Pune, Maharashtra",
        price: "2300",
        description: "A traditional farmhouse with acres of land and fresh air.",
        liked: false,
        discountPercentage: 17,
        locationType: "countryside",
        size: "5000 sq.feet", // Added
        transport: "10km", // Added
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
        host: { name: "John Doe", gen: "family", food: "non-vegetarian", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 18.5204, longitude: 73.8567 },
        maxdays: 7
    }];

    
export default { homes, layout_homes };