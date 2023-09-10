import React from "react";
import Container from "./container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div>
      <Container>
        <div className="hidden md:grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                Разработка
                <br /> сайтов
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Заказать
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                Мобильные <br />
                приложения
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                Маркетинг <br />
                продвижение
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                SMM -
                <br /> продвижение
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                SEO -
                <br /> оптимизация
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto">
            <div style={{ borderBottomRightRadius: '5em 5em' }} className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="z-10 text-3xl leading-normal">
                Брендинг и <br />
                айдентика
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>

        <Carousel infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} className="md:hidden">
          <div className="lg:col-span-1 xl:col-auto mr-4">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                Разработка
                <br /> сайтов
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Заказать
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto mr-2 ml-2">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                Мобильные <br />
                приложения
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto mr-2 ml-2">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                Маркетинг <br />
                продвижение
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto mr-2 ml-2">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                SMM -
                <br /> продвижение
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto mr-2 ml-2">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                SEO -
                <br /> оптимизация
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-auto mr-2 ml-2">
            <div style={{ borderBottomRightRadius: '5em 5em', background: 'linear-gradient(145.77deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.76%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)' }} className="text-start w-full h-full bg-gray-100 px-10 rounded-1xl py-7 dark:bg-trueGray-800 border border-gray-500">
              <p className="text-3xl leading-normal">
                Брендинг и <br />
                айдентика
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  style={{
                    borderRadius: '80px', background: '#FFF', marginTop: '30px'
                  }}
                  target="_blank"
                  rel="noopener"
                  className="z-10 px-8 py-3 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonials;