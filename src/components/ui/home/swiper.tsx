"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Button } from "../button";

export default function CustomSlider() {
  const fromTop = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  } as const;

  const fromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  } as const;
  const fromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.7 },
    },
  } as const;

  const fromBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
    },
  } as const;

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="shadow-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className="bg-gradient-to-r text-white h-auto md:h-157 relative overflow-hidden w-full">
              <Image
                src="/banner-images/banner1.png"
                alt="Banner image 1"
                fill
                className="object-cover z-0"
                priority
              />
              <motion.div
                className="z-10 absolute lg:top-50 lg:left-190 text-5xl font-extrabold font-dynaPuff"
                variants={fromTop}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <p className="text-primary">Supplement for healthy life</p>
              </motion.div>
              <motion.div
                className="z-10 absolute lg:top-70 lg:left-190 text-2xl  font-dynaPuff"
                variants={fromRight}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <p className="text-muted-text">
                  Even with a good diet, modern food processing and soil
                  depletion can sometimes leave us lacking essential nutrients
                </p>
              </motion.div>
              <motion.div
                className="z-10 absolute lg:top-90 lg:left-190 text-2xl  font-dynaPuff"
                variants={fromBottom}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <Button className="shadow-xl">Shop now</Button>
              </motion.div>
              <motion.div
                className="z-10 absolute top-30 left-100"
                variants={fromLeft}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                  <p className="text-lg font-semibold">$100</p>
                </div>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="bg-gradient-to-r text-white h-auto md:h-157 relative overflow-hidden w-full">
              <Image
                src="/banner-images/banner3.jpg"
                alt="Banner image 1"
                fill
                className="object-cover z-0"
                priority
              />
              <motion.div
                className="z-10 absolute lg:top-30 lg:left-40 text-5xl font-extrabold font-dynaPuff"
                variants={fromTop}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <p className="">Fills Nutritional Gaps</p>
              </motion.div>
              <motion.div
                className="z-10 absolute lg:top-55 lg:left-30 text-2xl  font-dynaPuff"
                variants={fromRight}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <p className="text-orange-300 text-center">
                  Supplements target specific needs like building muscle,{" "}
                  <br></br>
                  strengthening bones, improving skin health,<br></br> or
                  boosting brain function.
                </p>
              </motion.div>
              <motion.div
                className="z-10 absolute lg:top-90 lg:left-90 text-2xl  font-dynaPuff "
                variants={fromBottom}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <Button className="shadow-xl p-5 bg-blue-400">Shop now</Button>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
