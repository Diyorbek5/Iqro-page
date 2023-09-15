import React from "react";
import Container from "./container";
import Img from "next/image";
import done from '../public/img/done.png';

const Testimonials = () => {
    return (
        <Container className="grid place-items-center">
            <div className="w-5/6 grid content-center gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Автоматизация <br />
                            бизнес-процессов
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Привлечение <br />
                            новых клиентов
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Увеличение <br />
                            прибыли
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Ускорение <br />
                            принятия решений
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Рост <br />
                            эффективности
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 xl:col-auto">
                    <div style={{ borderRadius: '2em'}} className="bg-gray-800 flex flex-col justify-between w-full h-full px-12 rounded-1xl py-12 border border-gray-500">
                        <Img style={{position:'relative', top:'-50px',left:'-50px'}} className="z-10 w-51 h-51" alt="done image" src={done}/>
                        <p style={{marginTop:'-50px'}} className="z-10 text-xl leading-normal text-white px-2">
                            Повышение <br />
                            лояльности
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Testimonials;