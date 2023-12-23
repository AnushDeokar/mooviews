'use client';
import { motion, AnimatePresence, Variant, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Page } from 'framer';
import { transform } from 'framer-motion';

const images = [
  "url('image2.jpg')",
  "url('image3.jpg')",
  "url('image4.jpg')",
  "url('image5.jpg')",
  "url('image6.jpg')",
];

const pages = [1, 2, 3, 4, 5];

const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = images.length * indicatorSize;
const indicatorPaddingTotal = (images.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

export function ImageSlider({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    let interval: any;
    let direction = 1; // 1 for increasing, -1 for decreasing

    if (autoplay) {
      // Set interval to increase and decrease currentIndex every 2 seconds
      interval = setInterval(() => {
        setCurrent((prev) => {
          let nextIndex = prev + direction;

          if (nextIndex < 0) {
            // If going below 0, change direction to increasing
            nextIndex = 1;
            direction = 1;
          } else if (nextIndex >= images.length) {
            // If reaching or exceeding the length, change direction to decreasing
            nextIndex = images.length - 2;
            direction = -1;
          }

          return nextIndex;
        });
      }, 2000);
    }

    // Cleanup interval on component unmount or when autoplay is turned off
    return () => clearInterval(interval);
  }, [autoplay, images.length]);
  return (
    <>
      <Page
        width={width}
        height={height}
        radius={10}
        currentPage={current}
        onChangePage={(current, _) => setCurrent(current)}
        className='absolute'
      >
        {images.map((image, index) => {
          return (
            <div
              // className='mt-20'
              style={{
                width: width,
                height: height,
                borderRadius: 10,
                backgroundColor: 'red',
                backgroundImage: image, // Use image directly as the URL
                backgroundSize: 'cover', // Optional: Adjust to fit the container
                backgroundPosition: 'center', // Optional: Center the image
              }}
              key={index}
            />
          );
        })}
      </Page>

      {images.map((_, index) => {
        return (
          <motion.div
            className='mt-10 md:mt-0'
            style={{
              width: indicatorSize,
              height: indicatorSize,
              borderRadius: 30,
              backgroundColor: '#fff',
              position: 'absolute',
              top: 'calc(50% + 100px)',
              left: `calc(50% + ${index} * ${
                indicatorSize + indicatorPadding
              }px)`,
              x: -indicatorWidthTotal / 2,
              opacity: indicatorAlpha,
              cursor: 'pointer',
            }}
            animate={{
              opacity: current === index - 1 ? 1 : indicatorAlpha,
            }}
            onTap={() => setCurrent(index - 1)}
            key={index}
          />
        );
      })}
    </>
  );
}
