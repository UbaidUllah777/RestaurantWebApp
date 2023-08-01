import React from 'react'

// Components
import { fadeIn } from '../../Functions/GlobalAnimations'
import Buttons from '../../Components/Button/Buttons'
import Clients from '../../Components/Clients/Clients'
import FancyTextBox from '../../Components/FancyTextBox/FancyTextBox'
import Team from '../../Components/Team/Team'

import IconWithText from '../../Components/IconWithText/IconWithText'
import Lists from '../../Components/Lists/Lists'
import Counter from '../../Components/Counters/Counter'
import Overlap from '../../Components/Overlap/Overlap'
import CustomModal from '../../Components/CustomModal'

// Libraries
import { Navigation } from "swiper";
import { Col, Container, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from 'framer-motion'
import { Link as ScrollTo } from "react-scroll"

// Data

import { fancyTextBox04 } from '../../Components/FancyTextBox/FancyTextBoxData';
import { TeamData04 } from '../../Components/Team/TeamData';

const TestimonialsCarouselData = [
  {
    img: "https://via.placeholder.com/800x622",
    title: "Unlimited power customization",
    number: "01",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Powerful creatives designer",
    number: "02",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Advanced customization options",
    number: "03",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
]

const ListData = [
  {
  //  icon: "feather-arrow-right-circle",
    content: "Beautiful and easy to understand animations"
  },
  {
  //  icon: "feather-arrow-right-circle",
    content: "Theme advantages are pixel perfect design",
  },
  {
  //  icon: "feather-arrow-right-circle",
    content: "Find more creative ideas for your projects",
  },
]

const CounterData05 = [
  {
    number: {
      text: "1227",
      class: "text-fastblue"
    },
    title: "Winning awards",
    content: "For creative design",
  },
  {
    number: {
      text: "1947",
      class: "text-fastblue"
    },
    title: "Working hours",
    content: "Desperate for work",
  },
  {
    number: {
      text: "1587",
      class: "text-fastblue"
    },
    title: "Happy clients",
    content: "We love clients",
  },
]
const IconWithTextData = [
  {
  //  icon: "line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Global Fusion Delights",
    content: "Suraj Bawa stands out with its diverse menu, combining the best of both worlds. Indulge in a tantalizing array of fast-food favorites like pizza while also savoring authentic Indian and German delicacies.",
  },
  {
  //  icon: "line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Cultural Ambiance",
    content: " Immerse yourself in a unique dining experience that transcends borders. Our restaurant in Duisburg, Germany, sets the stage for a delightful blend of cultural ambiance, creating an inviting space for all.",
  },
  {
  //  icon: "line-icon-Archery-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Culinary Expertise",
    content: "At Suraj Bawa, our passion for exceptional flavors drives us to master both traditional Indian and German cuisines, ensuring each dish is a true representation of culinary excellence.",
  },
  {
  //  icon: "line-icon-Female text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Customer-Centric Approach",
    content: "We prioritize your dining pleasure, offering attentive service, personalized recommendations, and a warm atmosphere, making each visit to Suraj Bawa a memorable and cherished one.",
  },
]
const AboutUsPage = (props) => {

  return (
    <div style={props.style}>

    
      {/* Parallax Scrolling Start */}
      <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] flex items-center overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(./assets/img/aboutus/aboutusbanner.jpg)` }}></Parallax>
        <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-primarycolorfake"></div>
        <Container>
          <Row className="items-center justify-center">
            <Col md={8} xl={6} lg={7} sm={9} className="relative text-center">
              <h1 className="inline-block text-white opacity-80 mb-[20px] text-xmd leading-[20px] -tracking-[.5px] font-serif">Suraj Bawa Pizza Restaurent</h1>
              <h2 className="font-serif text-white -tracking-[1px] text-[3.5rem] font-medium mb-0 sm:-tracking-[1px]"> Where Good Times and Great Pizzas Collide </h2>
            </Col>
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <section id="about" className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="font-serif">
            <Col lg={4} className="pe-lg-0 flex md:mb-[30px]">
              <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: "url(./assets/img/aboutus/surajbawa.jpeg) " }}></div>
            </Col>
            <Col lg={4} md={6} className="ps-lg-0 flex items-center sm:mb-[30px]">
              <div className="justify-center h-full w-full flex flex-col items-start bg-fastblue px-[5.5rem] lg:px-[3rem] md:p-16">
                <span className="text-xlg lg:text-lg lg:leading-[26px] font-medium text-white mb-[20px] block">Discover Suraj Bawa, a culinary haven in Duisburg, Germany! </span>
                <p className="text-white font-sans opacity-70 mb-[20px] xs:mb-[15px]">Explore a world of flavors with our enticing selection of cuisines. From freshly baked pizzas to rich Indian spices and savory German specialties, our diverse menu satisfies every craving.</p>
                <Buttons href="/imprint" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#fff] hover:text-[#fff]" color="#fff" title="Restaurant overview" />
              </div>
            </Col>
            <Col lg={4} md={6} className="flex flex-col pr-0">
              <img src="./assets/img/aboutus/surajbawaaboutusimage2.png" alt="about us" className="sm:w-full" />
              <div className="bg-white px-[3.5rem] py-[3rem] h-full lg:p-8 sm:p-16">
                <span className="text-darkgray font-medium mb-[10px] block">What make Suraj Bawa Special</span>
                <p className="font-sans">At Suraj Bawa, we believe in creating cherished memories with great food, warm ambiance, and attentive service. Join us for a unique culinary journey where fusion of tastes and traditions come alive, savoring the essence of our passion!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

     

      {/* Section Start */}
      <section className="bg-lightgray py-[50px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="justify-center flex">
            <m.div className="text-center mb-20 md:mb-12 col-lg-6 col-sm-8" {...fadeIn}>
              <span className="text-xmd mb-[15px] font-serif block w-full">Embrace the Fusion: Where Food Becomes an Unforgettable Journey!</span>
              <h5 className="font-serif text-darkgray font-medium mb-8 sm:w-full">We offer a full range of both Indain and German  cousens </h5>
            </m.div>
            <Col xs={12} md={9} lg={12}>
              <IconWithText
                grid="row-cols-1 row-cols-md-1 row-cols-lg-2 gap-y-[15px]"
                theme="icon-with-text-02 about-us-icon-with-text"
                data={IconWithTextData}
                animation={fadeIn}
                animationDelay={0.1}
              />
            </Col>
          </Row>
        </Container>
      </section >
      {/* Section End */}

      {/* Section Start */}
      <m.section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]" {...fadeIn}>
        <Container>
          <Row className="items-center">
            <Col lg={6} className="p-0 md:mb-[50px] border-white border-[12px] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <div className="relative">
                <Swiper
                  className="white-move swiper-pagination-medium h-full swiper-navigation-01 swiper-navigation-light"
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}>
                  {
                    TestimonialsCarouselData.map((item, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className="h-full shadow-lg bg-[#fff]">
                            <img src={item.img} alt="business" className="w-full" width="531" height="413" />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} >
              <h5 className="font-serif text-darkgray font-medium">Flavors Without Borders: Suraj Bawa's Gallery of Cross-Continental Cuisine </h5>
              <p>Welcome to the Suraj Bawa gallery, where we proudly showcase our culinary masterpieces that celebrate the fusion of global flavors. Immerse yourself in a visual feast of our delectable fast food creations like pizzas and more, along with the rich traditions of Indian and German cuisines. Get a glimpse of the delightful experiences that await you at our restaurant in Duisburg, Germany.</p>
              
              <Buttons href="/menu" className="btn-fill font-medium font-serif rounded-[4px] uppercase mt-[30px] md:mb-[15px]" themeColor="#0038e3" color="#fff" size="md" title="Check Our Menu" />
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      

      {/* Section Start */}
      <section className="bg-lightgray pt-[130px] pb-[140px] lg:pt-[90px]  lg:pb-[195px] md:pt-[75px] sm:py-[50px] xs:py-0">
        <Container className="xs:px-0">
          <Row className="gx-0">
            <m.div
              className="col-12 col-lg-6 bg-cover bg-center md:h-[400px]"
              style={{ backgroundImage: `url("https://via.placeholder.com/900x900")` }}
              {...{ ...fadeIn, transition: { delay: 0.2 } }}
            ></m.div>
            <m.div
              className="col-12 p-0 col-lg-6"
              {...{ ...fadeIn, transition: { delay: 0.36 } }}
            >
              <m.div className="bg-gradient-to-tr from-[#556fff] via-[#ff77dd] to-[#ff798e] px-24 py-28 lg:py-20 lg:px-16 md:p-20 text-white text-center">
                {/* Modal Component Start */}
                <CustomModal.Wrapper
                  modalBtn={<Buttons type="submit" className="btn-sonar border-0 mx-auto mb-14 xs:mb-[50px]" themeColor="#fff" size="lg" title={<i className="icon-control-play text-gradient bg-gradient-to-tr from-[#b783ff] to-[#ff9393]" />} />}
                >
                  <div className="w-[1020px] max-w-full relative rounded mx-auto">
                    <div className="fit-video">
                      <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                  </div>
                </CustomModal.Wrapper>
                {/* Modal Component End */}
                <span className="text-xmd font-serif mb-[20px] block text-white opacity-70">
                  Check our Video
                </span>
                <h5 className="font-serif text-white font-medium mb-[40px] xs:mb-[20px]">
                  View our vlog and explore out beautiful restaurant and delicous meals
                </h5>
     
              </m.div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

     
    </div>
  )
}

export default AboutUsPage