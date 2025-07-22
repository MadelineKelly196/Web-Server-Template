import express from "express";
import env from "dotenv";
import bodyParser from "body-parser"
import path from "path"

const app = express();
// Load the root .env file
const envPath = path.resolve(process.cwd(), '../.env');
env.config({ path: envPath });

const port = process.env.VITE_EXPRESS_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//check backend connection with simple hello
app.get("/hello/", (req, res) => {
    const hello = [
        {"id": 1, "message": "Hello World!"},
        {"id": 2, "message": " - from Node.js"}
    ]
    res.send(hello);
});
  
//listen on given port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});