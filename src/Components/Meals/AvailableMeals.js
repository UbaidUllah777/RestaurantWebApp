import React from "react";

//Components
// import CartContext from "../../store/cart-context";

// Libraries
import { Col, Nav, Row, Tab } from "react-bootstrap";
import pizzaImage from "../../Assets/img/items/pizza/pizza.jpeg";
import DonerKebap from "../../Assets/img/items/donerKabab/Döner-Kebap.jpg";
import MealsItem from "./MealsItem/MealsItem";

const SURAJMEALS = [
  // Pizza
  {
    Mealid: "pizzaid",
    MealTitle: "PIZZA",
    Mealicons: "",
    MealVariants: [
      {
        variantId: "p1",
        variantPrice: "10.00",
        variantImg: "/assets/img/menuItems/pizza/pizza.jpeg",
        variantTitle: "Pizza One",
        variantContent: "Ipsum is simply dolor text printing",
      },
      {
        variantId: "p2",
        variantPrice: "06.00",
        variantImg: pizzaImage,
        variantTitle: "Pizza Two",
        variantContent: "Ipsum is simply dolor text printing",
      },
      {
        variantId: "p3",
        variantPrice: "10.00",
        variantImg: pizzaImage,
        variantTitle: "Pizza Three",
        variantContent: "Printing and typesetting industry",

        badge: {
          variantTitle: "new",
          color: "#70a967",
        },
      },
    ],
  },
  // Döner-Kebap
  {
    Mealid: "DonerKebabid",
    MealTitle: "Döner Kebab",
    Mealicons: "",
    MealVariants: [
      {
        variantId: "dk1",
        variantPrice: "08.00",
        variantImg: "/assets/img/menuItems/donerKabab/Döner-Kebap.jpg",
        variantTitle: "Doner Kabab one",
        variantContent: "Lorem ipsum has been the industry",
        badge: {
          variantTitle: "hot",
          color: "#d74a3a",
        },
      },
      {
        variantId: "dk2",
        variantPrice: "02.00",
        variantImg: DonerKebap,
        variantTitle: "Doner Kabab two",
        variantContent: "Printing and typesetting industry",
      },
      {
        variantId: "dk3",
        variantPrice: "04.00",
        variantImg: DonerKebap,
        variantTitle: "Doner Kabab Three",
        variantContent: "Ipsum is simply dolor text printing",
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

export default AvailableMeals;
