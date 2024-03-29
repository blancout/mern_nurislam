const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/books");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// use the cors middleware with the
// origin and credentials options
//app.use(cors());
//app.use(cors({ origin: true, credentials: true }));
//app.use(cors({  origin: 'http://127.0.0.1:8082/api/books', // use your actual domain name (or localhost), using * is not recommended
//                 methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//                 allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization','Access-Control-Allow-Origin: *'],
//                 credentials: true}));

var corsOptions = {
  //origin: "http://172.26.91.28:8082"
  origin: "*"
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
})

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use the routes module as a middleware
// for the /api/books path
// esse use deve ser o ultimo anes do connectDB para evitar erros na inclusao
app.use("/api/books", routes);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;
//app.listen(port, "127.0.0.1", () => console.log(`Servidor disponivel na porta ${port} ` + Date()));
app.listen(port, () => console.log(`Servidor disponivel na porta ${port} ` + Date()));

