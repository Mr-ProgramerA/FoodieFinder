import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    // let response = await fetch("http://localhost:5000/api/foodData", {
    let response = await fetch("https://foodiefinder-backend.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-interval="1000"
        >
          <div className="carousel-inner">
            <div
              style={{ zIndex: 10 }}
              className="carousel-caption d-none d-md-block"
            >
              <div className="d-flex justifiy-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <button className="btn btn-outline-warning" type="submit">
                Search
              </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/860x300?lunch"
                className="d-block w-100"
                alt="carousal image"
                style={{ filter: "brightness(32%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/860x300?dinner"
                className="d-block w-100"
                alt="carousal image"
                style={{ filter: "brightness(32%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/860x300?seafood"
                className="d-block w-100"
                alt="carousal image"
                style={{ filter: "brightness(32%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/860x300?vegetarianfood"
                className="d-block w-100"
                alt="carousal image"
                style={{ filter: "brightness(32%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/860x300?juice"
                className="d-block w-100"
                alt="carousal image"
                style={{ filter: "brightness(32%)" }}
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
      </div>
      <div className="container">
        {foodCat != [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem != [] ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName == data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-4 mb-4"
                        >
                          <Card foodItems = {filterItems}
                            // foodName={filterItems.name}
                            // desc={filterItems.description}
                            // imgSrc={filterItems.img}
                            options={filterItems.options[0]}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Items found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>couldn't load data</div>
        )}
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
