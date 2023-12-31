import React from 'react'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image1 from 'images/slide1-1.png'
import image2 from 'images/slide-2.png'
import image3 from 'images/slide-3.png'
import image4 from 'images/slide-4.png'
import image5 from 'images/slide-5.png'
import image6 from 'images/slide-6.png'
import image7 from 'images/slide-7.png'
import image8 from 'images/slide-8.png'
import image9 from 'images/slide-9.png'
import image10 from 'images/slide-10.png'
import { useRef, useState, useCallback, useEffect } from 'react';



const EmblaCarousel = () => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', dragFree: false, loop: true }, [autoplay.current])
  
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide" key='1'  >
              <Image
                className="embla__slide__img"
                src={image1}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='2' >
              <Image
                className="embla__slide__img "
                src={image2}
                alt="Your alt text"
                width='1500'
                height='1500'
              />
            </div>
            <div className="embla__slide" key='3'  >
              <Image
                className="embla__slide__img"
                src={image3}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='4' >
              <Image
                className="embla__slide__img"
                src={image4}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='5'  >
              <Image
                className="embla__slide__img"
                src={image5}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='6' >
              <Image
                className="embla__slide__img"
                src={image6}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='7'  >
              <Image
                className="embla__slide__img"
                src={image7}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='8'  >
              <Image
                className="embla__slide__img"
                src={image8}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='9'  >
              <Image
                className="embla__slide__img"
                src={image9}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='10'  >
              <Image
                className="embla__slide__img"
                src={image10}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel