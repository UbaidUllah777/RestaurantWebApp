import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'


// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from '../Components/Header/Header'
import Lists from "../Components/Lists/Lists"

// Data

const ListData = [
    {
        content: "This policy applies where we are acting as a data controller with respect to the personal data.",
    },
    {
        content: "By using our website and agreeing to this policy, you consent to our use of cookies in accordance.",
    },
    {
        content: "Our website incorporates privacy controls which affect how we will process your personal data.",
    },
    {
        content: "Theme advantages are pixel perfect design clear code delivered.",
    },
]

const Privacy = (props) => {
  return (
    <div style={props.style}>
      
             {/* Section Start */}
      <section className="bg-lightgray my-[90px] sm:my-[80px]">
        <Container>
          <Row className="xs:text-center">
            <Col xl={8} lg={6} className="flex md:justify-center md:mb-[15px] sm:block sm:text-center">
              <h1 className="my-[30px] sm:my-[20px] text-lg text-darkgray font-medium mb-0 font-serif inline-block">Imprint</h1>
              <span className="my-[30px] sm:my-[20px] font-serif text-md relative pl-[25px] ml-[25px] block sm:mt-[5px] sm:p-0 before:absolute before:bg-darkgray before:content-[''] before:h-[12px] before:top-[4px] before:w-[2px] before:left-0 sm:before:hidden sm:ml-0">Suraj Bawa </span>
            </Col>
        
          </Row>
        </Container>
      </section>
      {/* Section End */}
      {/* Section Start */}
      <section className="py-[40px] lg:py-[30px] md:py-[25px] sm:py-[20px] xs:py-[20px]">
            <Container>
                <Row className="items-center justify-center">
                    <Col lg={9} md={12} className="col-12">
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Registration </h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electronic typesetting, essentially unchanged.</p>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Policy introduction</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">It has survived not only five centuries, but also the leap electronic typesetting, essentially unchanged. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Lists theme="list-style-06" data={ListData} animationDelay={0} />
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Providing your personal data to others</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Personally Identifiable Information</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Section End */}

    </div>
  )
}

export default Privacy