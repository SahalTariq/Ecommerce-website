const products = [
  {
    id: 9,
    name: "Floral Summer Dress",
    price: 49.99,
    image: "https://media.istockphoto.com/id/1703693849/photo/young-smiling-asian-nepali-indian-housewife-giving-several-best-gestures-and-poses-with.jpg?s=612x612&w=0&k=20&c=46cGFDa2I6tX6DYAsS5sPFsguliQbyBtsPHqwr0ZaEc=",
    colors: ["Pink", "White", "Blue"],
    description: "Lightweight and breezy floral summer dress perfect for casual outings and beachwear.",
    category: "Woman",
    isFeatured: true // <-- Added this property
  },
  {
    id: 10,
    name: "Women's Blazer Coat",
    price: 89.95,
    image: "https://media.istockphoto.com/id/1206181077/photo/happy-young-persian-woman-showing-something-in-traditional-clothing.jpg?s=612x612&w=0&k=20&c=CzvTPjwFZZrpNPm8ZjuubpUVp2Z_pZ8VvbjxP-Vo3O4=",
    colors: ["Black", "Grey", "Beige"],
    description: "Stylish formal blazer coat for women, ideal for office and events.",
    category: "Children"
  },
  {
    id: 11,
    name: "Casual Denim Jacket",
    price: 59.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwU1wqYbvZRVxBBl2ynopsY0pnImtPqd8pA&s",
    colors: ["Blue", "Dark Blue"],
    description: "Trendy denim jacket with a relaxed fit and modern cuts. A staple for every wardrobe.",
    category: "Woman"
  },
  {
    id: 12,
    name: "High Waist Wide-Leg Pants",
    price: 39.95,
    image: "https://images.pexels.com/photos/8473934/pexels-photo-8473934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    colors: ["White", "Cream", "Black"],
    description: "Comfortable and elegant high-waisted pants with a wide-leg silhouette.",
    category: "Children"
  },
  {
    id: 13,
    name: "Men's Leather Boots",
    price: 129.99,
    image: "https://images.pexels.com/photos/769139/pexels-photo-769139.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    colors: ["Brown", "Black"],
    description: "Durable leather boots crafted for style and rugged wear. Great for both casual and formal looks.",
    category: "Men",
     
  },
  {
    id: 14,
    name: "Running Sneakers",
    price: 89.95,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    colors: ["Grey", "Red", "White"],
    description: "Lightweight sneakers designed for daily workouts and running routines.",
    category: "Men",
    isFeatured: true
  },
  {
    id: 15,
    name: "Casual Loafers",
    price: 59.95,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Tan", "Black", "Navy"],
    description: "Comfortable slip-on loafers with a refined design perfect for day-to-day wear.",
    category: "Men",
    isFeatured: true // <-- Added this property
  },
  {
    id: 16,
    name: "High-Top Canvas Sneakers",
    price: 69.99,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    colors: ["Black", "Red", "Green"],
    description: "Trendy high-top sneakers ideal for casual street-style fashion.",
    category: "Children"
  },
];

export default products;