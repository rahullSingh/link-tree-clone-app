const express=require("express");

app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendfile(__dirname+"/index.html");
  // res.send("hi");
});

const port=3000;

app.listen(port,function(req,res){
  console.log("server running at 3000");
})
