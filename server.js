
const express = require('express');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));


// connecting to Routes

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
const PORT = process.env.PORT || 3000;
app.listen (PORT, function(){
    console.log("Listening on port 3000");
});
