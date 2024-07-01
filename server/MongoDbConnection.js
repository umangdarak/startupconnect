const mongoose = require("mongoose");

module.exports= mongoose
  .connect('mongodb+srv://umangdarak:5qdnoHGmPOzHZL7O@cluster0.pjzii8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log("Error" + e));


