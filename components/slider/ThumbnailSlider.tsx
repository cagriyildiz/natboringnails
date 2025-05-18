import React from 'react';
import {EmblaOptionsType} from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from './carousel';
import Image from 'next/image';

interface ThumbnailSliderProps {
  images: string[]
}

function ThumbnailSlider({images}: ThumbnailSliderProps) {
  const OPTIONS: EmblaOptionsType = {loop: true};
  return (
    <>
      <div className=' mx-auto'>
        <Carousel options={OPTIONS} className='relative' isAutoPlay={true}>
          <SliderContainer className='gap-2'>
            {images.map((i, index) => (
              <Slider
                key={index}
                className='min-h-100 max-h-100 md:min-h-148 md:max-h-148 w-full'
                thumnailSrc={i}
              >
                {/*<Image*/}
                {/*  src={i}*/}
                {/*  width={1400}*/}
                {/*  height={800}*/}
                {/*  alt='image'*/}
                {/*  className='h-full object-cover rounded-lg w-full'*/}
                {/*/>*/}
                <Image
                  src={i}
                  alt={"i.title"}
                  width={900}
                  height={900}
                  className="rounded-3xl object-cover object-center min-h-100 max-h-100 md:min-h-148 md:max-h-148"
                ></Image>
              </Slider>
            ))}
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  );
}

export default ThumbnailSlider;
