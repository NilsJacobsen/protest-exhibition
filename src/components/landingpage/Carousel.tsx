/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return <div className="w-full lg:max-w-4xl lg:mx-auto lg:px-8 lg:pb-16">
    <Carousel>
      <div>
        <img src="/carousel/_72A0906.jpg" alt="Carousel Image 1" />
      </div>
      <div>
        <img src="/carousel/_72A0913.jpg" alt="Carousel Image 2" />
      </div>
      <div>
        <img src="/carousel/_72A0924.jpg" alt="Carousel Image 3" />
      </div>
      <div>
        <img src="/carousel/_72A0951.jpg" alt="Carousel Image 4" />
      </div>
      <div>
        <img src="/carousel/_72A0980.jpg" alt="Carousel Image 5" />
      </div>
      <div>
        <img src="/carousel/_72A1012.jpg" alt="Carousel Image 6" />
      </div>
      <div>
        <img src="/carousel/_72A1148.jpg" alt="Carousel Image 7" />
      </div>
      <div>
        <img src="/carousel/_72A1221.jpg" alt="Carousel Image 8" />
      </div>
      <div>
        <img src="/carousel/_72A1458.jpg" alt="Carousel Image 9" />
      </div>
      <div>
        <img src="/carousel/_72A1511.jpg" alt="Carousel Image 10" />
      </div>
      <div>
        <img src="/carousel/_72A1589.jpg" alt="Carousel Image 11" />
      </div>
    </Carousel>
    {/* <p className="px-4 md:px-0">© Catharina Cerny | <a className="underline cursor-pointer hover:opacity-70" target="_blanc" href="https://www.instagram.com/cat_und_catha/">@cat_und_catha</a></p> */}
  </div>
}

export default CarouselComponent;