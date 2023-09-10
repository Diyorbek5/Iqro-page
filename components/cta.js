import React, { useState } from "react";
import Container from "./container";
import Img from "next/image";
import success from '../public/img/Success.png';

const Testimonials = () => {
  const [show, setShow] = useState(true);
  const [send, setSend] = useState(false);
  const [back, setBack] = useState(false);

  return (
    <div id="contact">
      <Container className="m-20">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 dark:bg-trueGray-800 rounded-3xl border border-gray-500">
          <div className="sm:col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4">
            <div className="rounded-3xl flex flex-col justify-start w-full h-full bg-gray-100 px-16 py-12 dark:bg-trueGray-800">
              <h2 className="z-10 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl dark:text-white">
                Сколько стоят услуги
              </h2>
              <p className="z-10 py-5 text-xl leading-normal lg:text-xl xl:text-xl">
                Цена рассчитывается индивидуально
                в зависимости отсложности, объема
                и сроков работы.
                <br /><br />
                Разработчик оценивает временные затраты
                по проекту, а аналитики устанавливают
                стоимость продукта.
              </p>
            </div>
          </div>
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <div className="rounded-3xl flex flex-col-2 justify-start items-center w-full h-full bg-gray-100 dark:bg-trueGray-800">
              <div className="leading-normal w-full h-full p-8 rounded-3xl bg-black">

                {/* Showing Consulting */}
                {show &&
                  <div className="z-10">
                    <div className="flex flex-col justify-between items-center flex-wrap mb-12 z-10">
                      <h2 className="z-10 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-3xl dark:text-white">
                        Получить
                        бесплатную
                        консультацию
                      </h2>
                      <p className="z-10 py-5 text-xl leading-normal lg:text-xl xl:text-xl">
                        В рамках консультации уточним необходимую информацию
                        для анализа вашего проекта
                      </p>
                    </div>
                    <div className="z-10 order-last flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                      <a
                        style={{
                          borderRadius: '80px', background: '#FFF', zIndex: '22', cursor: 'pointer'
                        }}
                        onClick={() => { setShow(!show); setSend(!send) }}
                        rel="noopener"
                        className="px-8 py-4 text-lg w-full font-medium text-center text-black bg-indigo-600">
                        Обсудить проект
                      </a>
                    </div>
                  </div>
                }

                {/* Showing Send Form */}
                {send &&
                  <div className="z-10">
                    <div class="flex flex-col justify-between items-center flex-wrap mb-12 z-10">
                      <input style={{ borderRadius: '80px' }} class="z-10 w-full bg-white text-lg text-black py-4 px-8 mb-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Ваше имя" />
                      <input style={{ borderRadius: '80px' }} class="z-10 w-full bg-white text-lg text-black py-4 px-8 mb-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="номер телефона" />
                    </div>
                    <div className="z-10 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                      <a
                        style={{
                          borderRadius: '80px', background: '#FFF', zIndex: '22', cursor: 'pointer'
                        }}
                        onClick={() => { setSend(!send); setBack(!back) }}
                        rel="noopener"
                        className="px-8 py-4 text-lg w-full font-medium text-center text-black bg-indigo-600">
                        Отправить
                      </a>
                    </div>
                  </div>}

                {/* Showing Sended Form */}
                {back &&
                  <div className="z-10">
                    <div class="flex flex-col justify-between items-center flex-wrap mb-12 z-10">
                      <Img className="text-center z-10 object-cover w-16 h-16" src={success} alt="success image" />
                      <h2 className="z-10 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-3xl dark:text-white">
                        Cпасибо
                        за вашу заявку!
                      </h2>
                      <p className="z-10 py-5 text-xl leading-normal lg:text-xl xl:text-xl">
                        Наш менеджер cкоро
                        свяжется с вами
                      </p>
                    </div>
                    <div className="z-10 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                      <a
                        style={{
                          borderRadius: '80px', background: '#FFF', zIndex: '22', cursor: 'pointer'
                        }}
                        onClick={() => { setBack(!back); setShow(!show) }}
                        rel="noopener"
                        className=" color-green px-8 py-4 text-lg w-full font-medium text-center text-black bg-indigo-600">
                        Отправить
                      </a>
                    </div>
                  </div>}

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;