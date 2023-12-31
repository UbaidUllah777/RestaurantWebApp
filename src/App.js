import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";
import { Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Link as ScrollTo } from "react-scroll";

// Context
import GlobalContext from "./Context/Context";

// Components
import CartProvider from "./store/CartProvider";
import ScrollToTopButton from "./Components/ScrollToTop";
import FooterStyle01 from "./Components/Footers/FooterStyle01";
import Cart from "./Components/Cart/Cart";
import Header, {
  HeaderNav,
  Menu,
  HeaderLanguage,
} from "./Components/Header/Header";
import SideButtons from "./Components/SideButtons";

import Privacy from "./Pages/Privacy";
import Imprint from "./Pages/Imprint";

// Srcs
import defaultLogo from "../src/Assets/img/logo/SurajBawaLogo.png";

// Home
const RestaurantPage = lazy(() => import("./Pages/Home/Restaurant"));

// Footer
const Footer = lazy(() => import("./Pages/Footer/FooterStyle01Page"));

//About Us
const RestaurantAboutUsPage = lazy(() => import("./Pages/About/AboutUsPage"));

//Menu page
const RestaurantMenuPage = lazy(() => import("./Pages/FullMenu/FullMenu"));

// Contact us
const RestaurantContactUsPage = lazy(() =>
  import("./Pages/Contact/ContactUsClassicPage")
);

//Component Function

function App(props) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false,
  });
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener("load", retina(document.querySelectorAll("img")));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then((module) => {
        module.SetHeaderMenuPos();
        module.setDocumentFullHeight();
      });
    }, 1000);
  }, [location]);

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <CartProvider>
      <GlobalContext.Provider
        value={{
          headerHeight,
          setHeaderHeight,
          footerHeight,
          setFooterHeight,
          isModalOpen,
          setIsModalOpen,
          customModal,
          setCustomModal,
        }}
      >
        <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
          {
            <main
              style={{ marginTop: headerHeight, marginBottom: footerHeight }}
            >
              <SideButtons />
              {/* Header Start */}
              <Header
                topSpace={{ dekstop: false, md: true }}
                type="reverse-scroll"
              >
                <HeaderNav
                  fluid="fluid"
                  theme="light"
                  bg="light"
                  expand="lg"
                  className="px-[35px] py-[0px] md:pr-[15px] sm:pr-0 md:pl-0 md:py-[20px]"
                >
                  <Col
                    lg={2}
                    sm={6}
                    className="col-auto me-auto ps-lg-0 sm:!pl-0"
                  >
                    <Link
                      aria-label="header home link"
                      className="flex items-center"
                      to="/"
                    >
                      <Navbar.Brand className="inline-block p-0 m-0">
                        <img
                          className="default-logo"
                          width="133"
                          height="144"
                          loading="lazy"
                          src={defaultLogo}
                          data-rjs={defaultLogo}
                          alt="logo"
                        />
                        <img
                          className="alt-logo"
                          width="133"
                          height="144"
                          loading="lazy"
                          src={defaultLogo}
                          data-rjs={defaultLogo}
                          alt="logo"
                        />
                        <img
                          className="mobile-logo"
                          width="133"
                          height="144"
                          loading="lazy"
                          src={defaultLogo}
                          data-rjs={defaultLogo}
                          alt="logo"
                        />
                      </Navbar.Brand>
                    </Link>
                  </Col>
                  <Navbar.Toggle className="order-last md:ml-[25px] sm:ml-[17px]">
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                  </Navbar.Toggle>
                  <Navbar.Collapse className="col-auto justify-center menu-order px-lg-0 restaurant-header-menu">
                    <Menu {...props} />
                  </Navbar.Collapse>
                  <Col className="col-auto col-lg-2 text-right pe-0 font-size-0 sm:hidden">
                    <ScrollTo
                      href="#"
                      to="experience"
                      offset={0}
                      delay={0}
                      spy={true}
                      smooth={true}
                      duration={800}
                    ></ScrollTo>
                  </Col>

                  <Col className="col-auto col-lg-2 text-end pe-0 font-size-0">
                    <HeaderLanguage className="xs:pl-[15px]" />
                    <Cart className="xs:pl-[15px]" />
                  </Col>
                </HeaderNav>
              </Header>
              {/* Header End */}
              <ScrollToTopButton />
              <AnimatePresence exitBeforeEnter>
                <Suspense fallback={<></>}>
                  <Routes>
                    {/* Footers */}
                    <Route
                      path="footer-style-01"
                      element={<Footer style={{ "--base-color": "#0038e3" }} />}
                    />

                    <Route
                      path="/about-us"
                      element={
                        <RestaurantAboutUsPage
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />

                    <Route
                      path="/menu"
                      element={
                        <RestaurantMenuPage
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />
                    <Route
                      path="/contact-us"
                      element={
                        <RestaurantContactUsPage
                          style={{ "--base-color": "#0038e3" }}
                        />
                      }
                    />

                    <Route
                      path="/Imprint"
                      element={
                        <Imprint style={{ "--base-color": "#0038e3" }} />
                      }
                    />

                    <Route
                      path="/Privacy"
                      element={
                        <Privacy style={{ "--base-color": "#0038e3" }} />
                      }
                    />
                    {/* Home */}
                    <Route path="/" element={<RestaurantPage />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
              <FooterStyle01
                theme="dark"
                className="bg-[#262b35] text-slateblue"
              />
            </main>
          }
        </div>
      </GlobalContext.Provider>
    </CartProvider>
  );
}

export default App;
