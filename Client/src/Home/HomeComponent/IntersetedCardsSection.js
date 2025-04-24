import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // For wishlist toggle icon

const InterestedSection = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const imageUrls = [
    "https://media.alshaya.com/adobe/assets/urn:aaid:aem:1fbc412c-19ee-47ef-9b86-36ad1c3afee5/as/EID-85ab170684dd40118de3d7f1cce688fa2762655c.jpg?width=450&height=675&preferwebp=true",
    "https://media.alshaya.com/adobe/assets/urn:aaid:aem:1b4b55dc-1e30-47fb-b92f-c1e9b088e002/as/EID-88d16fc8fa2ac6d5515a9fb73b13cc8420248e64.jpg?width=450&height=675&preferwebp=true",
    // Add more URLs here for carousel
  ];

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const nextImage = () => {
    setCarouselIndex((carouselIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCarouselIndex((carouselIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="container-fluid px-0">
      <h2
        style={{
          fontSize: "44px",
          lineHeight: "57.2px",
          color: "rgb(228, 1, 15)",
          margin: "0.7rem 2px 0",
          fontFamily: "'hm slussen wide bold', 'helvetica neue', sans-serif",
          whiteSpace: "break-spaces",
        }}
      >
        Interested Section
      </h2>

      {/* Products Grid */}
      <div className="d-flex flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ flex: "0 0 20%", padding: 0, position: "relative" }}>
            <img
              src={imageUrls[carouselIndex]} // You can randomize or alternate as needed
              className="img-fluid w-100"
              alt="Fitted jacket"
              title="Fitted jacket"
              style={{
                aspectRatio: "450 / 675",
                objectFit: "cover",
                display: "block",
                width: "100%",
              }}
            />
            {/* Wishlist Toggle on Grid Items */}
            <button
              onClick={toggleWishlist}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: isWishlisted ? "red" : "#ccc",
                fontSize: "20px",
              }}
            >
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedSection;
