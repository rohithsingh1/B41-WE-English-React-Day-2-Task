import React,{useState} from 'react';
import {Data} from './ItemsData';
import Card from './Card';
import {CardItemsConsumer} from "./Context";
function RenderCards() {
  const [count, setCount]=useState(0);
  const consumer=CardItemsConsumer();
  function incrementHandler() {
    setCount(count+1);
    consumer.incrementCounter(count);
  }
  function decrementHandler() {
    setCount(count-1);
    consumer.decrementCounter(count);
  }
  return (
    <React.Fragment>
       <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      {
                          Data.map((itemCard, itemIndex) => (
                              <Card key={itemIndex} itemName={itemCard.itemName} rating={itemCard.rating}
                                  originalPrice={itemCard.originalPrice} discountPrice={itemCard.discountPrice}
                              isDisabled={itemCard.isDisabled} incrementHandler={incrementHandler}
                              decrementHandler={decrementHandler} />
                          ))
                      }
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default RenderCards