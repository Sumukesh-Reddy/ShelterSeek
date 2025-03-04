// Sample data for homes
var homes = [
    {
        id: 1,
        title: "Modern Apartment",
        location: "Mumbai",
        price: "2500",
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
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 19.0760, longitude: 72.8777 },
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
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: false, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "alex", review: "amazing place", rating: 4.8, image: "img/photo1.jpg" },
            { name: "maria", review: "peaceful", rating: 4.2, image: "img/photo2.jpg" }
        ],
        host: { name: "Jane Smith", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 10.8505, longitude: 76.2711 },
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
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "tom", review: "great luxury experience", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Mark Taylor", image: "img/photo3.jpg", yearsWithUs: 4, latitude: 15.2993, longitude: 74.1240 },
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
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: false, hotWater: true, taps: true, lift: true, carParking: false, EvCharging: false, Electricity: true },
        review_main: [
            { name: "lisa", review: "loved the urban vibe", rating: 4.6, image: "img/photo1.jpg" }
        ],
        host: { name: "Alice Green", image: "img/photo4.jpg", yearsWithUs: 6, latitude: 12.9716, longitude: 77.5946 },
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
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: true, Electricity: true },
        review_main: [
            { name: "emma", review: "perfect beach house", rating: 5, image: "img/photo1.jpg" }
        ],
        host: { name: "Chris Brown", image: "img/photo5.jpg", yearsWithUs: 2, latitude: 11.9416, longitude: 79.8083 },
        maxdays: 5
    },
    {
        id: 6,
        title: "Mountain Retreat",
        location: "Himachal Pradesh",
        price: "3500",
        description: "A perfect getaway nestled in the mountains with breathtaking views.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 12,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 32.0657, longitude: 77.1983 },
        maxdays: 7
    },
    {
        id: 7,
        title: "Suburban House",
        location: "Gurgaon",
        price: "2800",
        description: "A spacious family home in a quiet neighborhood.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 18,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.4595, longitude: 77.0266 },
        maxdays: 3
    },
    {
        id: 8,
        title: "Penthouse Suite",
        location: "Delhi",
        price: "7500",
        description: "A luxurious penthouse with panoramic city views.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 22,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.6139, longitude: 77.2090 },
        maxdays: 7
    },
    {
        id: 9,
        title: "Farmhouse",
        location: "Punjab",
        price: "2300",
        description: "A traditional farmhouse with acres of land and fresh air.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 17,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 30.7333, longitude: 76.7794 },
        maxdays: 7
    },
    {
        id: 10,
        title: "Lakefront Cabin",
        location: "Uttarakhand",
        price: "2000",
        description: "A cozy cabin on the lake, perfect for relaxing weekends.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 14,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 30.0668, longitude: 79.0193 },
        maxdays: 1
    },
    {
        id: 11,
        title: "Hilltop Mansion",
        location: "Rajasthan",
        price: 6000,
        description: "A magnificent mansion on top of a hill with expansive views.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 30,
        roomType: "Mansion",
        bedrooms: 6,
        beds: 8,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 27.0238, longitude: 74.2176 },
        maxdays: 1
    },
    {
        id: 12,
        title: "Contemporary House",
        location: "Hyderabad",
        price: 3500,
        description: "Sleek and modern house with floor-to-ceiling windows.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 18,
        roomType: "House",
        bedrooms: 3,
        beds: 4,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 17.3850, longitude: 78.4867 },
        maxdays: 1
    },
    {
        id: 13,
        title: "Tropical Villa",
        location: "Andaman and Nicobar Islands",
        price: 5000,
        description: "Luxurious villa surrounded by tropical gardens.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 15,
        roomType: "Villa",
        bedrooms: 5,
        beds: 6,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 11.6234, longitude: 92.7265 },
        maxdays: 1
    },
    {
        id: 14,
        title: "Urban Studio",
        location: "Chennai",
        price: 2200,
        description: "Chic studio apartment with a modern feel and city views.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 10,
        roomType: "Studio",
        bedrooms: 1,
        beds: 1,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 13.0827, longitude: 80.2707 },
        maxdays: 1
    },
    {
        id: 15,
        title: "Victorian House",
        location: "Kolkata",
        price: 4200,
        description: "A grand Victorian home with vintage charm and modern upgrades.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 12,
        roomType: "House",
        bedrooms: 4,
        beds: 6,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 22.5726, longitude: 88.3639 },
        maxdays: 1
    },
    {
        id: 16,
        title: "Country Estate",
        location: "Maharashtra",
        price: 5000,
        description: "A luxurious estate with large grounds and a private lake.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 20,
        roomType: "Estate",
        bedrooms: 6,
        beds: 7,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 19.6633, longitude: 75.3280 },
        maxdays: 1
    },
    {
        id: 17,
        title: "Modern Condo",
        location: "Ahmedabad",
        price: 2500,
        description: "A stylish condo with a rooftop terrace and great amenities.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 17,
        roomType: "Condo",
        bedrooms: 2,
        beds: 2,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 23.0225, longitude: 72.5714 },
        maxdays: 1
    },
    {
        id: 18,
        title: "Ranch House",
        location: "Madhya Pradesh",
        price: 3500,
        description: "A spacious ranch with a beautiful garden and private stables.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 10,
        roomType: "House",
        bedrooms: 4,
        beds: 5,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 23.1815, longitude: 79.9867 },
        maxdays: 1
    },
    {
        id: 19,
        title: "Beachfront Villa",
        location: "Kochi",
        price: 7000,
        description: "An exclusive beachfront villa with luxury amenities.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 5,
        roomType: "Villa",
        bedrooms: 5,
        beds: 6,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 9.9312, longitude: 76.2673 },
        maxdays: 1
    },
    {
        id: 20,
        title: "Skyscraper Apartment",
        location: "Noida",
        price: 8000,
        description: "A penthouse apartment with panoramic views of the city skyline.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 8,
        roomType: "Apartment",
        bedrooms: 3,
        beds: 4,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
            { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
            { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
        ],
        host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.5355, longitude: 77.3910 },
        maxdays: 1
    },
    {
        id: 21,
        title: "Rustic Lodge",
        location: "Madhya Pradesh",
        price: 2800,
        description: "A cozy lodge surrounded by forests and mountains.",
        media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 16,
        roomType: "Lodge",
        bedrooms: 3,
        beds: 4,
        amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
        review_main: [
            { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
            { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
            { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
            { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo1.jpg"}],
            host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 28.5355, longitude: 77.3910 },
            maxdays: 1
        },
            {
                id: 22,
                title: "Heritage Haveli",
                location: "Jaipur",
                price: 6000,
                description: "A beautiful heritage haveli with traditional architecture and modern amenities.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 15,
                roomType: "Haveli",
                bedrooms: 5,
                beds: 6,
                amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "arjun", review: "A royal experience!", rating: 5, image: "img/photo1.jpg" },
                    { name: "neha", review: "Loved the decor!", rating: 4.8, image: "img/photo2.jpg" }
                ],
                host: { name: "Ravi Singh", image: "img/photo1.jpg", yearsWithUs: 4, latitude: 26.9124, longitude: 75.7873 },
                maxdays: 3
            },
            {
                id: 23,
                title: "Countryside Villa",
                location: "Coorg",
                price: 4500,
                description: "A serene villa surrounded by coffee plantations and lush greenery.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 20,
                roomType: "Villa",
                bedrooms: 4,
                beds: 5,
                amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "suresh", review: "Perfect getaway!", rating: 5, image: "img/photo1.jpg" },
                    { name: "anita", review: "Very peaceful!", rating: 4.7, image: "img/photo2.jpg" }
                ],
                host: { name: "Kumar", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 12.3372, longitude: 75.7310 },
                maxdays: 4
            },
            {
                id: 24,
                title: "Luxury Apartment",
                location: "Gurgaon",
                price: 8000,
                description: "A luxurious apartment with state-of-the-art facilities and city views.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 10,
                roomType: "Apartment",
                bedrooms: 3,
                beds: 4,
                amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: true, carParking: true, EvCharging: true, Electricity: true },
                review_main: [
                    { name: "rahul", review: "Amazing place!", rating: 5, image: "img/photo1.jpg" },
                    { name: "priya", review: "Very comfortable!", rating: 4.5, image: "img/photo2.jpg" }
                ],
                host: { name: "Anil Sharma", image: "img/photo3.jpg", yearsWithUs: 5, latitude: 28.4595, longitude: 77.0266 },
                maxdays: 2
            },
            {
                id: 25,
                title: "Eco-Friendly Cottage",
                location: "Rishikesh",
                price: 3000,
                description: "An eco-friendly cottage near the Ganges, perfect for yoga and meditation.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 15,
                roomType: "Cottage",
                bedrooms: 2,
                beds: 2,
                amenities: { wifi: true, ac: false, laundry: false, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "deepak", review: "A peaceful retreat!", rating: 5, image: "img/photo1.jpg" },
                    { name: "sita", review: "Loved the ambiance!", rating: 4.8, image: "img/photo2.jpg" }
                ],
                host: { name: "Vikram", image: "img/photo4.jpg", yearsWithUs: 2, latitude: 30.0865, longitude: 78.2675 },
                maxdays: 5
            },
            {
                id: 26,
                title: "Charming Bungalow",
                location: "Mysore",
                price: 3500,
                description: "A charming bungalow with a garden and vintage decor.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 12,
                roomType: "Bungalow",
                bedrooms: 3,
                beds: 4,
                amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "manoj", review: "Very cozy!", rating: 5, image: "img/photo1.jpg" },
                    { name: "neelam", review: "Felt like home!", rating: 4.6, image: "img/photo2.jpg" }
                ],
                host: { name: "Ramesh", image: "img/photo5.jpg", yearsWithUs: 3, latitude: 12.2958, longitude: 76.6393 },
                maxdays: 3
            },
            {
                id: 27,
                title: "Desert Camp",
                location: "Jaisalmer",
                price: 4000,
                description: "A unique desert camp experience with luxury tents and cultural activities.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 20,
                roomType: "Camp",
                bedrooms: 2,
                beds: 2,
                amenities: { wifi: false, ac: false, laundry: false, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "sanjay", review: "An unforgettable experience!", rating: 5, image: "img/photo1.jpg" },
                    { name: "isha", review: "Loved the cultural shows!", rating: 4.9, image: "img/photo2.jpg" }
                ],
                host: { name: "Karan", image: "img/photo1.jpg", yearsWithUs: 4, latitude: 26.9157, longitude: 70.9083 },
                maxdays: 2
            },
            {
                id: 28,
                title: "Hill Station Retreat",
                location: "Manali",
                price: 5000,
                description: "A beautiful retreat in the hills with stunning views and cozy interiors.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 15,
                roomType: "Retreat",
                bedrooms: 4,
                beds: 5,
                amenities: { wifi: true, ac: true, laundry: true, hotWater: true, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "pradeep", review: "A perfect getaway!", rating: 5, image: "img/photo1.jpg" },
                    { name: "ananya", review: "Stunning views!", rating: 4.8, image: "img/photo2.jpg" }
                ],
                host: { name: "Raj", image: "img/photo2.jpg", yearsWithUs: 3, latitude: 32.2397, longitude: 77.1887 },
                maxdays: 4
            },{
                id: 29,
                title: "Penthouse Suite",
                location: "Kolkata, West Bengal",
                price: "7500",
                description: "A luxurious penthouse with panoramic city views.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 22,
                amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
                    { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
                    { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
                    { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
                    { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
                    { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
                ],
                host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 22.5726, longitude: 88.3639 },
                maxdays: 7
            },
            {
                id: 30,
                title: "Farmhouse",
                location: "Pune, Maharashtra",
                price: "2300",
                description: "A traditional farmhouse with acres of land and fresh air.",
                media: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
                liked: false,
                discountPercentage: 17,
                amenities: { wifi: true, ac: true, laundry: false, hotWater: false, taps: true, lift: false, carParking: true, EvCharging: false, Electricity: true },
                review_main: [
                    { name: "sumukesh", review: "it is soo good", rating: 5, image: "img/photo1.jpg" },
                    { name: "bobby", review: "nice", rating: 4.5, image: "img/photo2.jpg" },
                    { name: "sai", review: "good", rating: 3.4, image: "img/photo3.jpg" },
                    { name: "jhansi", review: "very good", rating: 4.4, image: "img/photo3.jpg" },
                    { name: "chinnu", review: "very bad", rating: 2.4, image: "img/photo3.jpg" },
                    { name: "jaswanth", review: "good", rating: 5, image: "img/photo3.jpg" }
                ],
                host: { name: "John Doe", image: "img/photo1.jpg", yearsWithUs: 5, latitude: 18.5204, longitude: 73.8567 },
                maxdays: 7
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

            if (days > home.maxdays) {
                rentButton.textContent = "Select valid days";
                return;
            } else {
            const pricePerNight = parseFloat(home.price); // Get price from home data
            const totalCost = days * pricePerNight; // Calculate total cost
            rentButton.textContent = `Rent Now for ₹${totalCost}`; // Update button text
            }
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
                        <p><strong> Maximum Days:</strong><span >  ${home.maxdays} Days</span>
                        <label for="check-in">Check-in Date:</label>
                        <input type="date" id="check-in" name="check-in">
                        <label for="check-out">Check-out Date:</label>
                        <input type="date" id="check-out" name="check-out">
                        <button id="rent-button">Rent Now</button>
                         <button id="save-button">save for late</button>
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