import React, { useRef } from 'react'

// Libraries
import { Col, Container,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { AnimatePresence, m } from 'framer-motion'
import { Form, Formik } from 'formik';

// Components
import SocialIcons from '../../Components/SocialIcon/SocialIcons';
import { ContactFormStyle03Schema } from '../../Components/Form/FormSchema';
import { Checkbox, Input, TextArea } from '../../Components/Form/Form'
import { fadeIn } from '../../Functions/GlobalAnimations';
import MessageBox from '../../Components/MessageBox/MessageBox';
import Buttons from '../../Components/Button/Buttons'
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import { resetForm, sendEmail } from '../../Functions/Utilities';

//Data
const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#00aced",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  },
  {
    color: "#007bb6",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in"
  },
]

//images

// import contactBannerImg from "../../../public/assets/img/contactUs/contactBanner.jpg"


const ContactUsClassicPage = (props) => {
  const form = useRef(null)
  return (
    <div style={props.style}>
 
      {/* Parallax Scrolling Start */}
     {/* Parallax Scrolling Start */}
     <div id="parallax-section" className="full-screen md:flex md:items-center landscape:md:h-[600px] overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/contactUs/contactBanner.jpg)` }}></Parallax>
        <div className="absolute h-full w-full opacity-60 top-0 left-0 bg-primarycolorfake"></div>
        <Container className="relative h-full">
          <Row className="justify-center items-center h-full">
            <Col xl={8} md={10} lg={8} className="flex-col flex justify-center text-center h-[600px]">
              <div className="border-[#ca943d66] border-[8px] py-[7.5rem] px-[6.5rem] lg:p-[4.5rem] xs:p-8">
                <i className="line-icon-French-Fries text-[70px] inline-block leading-[80px] text-[#ca943d] mb-[3.5rem]"></i>
                <h1 className="text-[50px] leading-[95px] font-serif font-semibold text-white  -tracking-[4px] mb-[3.5rem] mx-auto lg:text-[50px] lg:leading-[50px] md:text-[50px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:-tracking-[1px]">Contact Us</h1>
                 </div>
            </Col>
          </Row>
         
        </Container>
      </div>
      {/* Parallax Scrolling End */}
      {/* Parallax Scrolling End */}

      
      {/* Section Start */}
      <m.section className=" bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
        <Container>
          <Row className="justify-center">
            <Col xl={6} lg={7} className="text-center mb-[4.5rem] md:mb-12">
              <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Fill out the form and we'll be in touch soon!</span>
              <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
            </Col>
            <Col className="col-xl-10 col-sm-12 col-xs-12">
              <Formik
                initialValues={{ name: '', email: '', phone: '', comment: '', terms_condition: false }}
                validationSchema={ContactFormStyle03Schema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <Form ref={form}>
                    <Row className="row-cols-1 row-cols-md-2">
                      <Col className="mb-16 sm:mb-[25px]">
                        <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                        <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                        <Input showErrorMsg={false} type="tel" name="phone" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                      </Col>
                      <Col className="mb-16 sm:mb-[20px]">
                        <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                      </Col>
                      <Col className="text-left sm:mb-[20px]">
                        <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                          <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<Link aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</Link>.</span>
                        </Checkbox>
                      </Col>
                      <Col className="text-right sm:text-center">
                        <Buttons type="submit" className={` font-medium font-serif  rounded-none lg:mb-[15px] landscape:lg:mb-[15px] uppercase${isSubmitting ? " loading" : ""}`}  themeColor={["#e42564", "#fa6259"]} size="sm" color="#fff" title="Send Message" />
                      </Col>
                    </Row>
                    <AnimatePresence>
                      {status && <Row><Col xs={12}><div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div></Col></Row>}
                    </AnimatePresence>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      

      {/* Section Start */}
      <section className="py-[100px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center items-center">
            <Col xs={12} xl={3} lg={4} md={5} sm={6} className="lg:flex lg:justify-end xs:mb-[20px] xs:justify-center">
              <span className="font-serif font-medium text-xlg text-darkgray inline-block -tracking-[.5px] lg:text-lg">Connect with social media</span>
            </Col>
            <Col xs={12} md={2} className="block sm:hidden">
              <span className="w-full h-[1px] inline-block bg-mediumgray"></span>
            </Col>
            <Col xs={12} xl={3} lg={4} md={5} sm={6}>
              <SocialIcons theme="social-icon-style-01" className="justify-left xs:justify-center xs:text-center" size="sm" iconColor="dark" data={SocialIconsData} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Start */}

      {/* Section Start */}
      <section>
        <GoogleMap
          className=" h-[600px] p-0 md:h-[450px] xs:h-[300px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124510.21294444661!2d6.635519140675627!3d51.443577359658015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bef5a58b273b%3A0x427f281315473c0!2sDuisburg%2C%20Germany!5e0!3m2!1sen!2s!4v1690283875058!5m2!1sen!2s"
        />
      </section>
      {/* Section End */}

    </div>
  )
}

export default ContactUsClassicPage