const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("body-parser-csv")(bodyParser);
//require("body-parser-graphql")(bodyParser);


const app = express();

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.csv({limit: '50mb'}));

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose.Promise = global.Promise
mongoose.connect(
    db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));