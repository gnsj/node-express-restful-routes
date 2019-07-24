const   express     = require('express'),
        bodyParser  = require("body-parser");
const app = express();

//requiring routes
const userRoutes = require("./routes/user");

app.get("/", (req, res) => {
    res.send("App.JS");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log('Server running!');
});