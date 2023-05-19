const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");
const PORT = config.get('port') || 5000;
const Route = require('./route');
app.use(express.static('client/build'));
const cors = require('cors');
app.use("/", Route);
app.use("/email", Route);
app.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
));
app.use(express.json());
// async function start(){
//   try{
//       await mongoose.connect(config.get('mongoUri'))
//       app.listen(PORT, ()=>{
//           console.log(`Server is starting... ${PORT}`)
//       })
//   }  catch (e) {
//       console.log("Server Error", e.message);
//       process.exit(1);
//   }
// };
// start();
  app.listen(PORT, "192.168.0.107",()=>{
          console.log(`Server is starting... ${PORT}`)
      })