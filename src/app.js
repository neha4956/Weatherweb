const express = require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
//const request=require("request");
const Port=process.env.PORT || 8000 ;


const template_path=path.join(__dirname,"../templates/views");
const staticPath=path.join(__dirname,"../public");
const partials_path=path.join(__dirname,"../templates/partials");

app.set("view engine" , "hbs");
app.set("views" ,template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

app.get("/" , (req,res)=>{
 res.render("index");
});
app.get("/about" , (req,res)=>{
     res.render("about");
    });
    app.get("/weather" , (req,res)=>{
     res.render("weather");
    });
    app.get("*" , (req,res)=>{
     res.render("404error" , {
          errorMsg: "oops! page not found"
     });
    });
            

app.listen(Port, ()=>{
     console.log("listening to the port 8000");
});
