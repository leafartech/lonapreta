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
          <div className="mb-12 border border-zinc-300 rounded-md h- px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-4">
              <Image
                src="/images/outras/acude.png"
                alt=""
                width={360}
                height={360}
                className="rounded"
              />
            </div>
            <div className="pt-4 pb-8">
              <h4 className="text-xl font-medium text-my2">Açude para peixes</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h- px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-4">
              <Image
                src="/images/outras/aviario.png"
                alt=""
                width={360}
                height={360}
                className="rounded"
              />
            </div>
            <div className="pt-4 pb-8">
              <h4 className="text-xl font-medium text-my2">Forração de aviário</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h- px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-4">
              <Image
                src="/images/outras/forracao.png"
                alt=""
                width={360}
                height={360}
                className="rounded"
              />
            </div>
            <div className="pt-4 pb-8">
              <h4 className="text-xl font-medium text-my2">Forração de caminhão</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h- px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-4">
              <Image
                src="/images/outras/silagem.png"
                alt=""
                width={360}
                height={360}
                className="rounded"
              />
            </div>
            <div className="pt-4 pb-8">
              <h4 className="text-xl font-medium text-my2">Processo de Silagem</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
