// src/core/data/filterData.js
export const sortingOptions = [
    { label: "Recommended", value: "default" },
    { label: "Name A to Z", value: "title_asc" },
    { label: "Name Z to A", value: "title_desc" },
    { label: "Price low to high", value: "final_price_asc" },
    { label: "Price high to low", value: "final_price_desc" },
    { label: "New In", value: "created_desc" }
  ];
  
  export const priceRanges = [
    { label: "EGP 600.00 - EGP 650.00", value: "600 - 650", count: 2 },
    { label: "EGP 700.00 - EGP 750.00", value: "700 - 750", count: 3 },
    { label: "EGP 750.00 - EGP 800.00", value: "750 - 800", count: 1 },
    { label: "EGP 850.00 - EGP 900.00", value: "850 - 900", count: 3 },
    { label: "EGP 1150.00 - EGP 1200.00", value: "1150 - 1200", count: 4 },
    { label: "EGP 1450.00 - EGP 1500.00", value: "1450 - 1500", count: 3 },
    { label: "EGP 1650.00 - EGP 1700.00", value: "1650 - 1700", count: 1 },
    { label: "EGP 1950.00 - EGP 2000.00", value: "1950 - 2000", count: 2 },
    { label: "EGP 2150.00 - EGP 2200.00", value: "2150 - 2200", count: 10 },
    { label: "EGP 2450.00 - EGP 2500.00", value: "2450 - 2500", count: 4 },
    { label: "EGP 2750.00 - EGP 2800.00", value: "2750 - 2800", count: 5 },
    { label: "EGP 2950.00 - EGP 3000.00", value: "2950 - 3000", count: 5 },
    { label: "EGP 3950.00 - EGP 4000.00", value: "3950 - 4000", count: 5 },
    { label: "EGP 4450.00 - EGP 4500.00", value: "4450 - 4500", count: 2 },
    { label: "EGP 4950.00 - EGP 5000.00", value: "4950 - 5000", count: 3 },
    { label: "EGP 5950.00 - EGP 6000.00", value: "5950 - 6000", count: 2 }
  ];
  
  export const sizes = [
    { label: "XXS", value: "xxs", count: 15 },
    { label: "XS", value: "xs", count: 22 },
    { label: "XS/S", value: "xs/s", count: 1 },
    { label: "S", value: "s", count: 32 },
    { label: "M", value: "m", count: 28 },
    { label: "L", value: "l", count: 27 },
    { label: "XL", value: "xl", count: 19 },
    { label: "XXL", value: "xxl", count: 11 },
    { label: "6", value: "6", count: 5 },
    { label: "8", value: "8", count: 8 },
    { label: "10", value: "10", count: 10 },
    { label: "12", value: "12", count: 8 },
    { label: "14", value: "14", count: 7 },
    { label: "16", value: "16", count: 5 },
    { label: "18", value: "18", count: 2 },
    { label: "20", value: "20", count: 2 },
    { label: "22", value: "22", count: 2 },
    { label: "24", value: "24", count: 1 },
    { label: "3", value: "3", count: 1 },
    { label: "4", value: "4", count: 1 },
    { label: "NOSIZE", value: "nosize", count: 9 },
    { label: "3XL", value: "3xl", count: 1 },
    { label: "4XL", value: "4xl", count: 1 },
    { label: "M/L", value: "m/l", count: 1 },
    { label: "ONESIZE", value: "onesize", count: 1 }
  ];
  
  export const colors = [
    { label: "beige", value: "beige", color: "#f5f5dc", count: 4 },
    { label: "black", value: "black", color: "#000000", count: 9 },
    { label: "blue", value: "blue", color: "#1690c8", count: 10 },
    { label: "brown", value: "brown", color: "#a52a2a", count: 1 },
    { label: "gold", value: "gold", color: "#daae00", count: 6 },
    { label: "green", value: "green", color: "#7bb93c", count: 1 },
    { label: "multi", value: "multi", color: null, count: 14 },
    { label: "pink", value: "pink", color: "#d8298f", count: 4 },
    { label: "silver", value: "silver", color: "#c0c0c0", count: 2 },
    { label: "white", value: "white", color: "#ffffff", count: 21 },
    { label: "yellow", value: "yellow", color: "#ffff00", count: 2 }
  ];
  
  export const productTypes = [
    { label: "Bag", value: "bag", count: 2 },
    { label: "Belt", value: "belt", count: 1 },
    { label: "Blazer", value: "blazer", count: 2 },
    { label: "Blouse", value: "blouse", count: 6 },
    { label: "Bracelet", value: "bracelet", count: 1 },
    { label: "Dress", value: "dress", count: 16 },
    { label: "Earrings", value: "earrings", count: 7 },
    { label: "Jeans", value: "jeans", count: 2 },
    { label: "Knickers", value: "knickers", count: 1 },
    { label: "Ring", value: "ring", count: 1 },
    { label: "Shirt", value: "shirt", count: 2 },
    { label: "Shoes", value: "shoes", count: 1 },
    { label: "Skirt", value: "skirt", count: 5 },
    { label: "Top", value: "top", count: 5 },
    { label: "Trousers", value: "trousers", count: 3 }
  ];