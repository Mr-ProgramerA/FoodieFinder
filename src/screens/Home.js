import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
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
        <Carousel />
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => item.CategoryName == data.CategoryName)
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id}>
                          <Card />
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
