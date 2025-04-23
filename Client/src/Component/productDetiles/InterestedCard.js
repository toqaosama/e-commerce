import React, { useState } from 'react';
import { Carousel, Image, Button } from 'react-bootstrap';

const InterestedCard = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mb-4">
      <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} indicators={false}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <Image src={img.url} fluid className="w-100" alt={img.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-2">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="link"
            className={`p-0 mx-1 ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div 
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? '#000' : '#ccc'
              }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InterestedCard;