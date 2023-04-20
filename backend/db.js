const mongoose = require("mongoose");

// URI for version 4.1 and later but it will not accept callback function
const mongoURI =
  "mongodb+srv://GoFood:GoFoodProjectPassword@cluster0.uw6idog.mongodb.net/?retryWrites=true&w=majority";

// URI for version 2.2.12 and it will not accept callback function
// const mongoURI =
//   "mongodb://GoFood:GoFoodProjectPassword@ac-k2ycmwo-shard-00-00.uw6idog.mongodb.net:27017,ac-k2ycmwo-shard-00-01.uw6idog.mongodb.net:27017,ac-k2ycmwo-shard-00-02.uw6idog.mongodb.net:27017/?ssl=true&replicaSet=atlas-tyuld5-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
  //   mongoose.connect(mongoURI, () => {
  // console.log("connected");
  //   });

//   ########################################################################

//   await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
//     if (err) console.log("--------", err);
//     else {
//       console.log("connected");
//     }
//   });

// #############################################################################

await mongoose.connect(mongoURI)
};

module.exports = mongoDB;
