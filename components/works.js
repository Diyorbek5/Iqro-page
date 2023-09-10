import React from "react";
import Container from "./container";
import Img from "next/image";
import img1 from '../public/img/Group1.png'
import img2 from '../public/img/Group2.png'
import img3 from '../public/img/Group3.png'
import img4 from '../public/img/Group4.png'
import img5 from '../public/img/Group5.png'
import img6 from '../public/img/Group6.png'

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 dark:bg-trueGray-800 rounded-3xl border border-gray-500">
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img1} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Исследование ниши <br />
              и стратегия развития
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img2} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Прототипирование UI | UX <br />
              дизайна для продукта
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img3} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Анализ конкурентов <br />
              и юзабилити тесты
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img4} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Разработка <br />
              и верстка
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img5} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Семантическая структура <br />
              и оптимизация
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 px-10 py-7 dark:bg-trueGray-800">
            <Img className="z-10 object-cover w-20 h-20" src={img6} alt="image" />
            <p className="z-10 text-2xl leading-normal pl-8">
              Финальное тестирование <br />
              и запуск продукта
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Testimonials;