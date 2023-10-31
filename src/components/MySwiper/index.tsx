'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MySwiper() {
  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 4
          },
          300: {
            slidesPerView: 1
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h-80 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/1.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Motobomba de alta pressão Schneider e Famac</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h-80 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/2.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Lona Plástica cortada - Preta 5mx4m / 20m² - Caixa com 15UN.</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h-80 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/3.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Lona Plástica dupla face - preta e branca 8x100 / 96 KG</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h-80 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/4.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Lona Plástica Preta 8x100 / 60 KG</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
