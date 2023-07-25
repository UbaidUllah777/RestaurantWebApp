import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop";

// Home
const RestaurantPage = lazy(() => import("./Pages/Home/Restaurant"));

// Footer
const Footer = lazy(() => import("./Pages/Footer/FooterStyle01Page"));

//About Us
const RestaurantAboutUsPage = lazy(() => import("./Pages/About/AboutUsPage"));
// Contact us

const RestaurantContactUsPage = lazy(() =>
  import("./Pages/Contact/ContactUsClassicPage")
);

function App() {
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
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  {/* Footers */}
                  <Route
                    path="footer-style-01"
                    element={<Footer style={{ "--base-color": "#0038e3" }} />}
                  />
                  {/* Home */}
                  <Route path="/" element={<RestaurantPage />} />
                  <Route
                    path="/page/about-us"
                    element={
                      <RestaurantAboutUsPage
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />{" "}
                  <Route
                    path="/page/contact-us"
                    element={
                      <RestaurantContactUsPage
                        style={{ "--base-color": "#0038e3" }}
                      />
                    }
                  />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
