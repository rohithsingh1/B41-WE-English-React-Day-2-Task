import React,{useState} from 'react';

function Card({itemName, rating, originalPrice, discountPrice, isDisabled,incrementHandler,decrementHandler}) {
  const [disabled, setDisabled]=useState(isDisabled);
  
  return (
    <React.Fragment>
       <div className="col mb-5">
          <div className="card h-100">                 
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>sale</div>
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="dummyImage" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{itemName}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                {
                  Array.from(Array(Math.floor(rating)).keys()).map((rate,rateIndex) => (
                    <div key={rateIndex} className="bi-star-fill"></div>
                  ))
                }
              </div>                      
              <span className="text-muted text-decoration-line-through">${originalPrice}</span>
                ${discountPrice}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {
                disabled? (
                  <button className="btn btn-outline-dark mt-auto"
                    onClick={() => {
                      setDisabled(!disabled)
                      decrementHandler()
                }}  >RemoveItem from cart</button>
                ):(
                    <button className="btn btn-outline-dark mt-auto"
                      onClick={() => {
                        setDisabled(!disabled)
                        incrementHandler()
                      }}>AddItem to cart</button>
                )
              }
             </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Card