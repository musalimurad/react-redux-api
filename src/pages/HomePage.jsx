import React from "react";
import Product from "../components/product/Product";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg"
            height={"600px"}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay my-2">
            <div className="container d-flex flex-column justify-content-center">
              <h5 className="card-title display-3">NEW SEASON CLOTHING</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
};

export default HomePage;
