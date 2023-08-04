import React from "react";

//Components
// import CartContext from "../../store/cart-context";

// Libraries
import { Col, Nav, Row, Tab } from "react-bootstrap";

import DonerKebap from "../../Assets/img/items/donerKabab/Döner-Kebap.jpg";
import MealsItem from "./MealsItem/MealsItem";

const SURAJMEALS = [
  // Pizza
  {
    Mealid: "pizzaid",
    MealTitle: "PIZZA ",
    Mealicons: "",
    isPopular: true,
    isSizesAvailable: true,
    MealVariants: [
      // 1-
      // Margherita "mit Käse (klein 26cm)
      {
        variantId: "Margheritaklein26cm",
        variantPrice: "04.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Margherita",
        variantContent: "mit Käse (klein 26cm)",
      },
      // {
      //   variantId: "Margherita",
      //   variantPrice: {
      //     klein26cm: "04.00",
      //     groß30cm: "06.00",
      //     jumbo40cm: "12.00",
      //   },
      //   variantTitle: "Margherita",
      //   variantSize: "Klein 26cm",
      // },
      // Margheritamit Käse (groß 30cm)
      {
        variantId: "Margheritagroß30cm",
        variantPrice: "06.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Margherita",
        variantContent: "mit Käse (groß 30cm)",
      },
      // Margherita mit Käse (Jumbo 40cm)
      {
        variantId: "MargheritaJumbo40cm",
        variantPrice: "12.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Margherita",
        variantContent: "mit Käse (Jumbo 40cm)",
      },

      // 2-
      // Cipolla "mit Käse (klein 26cm)
      {
        variantId: "Cipollaklein26cm",
        variantPrice: "05.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Cipolla",
        variantContent: "mit Käse (klein 26cm)",
        badge: {
          variantTitle: "new",
          color: "#70a967",
        },
      },
      // Cipollamit Käse (groß 30cm)
      {
        variantId: "Cipollagroß30cm",
        variantPrice: "07.50",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Cipolla",
        variantContent: "mit Käse (groß 30cm)",
      },
      // Cipolla mit Käse (Jumbo 40cm)
      {
        variantId: "CipollaJumbo40cm",
        variantPrice: "14.50",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Cipolla",
        variantContent: "mit Käse (Jumbo 40cm)",
      },

      // 3-
      // Salami "mit Käse (klein 26cm)
      {
        variantId: "Salamiklein26cm",
        variantPrice: "05.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Salami",
        variantContent: "mit Käse (klein 26cm)",
      },
      // Salamimit Käse (groß 30cm)
      {
        variantId: "Salamigroß30cm",
        variantPrice: "07.50",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Salami",
        variantContent: "mit Käse (groß 30cm)",
        badge: {
          variantTitle: "new",
          color: "#70a967",
        },
      },
      // Salami mit Käse (Jumbo 40cm)
      {
        variantId: "SalamiJumbo40cm",
        variantPrice: "14.50",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Salami",
        variantContent: "mit Käse (Jumbo 40cm)",
      },
    ],
  },
  // Döner-Kebap
  {
    Mealid: "DonerKebap",
    MealTitle: "Döner Kebap",
    Mealicons: "",
    isPopular: true,
    isSizesAvailable: false,
    MealVariants: [
      {
        variantId: "PortionDrehspießvHahnchen",
        variantPrice: "06.50",
        variantImg: "/assets/img/menuItems/donerKabab/Döner-Kebap.jpg",
        variantTitle: "Portion Drehspieß v . Hähnchen",
        variantContent: "mit Zwiebel",
        badge: {
          variantTitle: "hot",
          color: "#d74a3a",
        },
      },
      {
        variantId: "DrehspießvHahnchenTeller",
        variantPrice: "07.50",
        variantImg: DonerKebap,
        variantTitle: "Drehspieß v . Hähnchen Teller",
        variantContent: "mit Zaziki und Zwiebel",
        badge: {
          variantTitle: "new",
          color: "#70a967",
        },
      },
      {
        variantId: "DrehspießvHähnchenuberbacken",
        variantPrice: "09.00",
        variantImg: DonerKebap,
        variantTitle: "Drehspieß v . Hähnchen überbacken",
        variantContent: "mit Champignons, Zwiebel, Rahmsauce Käse Reis",
      },

      {
        variantId: "DrehspießvHahnchen Hawaii",
        variantPrice: "09.50",
        variantImg: DonerKebap,
        variantTitle: "Drehspieß v . Hähnchen Hawaii",
        variantContent:
          "mit Dönerfleisch, Ananas, Sahnesauce, Käse überbacken, Reis",
      },
    ],
  },
  // Lasagne
  {
    Mealid: "LasagneId",
    MealTitle: "Lasagne",
    Mealicons: "",
    isPopular: false,
    isSizesAvailable: false,
    MealVariants: [
      {
        variantId: "LasagneallaForno",
        variantPrice: "07.50",
        variantImg: "/assets/img/menuItems/mealThree/mealThree.jpg",
        variantTitle: "Lasagne alla Forno",
        variantContent:
          "Lmit Hinterschinken Bolognese, Sahnesauce , Käse überbacken",
        badge: {
          variantTitle: "hot",
          color: "#d74a3a",
        },
      },
      {
        variantId: "LasagneallaFrido",
        variantPrice: "09.00",
        variantImg: "/assets/img/menuItems/mealThree/mealThree.jpg",
        variantTitle: "Lasagne alla Frido",
        variantContent: "Champ.,Spinat,Lammfl.,Rahms. ,Käse überb",
      },
      {
        variantId: "LasagneallaVerde",
        variantPrice: "08.50",
        variantImg: "/assets/img/menuItems/mealThree/mealThree.jpg",
        variantTitle: "Lasagne alla Verde",
        variantContent:
          "mit Spinat, Broccoli, Hinterschinken , Bolognese, Sahnesauce , Käse überbacken",
      },
    ],
  },
];

const AvailableMeals = (props) => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="pizzaid">
        <Row className="tab-style-03 justify-center">
          <Col lg={12} className="text-center">
            <Nav className="justify-center mb-[75px] sm:block md:mb-8">
              {SURAJMEALS.map((mealItem) => {
                return (
                  <Nav.Item
                    id={mealItem.Mealid}
                    key={mealItem.Mealid}
                    className=""
                  >
                    <Nav.Link
                      className="text-center"
                      eventKey={mealItem.Mealid}
                    >
                      {mealItem.MealTitle}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col>
            {" "}
            <Tab.Content>
              {SURAJMEALS.map((mealItem) => {
                return <MealsItem key={mealItem.Mealid} mealItem={mealItem} />;
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export const PopularMeals = (props) => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="pizzaid">
        <Row className="tab-style-03 justify-center">
          <Col lg={12} className="text-center">
            <Nav className="justify-center mb-[75px] sm:block md:mb-8">
              {SURAJMEALS.map((mealItem) => {
                if (mealItem.isPopular === true) {
                  return (
                    <Nav.Item
                      id={mealItem.Mealid}
                      key={mealItem.Mealid}
                      className=""
                    >
                      <Nav.Link
                        className="text-center"
                        eventKey={mealItem.Mealid}
                      >
                        {mealItem.MealTitle}
                      </Nav.Link>
                    </Nav.Item>
                  );
                }
                return null;
              })}
            </Nav>
          </Col>
          <Col>
            {" "}
            <Tab.Content>
              {SURAJMEALS.map((mealItem) => {
                return <MealsItem key={mealItem.Mealid} mealItem={mealItem} />;
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
export default AvailableMeals;
