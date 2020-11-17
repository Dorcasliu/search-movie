const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({
  extends: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("result");
});

app.post("/",function(req,res){

});

app.listen(3000,function(){
  console.log("port 3000 is now in listening");
});
