import React from "react";

function Carousel() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div style={{zIndex:10}} class="carousel-caption d-none d-md-block">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/860x300?lunch"
              className="d-block w-100"
              alt="carousal image"
              style={{filter: "brightness(32%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/860x300?dinner"
              className="d-block w-100"
              alt="carousal image"
              style={{filter: "brightness(32%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/860x300?seafood"
              className="d-block w-100"
              alt="carousal image"
              style={{filter: "brightness(32%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/860x300?vegetarianfood"
              className="d-block w-100"
              alt="carousal image"
              style={{filter: "brightness(32%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/860x300?juice"
              className="d-block w-100"
              alt="carousal image"
              style={{filter: "brightness(32%)"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
