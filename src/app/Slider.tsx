import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const images = [
    'https://cdn.sanity.io/images/599r6htc/localized/ab05e1a185076f6612ad3c373d95735362135a74-71x22.svg?q=75&fit=max&auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/10030cd64a680afb8e98dee4483db66d26ef09d1-91x18.svg?q=75&fit=max&auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/32866b28878c23cdd203b5f4f69cc9102381e174-146x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/d54af886ed8659bc278aef9cb6cfb61d8b5a6c9c-137x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/962518cdf66a8669ac335378ad252c16bb4ae581-133x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/4403c512ee8bbb39347dccad8ef0d210e9e1ee29-102x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/4403c512ee8bbb39347dccad8ef0d210e9e1ee29-102x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/ec94fd9f63d827b106e78931b08b134faa3173be-92x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/e68a8936a4abb0cf2323e4550fad6b981c0b328e-67x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/0d9aa9b05e89ce780ff78ee4a75fee2c96744292-90x22.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/e68a8936a4abb0cf2323e4550fad6b981c0b328e-67x18.svg?q=75&amp;fit=max&amp;auto=format',
    'https://cdn.sanity.io/images/599r6htc/localized/e68a8936a4abb0cf2323e4550fad6b981c0b328e-67x18.svg?q=75&amp;fit=max&amp;auto=format',
];

const ImageSlider = () => {
  const responsive = {
    0: { items: 2 },
    1024: { items: 7 },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      items={images.map((image, index) => (
        <img src={image} alt={`Image ${index}`} key={index} />
      ))}
    />
  );
};

export default ImageSlider;
