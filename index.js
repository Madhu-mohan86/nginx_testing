const express=require("express")

const app=express()

app.get("/",(req,res)=>{
res.send("3rd server");
})

app.listen(5000,()=>{
    console.log("data projected by server");
})