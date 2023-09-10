import Image from "next/image";
import { Link } from "react-scroll";
import Container from "./container";
import image from "../public/img/image.png";

const Hero = () => {
  return (
    <div>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="z-10 text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Разработка сайтов
              и мобильных приложений
            </h1>
            <p className="z-10 py-5 text-xl leading-normal lg:text-xl xl:text-2xl">
              Помогаем бизнесу увеличить прибыль
              с помощью digital-инструментов
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} 
                style={{
                  borderRadius: '80px', background: '#FFF', cursor: 'pointer', zIndex: '22'
                }}
                href="#contact"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-black bg-indigo-600 rounded-md">
                Обсудить проект
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={image}
              width="616"
              height="617"
              className="object-cover z-22"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Frames */}
        <div style={{
          width: '708.783px', height: '707.901px', transform: 'rotate(44.312deg)', flexShrink: '0', borderRadius: '708.783px', background: 'rgba(0, 159, 143, 0.80)', filter: 'blur(201.75px)',
          position: 'fixed', top: '-566px', left: '1395px'
        }}></div>
        <div style={{
          width: '482px', height: '482px', transform: 'rotate(44.312deg)', flexShrink: '0', borderRadius: '482px', background: 'rgba(0, 159, 143, 0.80)', filter: 'blur(201.75px)',
          position: 'fixed', top: '355px', left: '-30px'
        }}></div>
      </Container>
    </div>
  );
}

export default Hero;