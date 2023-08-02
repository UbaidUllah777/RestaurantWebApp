import { useContext } from "react";

import MealItemForm from "../../Form/MealItemForm";
import CartContext from "../../../store/cart-context";

// Libraries
import { Badge, Col, Row, Tab } from "react-bootstrap";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount, variantId, variantTitle, variantPrice) => {
    cartCtx.addItem({
      variantId: variantId,
      variantTitle: variantTitle,
      amount: amount,
      variantPrice: parseFloat(variantPrice),
    });
  };

  return (
    <Tab.Pane eventKey={props.mealItem.Mealid} key={props.mealItem.Mealid}>
      <Row xs={2}>
        {props.mealItem.MealVariants.map((varitanItem) => {
          return (
            <Col
              id={varitanItem.variantId}
              key={varitanItem.variantId}
              lg={6}
              xs={12}
              className="tab-item"
            >
              <div className="border-b border-[#0000001a] flex py-[28px] md:items-center">
                <img
                  height={73}
                  width={73}
                  className="rounded-full mr-[25px] xs:w-[40px] xs:mr-[20px]"
                  src={varitanItem.variantImg}
                  alt=""
                  data-no-retina=""
                />
                <div className="w-[70%] lg:w-[65%] xs:w-[60%] xs:mr-[10px]">
                  <span className="font-medium text-xmd text-darkgray leading-[28px]">
                    {varitanItem.variantTitle}
                    {varitanItem.badge && (
                      <Badge
                        style={{
                          backgroundColor: varitanItem.badge.color,
                        }}
                        bg={`[${varitanItem.badge.color}]`}
                        className="inline-block align-middle py-[2px] px-[9px] text-[10px] leading-[15px] text-white uppercase ml-[10px] rounded-[1px] font-medium"
                      >
                        {varitanItem.badge.variantTitle}
                      </Badge>
                    )}
                  </span>
                  <div className="font-medium text-xmd text-darkgray flex items-center">
                    $ {varitanItem.variantPrice}
                  </div>

                  <p>{varitanItem.variantContent}</p>
                </div>
                <MealItemForm
                  onAddToCart={addToCartHandler}
                  variantId={varitanItem.variantId}
                  variantTitle={varitanItem.variantTitle}
                  variantPrice={varitanItem.variantPrice}
                  className="font-medium text-xmd text-darkgray flex items-center"
                ></MealItemForm>
              </div>
            </Col>
          );
        })}
      </Row>
    </Tab.Pane>
  );
};

export default MealsItem;
