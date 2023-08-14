const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit();
  }
};
module.exports = connectDB;
