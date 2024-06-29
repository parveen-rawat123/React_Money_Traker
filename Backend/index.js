const connectDB = require("./db/db");
const app = require("./app");
const dotenv = require("dotenv");   
const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is runing at PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MOngoDb connection faild", error);
    });
