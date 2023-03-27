import React from "react";

function Card() {
  return (
    <>
      <div className="container">
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "41vh" }}
        >
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">some text to be written here.</p>
            <div className="containerw-100">
              <select className="m-2 h-100 rounded bg-warning">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 rounded bg-warning">
                <option value="half">Full</option>
                <option value="half">Half</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
