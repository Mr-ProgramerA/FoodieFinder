import React from "react";

function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <>
      {/* <div className="">
        <div
          className="card m-3"
          style={{ width: "18rem", maxHeight: "41vh" }}
        >
          
          <img 
          style={{height:"19.5vh",objectFit :"cover"}}
          src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="card-img-top cardimgdev"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">some text to be written here.</p>
            <div className="">
              <select className="m-2 rounded bg-warning">
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
      </div> */}

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
              return <option key={data} value={data}> {data} </option>
              
            })}
          </select>
          <div className="m-1 fs-5 ms-2">Price:</div>
        </div>
      </div>

      {/* <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
    </>
  );
}

export default Card;
