import React from "react";

const Product = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="box">
            <h4>'Colors'</h4>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              alt="price: 100 "
            />
            <p> price: 100 </p>
          </div>
        </div>
        <div class="col-4">
          <div class="box">
            <h4>'Black and white Colors'</h4>{" "}
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
              alt="price: 50"
            />{" "}
            <p>price: 50</p>
          </div>
        </div>
        <div class="col-4">
          <div class="box">
            <h4>Yellow and Black Colors'</h4>{" "}
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
              alt="price: 70"
            />
            <p>price: 70</p>
          </div>
        </div>
        <div class="col-4">
          <div class="box">
            <h4>'Blue Color'</h4>{" "}
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
              alt="price: 100"
            />{" "}
            <p>price: 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
