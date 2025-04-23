import React from 'react';

const ProductDetailsImg = () => {
  return (
    <div className="product-images" style={{ 
      display: 'block', 
     
      position: 'relative', 
      flexDirection: 'column',
      maxWidth: '80%'
    }}>
      <div style={{ 
        alignSelf: 'auto', 
        position: 'sticky', 
        bottom: '213.35px', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        {/* Main grid container */}
        <div style={{ 
          display: 'grid',
         
          position: 'relative',
          gridAutoRows: 'min-content',
          width: '100%'
        }}>
          {/* Large image (spans both columns) */}
          <div style={{ 
            gridColumn: '1 / span 2',
            width: '100%'
          }}>
            <img 
              title="Main product image" 
              alt="Main product view" 
              width="100%" 
              height="100%" 
              loading="eager" 
              src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:3e215a6b-d51d-4923-b161-6cdcb97fd95a/as/EID-0cdf9995bcc2bc10d2cd824059b451eac898f63e.jpg?preferwebp=true&width=1920" 
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '0px'
              }} 
            />
          </div>

          {/* Two smaller images (each takes one column) */}
          <div>
            <img 
              title="Product detail 1" 
              alt="Product detail view 1" 
              width="960" 
              height="595" 
              loading="lazy" 
              src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:cbbd9d88-5673-4194-9856-a16e9b485ea1/as/EID-50d1c3d4c74b05f9058b4d835ec3633e51ecffee.jpg?preferwebp=true&width=960" 
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '0px'
              }} 
            />
          </div>
          <div>
            <img 
              title="Product detail 2" 
              alt="Product detail view 2" 
              width="960" 
              height="595" 
              loading="lazy" 
              src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:acb920f5-fc7e-4a32-84aa-4366df6acb52/as/EID-e1d1fdaf49110e6bdb2333fcc28d6ba5259347bf.jpg?preferwebp=true&width=960" 
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '0px'
              }} 
            />
          </div>

          {/* Single image that spans same width as the two above */}
          <div style={{ 
            gridColumn: '1 / span 2',
            width: '100%'
          }}>
            <img 
              title="Additional product view" 
              alt="Additional product image" 
              width="1920" 
              height="1191" 
              loading="lazy" 
              src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:ffae14b1-7938-4b89-b79c-42211617ebaf/as/EID-21a167e42e25de39aa289a3a96c56dfea3c47474.jpg?preferwebp=true&width=1920" 
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '0px'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsImg;