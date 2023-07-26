const mongoose = require("mongoose");

// URI for version 4.1 and later but it will not accept callback function
const mongoURI =
  "mongodb+srv://GoFood:GoFoodProjectPassword@cluster0.uw6idog.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// URI for version 2.2.12 and it will also not accept callback function
// const mongoURI =
//   "mongodb://GoFood:GoFoodProjectPassword@ac-k2ycmwo-shard-00-00.uw6idog.mongodb.net:27017,ac-k2ycmwo-shard-00-01.uw6idog.mongodb.net:27017,ac-k2ycmwo-shard-00-02.uw6idog.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-tyuld5-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log(err);
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );
      fetched_data.find({}).toArray(async function (err, data) {

        const foodCategory = await mongoose.connection.db.collection(
          "foodCategory"
        );
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.foodCategory = catData;
          }
        });

        // if (err) console.log(err);
        // else {
        //   global.food_items = data;
        // }
      });
    }
  });
};
//   ########################################################################

// await mongoose
//   .connect(mongoURI)
// useNewUrlParser: true,
// useCreateIndex: true,
// useUnifiedTopology: true,
// useFindAndModify: false
// })
// .then(() => {
//   console.log("success!!!");
//   const fetched_data = mongoose.connection.db.collection("food_items");
//   console.log(fetched_data);
//   fetched_data.find({}).toArray(function (err,data) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   })
// })

//   .then(function (data) {
//     console.log(data);
//   }).catch(function (err) {
//     console.log(err);
//   })
// })
// .catch((err) => {
//   console.log(err);
// });

//   ########################################################################

//   mongoose.connect(mongoURI, () => {
// console.log("connected");
//   });
// }
//   ########################################################################

// await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//   if (err) console.log("--------", err);
//   else {
//     console.log("connected");

//   }
// });

// };
// #############################################################################

module.exports = mongoDB;
