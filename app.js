const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');
const http = require("http");


const app = express();
app.use(bodyParser.urlencoded({
  extends: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("search");
});

app.get("/detail",function(req,res){
  const query = req.query.name;
  const apikey = "26555fd4";
  const url = "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + query;
  request(url, function(error,response,body){
    if(!error && response.statusCode==200){
      var data=JSON.parse(body)
      res.render("detail",{data:data});
    }
  })

});

app.post("/", function(req, res) {
      const query = req.body.search;
      const apikey = "26555fd4";
      const url = "http://www.omdbapi.com/?apikey=" + apikey + "&s=" + query;
      request(url, function(error,response,body){
        if(!error && response.statusCode==200){
          var data=JSON.parse(body)
          res.render("result",{data:data});
        }
      })

      //second method
      // http.get(url, function(response) { //connect to others' server
      //   response.on("data", function(data) {
      //       const newData = JSON.parse(data)
      //       res.render("result", {
      //         data: newData
      //       });
      //     })
      //   })

      });

      app.listen(3000, function() {
        console.log("port 3000 is now in listening");
      });
