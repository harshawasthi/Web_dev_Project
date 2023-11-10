const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const url = 'mongodb://127.0.0.1:27017/wanderlust';
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });


async function main() {
  await mongoose.connect(url);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "653cbf875427a74aa310fcd6",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
};

initDB();
