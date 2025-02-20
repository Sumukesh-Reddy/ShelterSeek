// rooms boxes js starts from here
var homes = [
    {
        id: 1,
        title: "Modern Apartment",
        location: "New York",
        price: "250000",
        description: "Beautiful home with a great view and spacious rooms.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 20
    },
    {
        id: 2,
        title: "Cozy Cottage",
        location: "California",
        price: "180000",
        description: "A charming cottage surrounded by nature.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 30
    },
    {
        id: 3,
        title: "Luxury Villa",
        location: "Miami",
        price: "120000",
        description: "A stunning villa with a private beach and pool.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 25
    },
    {
        id: 4,
        title: "Downtown Loft",
        location: "Chicago",
        price: "300000",
        description: "Spacious loft in the heart of the city with modern amenities.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 15
    },
    {
        id: 5,
        title: "Beach House",
        location: "Florida",
        price: "450000",
        description: "A beautiful beachfront property with stunning ocean views.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 10
    },
    {
        id: 6,
        title: "Mountain Retreat",
        location: "Colorado",
        price: "350000",
        description: "A perfect getaway nestled in the mountains with breathtaking views.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 12
    },
    {
        id: 7,
        title: "Suburban House",
        location: "Texas",
        price: "280000",
        description: "A spacious family home in a quiet neighborhood.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 18
    },
    {
        id: 8,
        title: "Penthouse Suite",
        location: "Los Angeles",
        price: "750000",
        description: "A luxurious penthouse with panoramic city views.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 22
    },
    {
        id: 9,
        title: "Farmhouse",
        location: "Iowa",
        price: "230000",
        description: "A traditional farmhouse with acres of land and fresh air.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 17
    },
    {
        id: 10,
        title: "Lakefront Cabin",
        location: "Minnesota",
        price: "200000",
        description: "A cozy cabin on the lake, perfect for relaxing weekends.",
        images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
        liked: false,
        discountPercentage: 14
    }
];

// finding id of house
document.addEventListener("DOMContentLoaded", ()=>{
    const params=new URLSearchParams(window.location.search);
    const homeId=parseInt(params.get("id"));
    const home=homes.find(h=>h.id===homeId);

    const layout_html_details=document.getElementById("home-details");

    if (home&&layout_html_details){
        const discountedPrice=parseFloat(home.price)*(1 - home.discountPercentage / 100);
        const originalPrice=parseFloat(home.price);
        document.title = `${home.title} - ${home.location}`;
        layout_html_details.innerHTML = `
            <h2>${home.title}</h2>
            <p><strong>Location:</strong> ${home.location}</p>
            <p><strong>Price:</strong> ${formatCurrency(discountedPrice)}</p>
            <p><strong>Original Price:</strong> <span style="text-decoration: line-through;">${formatCurrency(originalPrice)}</span></p>
            <p><strong>Discount:</strong> ${home.discountPercentage}% off</p>
            <p><strong>Description:</strong> ${home.description}</p>
            <button id="back_to_index"><a href="index.html">back</a></button>
        `;
    } else {
        layout_html_details.innerHTML = "<p>Home not found.</p>";
    }
});

function formatCurrency(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
}
