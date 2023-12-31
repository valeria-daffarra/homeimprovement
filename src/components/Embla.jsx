import React from 'react'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image1 from 'images/slide-1.png'
import image2 from 'images/slide-2.png'
import { useRef, useState, useCallback, useEffect } from 'react';

const TWEEN_FACTOR = 4.2
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = () => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', dragFree: false, loop: true }, [autoplay.current])
  const [tweenValues, setTweenValues] = useState([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide" key='1' style={{
                ...(tweenValues.length && { opacity: tweenValues[0] })
              }} >
              <Image
                className="embla__slide__img"
                src={image1}
                alt="Your alt text"
                width='2000'
                height='2000'
              />
            </div>
            <div className="embla__slide" key='2' style={{
                ...(tweenValues.length && { opacity: tweenValues[1] })
              }}>
              <Image
                className="embla__slide__img "
                src={image2}
                alt="Your alt text"
                width='1500'
                height='1500'
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel