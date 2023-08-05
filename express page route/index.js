import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const port= 3000;
const   __dirname= dirname(fileURLToPath(import.meta.url));

const app = express();
var bandname= " ";

// app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({extended: true}));


function bandnamegen(req,res,next){
    console.log(req.body);
    bandname = req.body["street"] + req.body["pet"];
    next();
};

app.use(bandnamegen);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post("/submit",(req,res)=>{
    res.send(`<h1>Your Band Name is </h1> <h2>:${bandname}</h2>`);
});


app.listen(port,(req,res)=>{
    console.log(`Port is listning to ${port}`);
});


// import express from 'express';
// import morgan from 'morgan';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const port = 3000;
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// var bandname = " ";

// app.use(morgan("tiny"));
// app.use(express.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// function bandnamegen(req, res, next) {
//     console.log(req.body);

//     // Check if the required properties exist in the request body
//     if (req.body && req.body["street"] && req.body["pet"]) {
//         bandname = req.body["street"] + req.body["pet"];
//     }

//     next();
// };

// app.use(bandnamegen);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/bandnamegenerator/index.html");
// });

// app.post("/submit", (req, res) => {
//     res.send(`<h1>Your Band Name is: ${bandname}</h1>`);
// });

// app.listen(port, () => {
//     console.log(`Port is listening on ${port}`);
// });
