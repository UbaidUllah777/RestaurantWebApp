import React from 'react'

import VegImage from '../../Assets/img/webp/home-restaurant-img-01.webp'
import bannerImage from '../../Assets/img/webp/home-restaurant-banner-01.webp'
import bannerBottomImage1 from '../../Assets/img/webp/home-restaurant-bg-01.webp'
import bannerBottomImage2 from '../../Assets/img/webp/home-restaurant-bg-03.webp'
import homeAboutBottomImage from '../../Assets/img/webp/homeAboutBottomImage.webp'
import MasterCheffMessageImage from "../../Assets/img/home/home-restaurant-img-13.webp"
import MasterCheffMessageImage2 from "../../Assets/img/home/home-restaurant-img-14.webp"
import MasterCheffMessageImage3 from "../../Assets/img/home/home-restaurant-img-15.webp"

// Libraries
import { Col, Container,  Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import { m } from "framer-motion"
import { Link as ScrollTo } from "react-scroll"

// Components

// import AvailableMeals from '../../Components/Meals/AvailableMeals'

import { PopularMeals } from '../../Components/Meals/AvailableMeals'
import Buttons from '../../Components/Button/Buttons'
import Overlap from '../../Components/Overlap/Overlap'
// import Tab03 from '../../Components/Tab/Tab03'
import Testimonials from '../../Components/Testimonials/Testimonials'
import TextSlider03 from '../../Components/TextSlider/TextSlider03'

// Data
import { TestimonialsData04 } from '../../Components/Testimonials/TestimonialsData'
import { TextSliderData03 } from '../../Components/TextSlider/TextSliderData'
// import { TabData03 } from '../../Components/Tab/TabData'

// Animations
import { fadeIn, fadeInUp, zoomIn } from "../../Functions/GlobalAnimations"

const RestaurantPage = (props) => {

  return (
    <div>


      {/* Parallax Scrolling Start */}
      <div id="parallax-section" className="full-screen md:flex md:items-center landscape:md:h-[600px] overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(${bannerImage})` }}></Parallax>
        <div className="absolute h-full w-full opacity-60 top-0 left-0 bg-primarycolorfake"></div>
        <Container className="relative h-full">
          <Row className="justify-center items-center h-full">
            <Col xl={8} md={10} lg={8} className="flex-col flex justify-center text-center h-[600px]">
              <div className="border-[#ca943d66] border-[8px] py-[7.5rem] px-[6.5rem] lg:p-[4.5rem] xs:p-8">
                <i className="line-icon-French-Fries text-[70px] inline-block leading-[80px] text-[#ca943d] mb-[3.5rem]"></i>
                <h1 className="text-[70px] leading-[65px] font-serif font-semibold text-white uppercase -tracking-[4px] mb-[3.5rem] mx-auto lg:text-[60px] lg:leading-[60px] md:text-[40px] md:leading-[35px] sm:text-[25px] sm:leading-[23px] sm:-tracking-[1px]">Suraj Bawa</h1>
                <span className="font-serif text-md uppercase tracking-[3px] text-white opacity-70 block">Experience the taste of Germany</span>
              </div>
            </Col>
          </Row>
          <ScrollTo aria-label="Scrolling Link" href="#" to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 -translate-x-1/2 cursor-pointer">
            <span className="hidden">Link for Scrolling</span>
            <i className="ti-mouse icon-small text-white up-down-ani text-[28px] inline-block"></i>
          </ScrollTo>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <m.section {...fadeIn} id="about" className="pt-[9%] pb-[384px] md:pb-[200px] sm:pb-[7%] xs:pt-32 xs:pb-35 restaurant-experience" style={{ background: `url(${bannerBottomImage1}) center top no-repeat, url(${bannerBottomImage2}) right top 140px no-repeat` }}>
        <Container>
          <Row className="items-center xs:text-center">
            <Col lg={2} className="md:mb-[25px]">
              <m.img width={150} height={149} className="w-[auto] xs:mx-auto" {...{ ...zoomIn, transition: { duration: 0.8 } }} src={VegImage} alt="vegetables" />
            </Col>
            <Col xl={4} lg={5} sm={7} className="md:mb-[20px]">
              <m.h2 {...{ ...fadeIn, transition: { delay: 0.4 } }} className="heading-5 font-serif font-medium text-darkgray mb-0 -tracking-[1px]">Now enjoy a wonderful cafe <span className="font-bold">dining experience</span> and healthy food</m.h2>
            </Col>
            <Col lg={5} md={7} sm={8} className="pl-24 lg:pl-[15px]">
              <m.div {...{ ...fadeIn, transition: { delay: 0.8 } }}>
                <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation.</p>
                <Buttons to="/page/about-us" className="font-medium font-serif uppercase btn-link after:h-[2px] hover:text-black md:text-md md:mb-[15px] after:bg-darkgray" size="xl" color="#232323" title="About experience" />
              </m.div>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      {/* POPULAR MENU Section Start */}
      <section className="bg-[#f8f4f0] pb-[130px] xl:pb-[90px] lg:pb-[75px] sm:py-[50px]">
        <Container fluid className="mb-20">
          <Row className="justify-center">
            <Overlap>
              <Col xs={12} className="text-center relative">
                <m.img width={1459} height={500} {...{ ...zoomIn, transition: { duration: 0.8 } }} className="w-full m-auto" src={homeAboutBottomImage} alt="" />
              </Col>
            </Overlap>
          </Row>
        </Container>
        <Container>
          <m.div {...fadeIn} className="justify-center row">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]">special recipes</div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </div>
              <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">Popular menu</h2>
            </Col>
          </m.div>
          <m.div className="row xs:justify-center restaurant-tab-style-03" {...fadeIn}>
            <PopularMeals />
          </m.div>
        </Container>
      </section>
      {/* POPULAR MENU Section End */}

      

      {/* SPECIAL DISHES Section Start */}
      <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
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
      {/*  SPECIAL DISHES Section End */}



      {/*  Masterchef message Section Start */}
      <section className="p-0 overflow-hidden">
        <Container fluid className="px-0">
          <Row className="gx-0">
            <Col xl={6} className="p-0">
              <m.div {...fadeIn} className="block flex flex-column flex-md-row h-full">
                <Col md={6} className="cover-background sm:h-[700px]" style={{ backgroundImage: `url(${MasterCheffMessageImage})` }}></Col>
                <Col md={6} className="bg-[#f8f4f0] flex flex-col justify-center text-start px-12 xl:px-[15px] lg:p-20 md:px-[2.5rem]">
                  <img width={57} height={40} src="/assets/img/webp/home-restaurant-img-transparent-05.webp" className="self-start mb-[20px]" alt="" />
                  <h2 className="heading-4 font-serif font-light text-darkgray -tracking-[1px] w-[85%] mb-12 xs:w-full xs:mb-[15px]">Masterchef <span className="font-semibold">message</span></h2>
                  <span className="text-[18px] text-darkgray leading-[30px] block w-[75%] mb-[20px] xs:mb-[30px] xl:w-[80%] xs:w-full">Unique and delicious dishes from the worlds best masterchefs.</span>
                  <p className="w-[75%] xs:w-full">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt labore et dolore magna minim veniam nostrud exercitation ullamco.</p>
                  <img width={146} height={44} src="/assets/img/webp/home-restaurant-img-transparent-06.webp" className="w-[auto] self-start mt-[25px] pt-[25px] xs:mt-[10px]" alt="" />
                </Col>
              </m.div>
            </Col>
            <Col xl={6} className="p-0">
              <Row className="g-0">
                <Col xs={{ order: 1 }} sm={{ span: 6, order: 1 }} className="p-0">
                  <m.div {...fadeIn} className="text-center px-24 py-32 xl:py-24 xl:px-16 lg:px-28 sm:px-24 bg-darkgray">
                    <span className="font-serif font-medium text-[#ca943d] tracking-[1px] text-md block uppercase mb-[20px]">Best of recipes</span>
                    <h3 className="heading-4 font-serif text-white mb-0"><span className="font-semibold md:block">Delicious</span> breakfast recipes</h3>
                  </m.div>
                </Col>
                <m.div {...{ ...fadeIn, transition: { delay: 0.2 } }} className="col-12 col-sm-6 order-2 cover-background xs:h-[300px]" style={{ backgroundImage: `url(${MasterCheffMessageImage2})` }}></m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.4 } }} className="col-12 col-sm-6 order-4 order-sm-3 px-0 cover-background xs:h-[300px]" style={{ backgroundImage: `url(${MasterCheffMessageImage3})` }}></m.div>
                <Col xs={{ order: 2 }} sm={{ span: 6, order: 4 }}>
                  <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="text-center px-24 py-32 xl:py-24 xl:px-16 lg:px-28 sm:px-24">
                    <span className="font-serif font-medium text-[#ca943d] tracking-[1px] text-md block uppercase mb-[20px]">Best of foods</span>
                    <h3 className="heading-4 font-serif text-darkgray mb-0"><span className="font-semibold md:block">Healthy</span> energetic burger</h3>
                  </m.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/*Masterchef message  Section End */}

      {/* Section Start */}
      <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
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

      {/* Section Start */}
      <m.section id="experience" {...{ ...fadeIn, transition: { duration: 1 } }} className="bg-[#f8f4f0] py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]"> cafe experience </div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </div>
              <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">EXQUISITE SERVICES</h2>
            </Col>
          </Row>
        </Container>
        <TextSlider03
          data={TextSliderData03}
          className="sm:px-[15px] black-move"
          carousalOption={{
            spaceBetween: 30,
            slidesPerView: 1,
            autoplay: { delay: 4500, disableOnInteraction: false },
            breakpoints: { 1199: { slidesPerView: 2 } }
          }} />
      </m.section>
      {/* Section End */}

   

      {/* Section Start */}
      <section className="p-0 my-[5.5rem]">
        <Container fluid>
          <Row xl={4} sm={2} xs={1}>
            <m.div {...fadeInUp} className="col mt-[3.5rem] cover-background h-[650px] px-0 lg:m-0 md:h-[500px] xs:h-[450px]" style={{ backgroundImage: `url(./assets/img/home/burger.webp)` }}>
              <div className="absolute top-0 left-0 w-full h-full opacity-70 bg-primarycolorfake"></div>
              <div className="flex flex-col h-full p-20 text-center relative z-[1] xl:px-12 lg:px-16">
                <span className="font-serif font-medium uppercase text-[#ca943d]">Loaded cheese</span>
                <h2 className="heading-4 font-serif font-semibold text-white uppercase mb-0 mt-auto -tracking-[.5px]">Delicious burger</h2>
                <div className="mt-auto">
                  </div>
              </div>
            </m.div>
            <m.div {...fadeInUp} className="cover-background h-[650px] px-0 md:h-[500px] xs:h-[450px]" style={{ backgroundImage: `url(./assets/img/home/bestPizza.jpg)` }}>
              <div className="flex flex-col h-full justify-start p-24 text-center relative z-index-1 xl:px-10 lg:px-32 md:px-20 opacity-70 bg-primarycolorfake">
              <span className="font-serif font-medium uppercase text-[#ca943d] block mb-[15px]">Suraj Pizza</span>
                <h2 className="heading-4 font-serif font-semibold text-white uppercase mb-[15px] -tracking-[.5px]">Best Pizza in Town</h2>

              </div>
            </m.div>
            <m.div {...fadeInUp} className="mt-14 cover-background h-[650px] px-0 lg:m-0 md:h-[500px] xs:h-[450px]" style={{ backgroundImage: `url(./assets/img/home/donerKabab.jpg)` }}>
              <div className="absolute top-0 left-0 w-full h-full opacity-70 bg-primarycolorfake"></div>
              <div className="flex flex-col h-full p-20 text-center relative z-[1] xl:px-12 lg:px-32">
                <span className="font-serif font-medium uppercase text-[#ca943d]">Kabab lover</span>
                <h2 className="heading-4 font-serif font-semibold text-white uppercase mb-0 mt-auto -tracking-[.5px]">Doner Kabab</h2>
                <Link aria-label="link Barbecue festival" to="#" className="w-[40px] h-[40px] leading-[40px] mt-auto">
               
                </Link>
              </div>
            </m.div>
            <m.div {...fadeInUp} className="cover-background h-[650px] px-0 md:h-[500px] xs:h-[450px] " style={{ backgroundImage: `url(./assets/img/home/Tortellini.jpg)` }}>
              <div className="flex flex-col h-full justify-start py-20 px-24 text-center relative z-[1] xl:px-12 lg:px-32 opacity-70 bg-primarycolorfake">
                <span className="font-serif font-medium uppercase text-[#ca943d] block mb-[15px]">Every saturday</span>
                <h2 className="heading-4 font-serif font-semibold text-white uppercase -tracking-[.5px]">Tortellini</h2>
               
              </div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

   

        {/* Section Start */}
        <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={4} md={6} className="text-center mb-[4.5rem] md:mb-16 sm:mb-12">
              <div className="flex flex-row items-center justify-center text-center mb-[5px]">
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
                <div className="font-serif text-xmd text-[#ca943d] px-[10px]">happy customers </div>
                <span className="w-[25px] h-[1px] bg-[#ca943d] opacity-40"></span>
              </div>
              <h2 className="heading-5 font-serif font-semibold text-darkgray uppercase -tracking-[1px] sm:mb-[15px]">OUR GUESTBOOK</h2>
            </Col>
          </Row>
          <Row className='justify-center'>
            <Col md={12} sm={8}>
              <Testimonials
                grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-[30px] justify-center"
                theme='testimonials-style-04'
                className=""
                data={TestimonialsData04}
                animation={fadeIn}
                animationDelay={0.2}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

     

    </div>
  )
}

export default RestaurantPage