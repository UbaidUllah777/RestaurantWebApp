import React, { memo } from 'react'

// Libraries

import { Col, Container, Row } from 'react-bootstrap';
import { PropTypes } from "prop-types";

// Components
import SocialIcons from '../SocialIcon/SocialIcons';
import FooterMenu, { Footer } from './Footer';
import StaticInstagram from '../Instagram/StaticInstagram';

// Data
import FooterData from './FooterData';

const iconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
   
    {
        color: "#828282",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
]

const FooterStyle01 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[95px] md:py-[50px]">
                <Container>
                    <Row>
                        <FooterMenu data={FooterData.slice(0, 2)} lg={2} sm={4} className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
                        <Col lg={5} sm={8} className="xs:mb-[25px]">
                            <span className="mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]">Reach Us</span>
                            <p className="w-[85%] mb-[15px]">Suraj Bawa, Strernbuschweg 77, (IMO Autowasche) 47057 Duisburg-Neudorf</p>
                            <div><i className="feather-phone-call text-sm mr-[10px] text-themecolor"></i>+49 0203 377770</div>
                            <div><i className="feather-mail text-sm mr-[10px] text-themecolor"></i><a aria-label="mail" href="mailTo:info@surajbawa.com">info@surajbawa.com</a></div>
                              </Col>
                        <Col lg={3} sm={4}>
                            <span className="mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]">Follow Us On Isntagram</span>
                            <div className="w-full inline-block">
                                <StaticInstagram total_posts={3} />
                                <a aria-label="link" rel="noreferrer" href="https://www.instagram.com/" target="_blank" className="flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white">
                                   
                                    
                                </a>
                                <SocialIcons size="xs" theme="social-icon-style-01" className="justify-start sm:justify-center  mt-[10px] " iconColor={props.theme === "dark" ? "light" : "dark"} data={iconData} />
                      
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-[40px] border-t border-[#ffffff1a]">
                <Container>
                    <Row>
                  
                        
                        <Col md={9} className="flex justify-center items-center text-center sm:mb-[20px]">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Suraj Bawa all rights reserved </p>
                          
                      
                        </Col>
                        <Col md={3} className="text-right sm:text-center">
                           
                            <p  style={{ fontSize:"0.8rem"}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Developed by <a aria-label="BxTechnoloies" rel="noreferrer" href="https://www.bxtechnologies.net/" className="hover:text-white" target="_blank" style={{color:"white", fontSize:".7rem", marginRight:"40px"}}> Bx Technologies</a></p>
                            </Col>
                    </Row>
                </Container>
            </div>
        </Footer>
    )
}

FooterStyle01.defaultProps = {
    data: FooterData,
    className: "bg-darkgray text-[#828282]",
    logo: "/assets/img/webp/logo-white.webp",
    theme: "light"
}

FooterStyle01.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle01)
