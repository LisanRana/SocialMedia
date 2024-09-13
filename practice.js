// const math=require('./math');

// const addresult=math.add(2,3);
// const subresult=math.sub(3,4);
// const mulresult=math.mul(2,2);
// const divresult=math.div(6,2);
// // console.log(addresult);
// // console.log(subresult);
// // console.log(mulresult);
// // console.log(divresult);
// // const fs=require('fs');
// // fs.readFile("greet.txt","utf8",(err,data)=>{
// //  if(err){
// //   console.log("there is error");
// //  }else{
// //   console.log(data);
// //  }
// // })
// // const data=fs.readFileSync("greet.txt","utf8");
// // console.log(data);

// // make a new file write to it and then retrieve data from it
// // and then update the data in the file after reading it
// // and then delete the file

// const http=require("http");
// const server=http.createServer((req,res)=>{
//  res.write("Hello Aashu");
//  res.end();
// });
// server.listen(3000,(err)=>{
//  if(err){
//   console.log("There is an error")
//  }else{
//   console.log("Server started on port 3000");
//  }
// });


// Express.js
const express=require('express');
const app=express();


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia')
  .then(() => console.log('Connected!'));

app.get("/", (req,res)=>{
 res.send("hello world");
});
app.get("/about", (req,res)=>{
 res.send("About page");
});
app.get("/contact/:name", (req,res)=>{
 res.send(`Contact page ${req.params.name}`);
});

// const users=[
//  {id:1,name:"lisan",age:24},
//  {id:2,name:"nisan",age:25},
//  {id:3,name:"kisan",age:22}
// ];
// app.get("/user/:id",(req,res)=>{
//  const id=req.params.id;
//  const user=users.find((item)=>item.id==id);
// if(!user){
//  res.send("user not found")
// }
// res.send(user);
// });


const students=[
 {id:1,name:"priya",sub:"math"},
 {id:1,name:"riya",sub:"social"},
 {id:1,name:"supriya",sub:"science"}
];
app.get("/student/:name",(req,res)=>{
const name=req.params.name;
const student=students.find((parameter)=>parameter.name==name);
if(!student){
 res.send("Not found")
}
res.send(student);
 });

 app.post("/user",(req,res)=>{
  res.send("user created");
 });

app.listen(5000, ()=>{
 console.log("Server started on port 5000");
}); 
