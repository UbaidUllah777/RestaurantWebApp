import React from 'react'




// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import { m } from "framer-motion"


// Components

import AvailableMeals from '../../Components/Meals/AvailableMeals'


// Data


// Animations
import { fadeIn, zoomIn } from "../../Functions/GlobalAnimations"

const RestaurantPage = (props) => {

  return (
    <div>


      {/* Parallax Scrolling Start */}
      <div id="parallax-section" className="full-screen md:flex md:items-center landscape:md:h-[600px] overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(./assets/img/menu/menuBanner.jpg)` }}></Parallax>
        <div className="absolute h-full w-full opacity-60 top-0 left-0 bg-primarycolorfake"></div>
        <Container className="relative h-full">
          <Row className="justify-center items-center h-full">
            <Col xl={8} md={10} lg={8} className="flex-col flex justify-center text-center h-[600px]">
              <div className="border-[#ca943d66] border-[8px] py-[7.5rem] px-[6.5rem] lg:p-[4.5rem] xs:p-8">
                <i className="line-icon-French-Fries text-[70px] inline-block leading-[80px] text-[#ca943d] mb-[3.5rem]"></i>
                <h1 className="text-[100px] leading-[95px] font-serif font-semibold text-white uppercase -tracking-[4px] mb-[3.5rem] mx-auto lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:-tracking-[1px]">Delicious<br></br>Cooking</h1>
                <span className="font-serif text-md uppercase tracking-[3px] text-white opacity-70 block">Experience the taste of Germany</span>
              </div>
            </Col>
          </Row>
         
        </Container>
      </div>
      {/* Parallax Scrolling End */}

     

      {/* Overlap Section Start */}
      <section className="bg-[#f8f4f0] pb-[130px] xl:pb-[90px] lg:pb-[75px] sm:py-[50px]">
        
        <Container>
          <m.div {...fadeIn} className="justify-center row pt-[6.5rem]">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]">Explore our</div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </div>
              <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">Full Menu</h2>
            </Col>
          </m.div>
          <m.div className="row xs:justify-center restaurant-tab-style-03" {...fadeIn}>
          <AvailableMeals />
          </m.div>
        </Container>
      </section>
      {/* Overlap Section End */}

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]">peoples choice</div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </div>
              <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">SPECIAL DISHES</h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center">
            <m.div {...{ ...fadeIn, transition: { delay: 0.2 } }} className="col text-center interactive-banners-style-11 md:mb-[50px] sm:mb-[30px]">
              <figure className="rounded-[6px] overflow-hidden relative">
                <img width={360} height={258} className="w-full" src="https://via.placeholder.com/720x515" alt="Dishes" />
                <figcaption>
                  <div className="opacity-70 top-0 left-0 absolute w-full h-full bg-darkgray"></div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Link aria-label="link" to="#" className="bg-[#ca943d] z-[1] p-6 text-xmd leading-[20px] rounded-full w-[110px] h-[110px] uppercase font-serif text-white flex flex-col justify-center">Only<span className="font-semibold text-darkgray -tracking-[.5px]">$30.00</span></Link>
                  </div>
                </figcaption>
              </figure>
              <div className="text-center mt-[40px] sm:mt-[20px]">
                <span className="text-darkgray font-medium font-serif block text-golden-hover uppercase">PERFECT KENTUCKY</span>
                <span className="text-spanishgray uppercase inline-block text-sm">TOMATOES <span className="text-xxs inline-block mx-[10px]">◍</span> PARMESAN <span className="text-xxs leading-none inline-block align-middle mx-[10px]">◍</span> Basil</span>
              </div>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.4 } }} className="col text-center interactive-banners-style-11 md:mb-[50px] sm:mb-[30px]">
              <figure className="rounded-[6px] overflow-hidden relative">
                <img width={360} height={258} className="w-full"src="https://via.placeholder.com/720x515" alt="Dishes" />
                <figcaption>
                  <div className="opacity-70 top-0 left-0 absolute w-full h-full bg-darkgray"></div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Link aria-label="link" to="#" className="bg-[#ca943d] z-[1] p-6 text-xmd leading-[20px] rounded-full w-[110px] h-[110px] uppercase font-serif text-white flex flex-col justify-center">Only<span className="font-semibold text-darkgray -tracking-[.5px]">$30.00</span></Link>
                  </div>
                </figcaption>
              </figure>
              <div className="text-center mt-[40px] sm:mt-[20px]">
                <span className="text-darkgray font-medium font-serif block text-golden-hover uppercase">HOT CHICKEN BREAST</span>
                <span className="text-spanishgray uppercase inline-block text-sm">CAPSICUM <span className="text-xxs inline-block mx-[10px]">◍</span> PANEER <span className="text-xxs leading-none inline-block align-middle mx-[10px]">◍</span> CHEESE</span>
              </div>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col text-center interactive-banners-style-11 md:mb-[50px] sm:mb-[30px]">
              <figure className="rounded-[6px] overflow-hidden relative">
                <img width={360} height={258} className="w-full" src="https://via.placeholder.com/720x515" alt="Dishes" />
                <figcaption>
                  <div className="opacity-70 top-0 left-0 absolute w-full h-full bg-darkgray"></div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Link aria-label="link" to="#" className="bg-[#ca943d] z-[1] p-6 text-xmd leading-[20px] rounded-full w-[110px] h-[110px] uppercase font-serif text-white flex flex-col justify-center">Only<span className="font-semibold text-darkgray -tracking-[.5px]">$30.00</span></Link>
                  </div>
                </figcaption>
              </figure>
              <div className="text-center mt-[40px] sm:mt-[20px]">
                <span className="text-darkgray font-medium font-serif block text-golden-hover uppercase">CHILLY CHEESE STEAK</span>
                <span className="text-spanishgray uppercase inline-block text-sm">MUSHROOM <span className="text-xxs inline-block mx-[10px]">◍</span> CUCUMBER <span className="text-xxs leading-none inline-block align-middle mx-[10px]">◍</span> Basil</span>
              </div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      

      {/* Section Start */}
      <section className="py-[50px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <m.div {...fadeIn} className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]"> restaurant favorite </div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </m.div>
              <m.h2 {...fadeIn} className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">CHEF'S SPECIAL</m.h2>
            </Col>
          </Row>
          <Row className="justify-center row-cols-1 row-cols-lg-3 row-cols-md-2">
            <Col className="col text-center md:mb-[30px]">
              <m.img width={309} height={303} {...{ ...zoomIn, transition: { ease: "easeInOut", duration: 0.8 } }} className="w-[auto] m-auto" src="https://via.placeholder.com/309x303" alt="" />
              <div className="py-[40px] relative text-start flex items-center justify-center w-auto xs:py-[15px]">
                <h3 className="heading-5 text-[#ca943d] self-center border-r border-mediumgray -tracking-[.5px] mr-[30px] pr-[25px] mb-0">01</h3>
                <div className="inline-block align-top">
                  <div className="text-xmd text-darkgray font-medium">Appeteaser blatter</div>
                  <span>Ipsum is simply dolor text</span>
                </div>
              </div>
            </Col>
            <Col className="text-center md:mb-[30px]">
              <m.img width={309} height={303} {...{ ...zoomIn, transition: { delay: 0.2, ease: "easeInOut", duration: 0.8 } }} className="w-[auto] m-auto" src="https://via.placeholder.com/309x303" alt="" />
              <div className="py-[40px] relative text-start flex items-center justify-center w-auto xs:py-[15px]">
                <h3 className="heading-5 text-[#ca943d] self-center border-r border-mediumgray -tracking-[.5px] mr-[30px] pr-[25px] mb-0">02</h3>
                <div className="inline-block align-top">
                  <div className="text-xmd text-darkgray font-medium">Grilled chicken tikka</div>
                  <span>Ipsum is simply dolor text</span>
                </div>
              </div>
            </Col>
            <Col className="text-center" >
              <m.img width={309} height={303} {...{ ...zoomIn, transition: { delay: 0.4, ease: "easeInOut", duration: 0.8 } }} className="w-[auto] m-auto" src="https://via.placeholder.com/309x303" alt="" />
              <div className="py-[40px] relative text-start flex items-center justify-center w-auto xs:py-[15px]">
                <h3 className="heading-5 text-[#ca943d] self-center border-r border-mediumgray -tracking-[.5px] mr-[30px] pr-[25px] mb-0">03</h3>
                <div className="inline-block align-top">
                  <div className="text-xmd text-darkgray font-medium">Noodles roulette</div>
                  <span>Ipsum is simply dolor text</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

    

      

     

     




    </div>
  )
}

export default RestaurantPage