import React from "react";

function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = () => {
    
  }

  return (
    <>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img
          style={{ height: "12em", objectFit: "cover" }}
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {props.foodName} </h5>
          <p className="card-text fs-6"> {props.desc} </p>
          <select className="rounded bg-warning ms-2 ">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="rounded bg-warning ms-3 ">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="m-1 fs-5 ms-2">Price:</div>

          <hr />
          <button
            className="btn btn-success btn-sm justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
