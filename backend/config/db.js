const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndexes: true,
    });
    console.log(`Mongo Connected :  ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    console.error(`Error : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
