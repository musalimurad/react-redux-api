import React from "react";
import AddToCart from "../cart/AddToCart";

const ProductItem = (props) => {
  return (
    
      <div key={props.key} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" style={{width: "18rem", marginTop:"20px"}}>
          <img
          style={{objectFit:"contain", height:"260px"}}
            src={props.imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title.length>22 ? props.title.substring(0, 22) + '...': props.title}</h5>
            <p className="card-text">
             {props.desc.length>200? props.desc.substring(0,200) + "...": props.desc}
            </p>
            <AddToCart/>
          </div>
        </div>
      </div>
   
  );
};

export default ProductItem;
