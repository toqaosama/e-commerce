import React from "react";

const InterestedSection = () => {
  const imageUrl =
    "https://media.alshaya.com/adobe/assets/urn:aaid:aem:1b4b55dc-1e30-47fb-b92f-c1e9b088e002/as/EID-88d16fc8fa2ac6d5515a9fb73b13cc8420248e64.jpg?width=450&height=675&preferwebp=true";

  return (
    <div className="container-fluid px-0">
      {/* Products Grid - 5 per row */}
      <div className="d-flex flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ flex: "0 0 20%", padding: 0 }}>
            <img
              src={imageUrl}
              className="img-fluid w-20"
              alt="Fitted jacket"
              title="Fitted jacket"
              style={{
                aspectRatio: "450 / 675",
                objectFit: "cover",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedSection;
