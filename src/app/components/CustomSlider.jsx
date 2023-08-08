"use client"

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slideChangeHandler = () => {
  console.log('slide changed')
}

const progressHandler = (s,progress) => {
  console.log(`progress is ${progress}`)
}

export function Swiper(props) {

  const swiperRef = useRef(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
      on:{
        slideChange: slideChangeHandler,
        progress: progressHandler,
    },
    // autoplay:{
    //   delay: 2500,
    //   disableOnInteraction: false,
    //   },
      modules:[Autoplay, Pagination, Navigation]
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}