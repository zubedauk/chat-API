const express = require("express");
const cors = require('cors')
const bodyParser=require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage]




/////////********************************zubeda start
var msg={};
const data=[{"id":0,"from":"Ahmad","text":"hello mama:express","time":"7:46:34"},{"id":1,"from":"mama","text":"hi dear","time":"8:46:34"}];
let clientData=[];
app.get("/messages/api",function(req,res){
   
        res.json(data)
    
        
})
//search

//root
app.get('/', function(req, res) {
  //response.sendFile(__dirname + '/index.html');
  res.sendFile(__dirname+"/index.html")
   
});
//

//show all existing messages
app.get("/messages",function(req,res){
   clientData=data;
   res.sendFile(__dirname+"/all.html")
   
   // res.json(data)
  
   
})
//extract from parameter(1)
app.get("/messages/:id",function(req,res){
  
    const id=req.params.id;
   
    const found=data.find(function(obj){
       
        return obj.id==id;
    })

    if(found){
       
        clientData=found;
       // res.sendFile(__dirname+"/one.html")
      res.json(found)
    }
  
})
//*********add*/
app.post("/messages",function(req,res){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const name=req.body.name;
    const message=req.body.msg;
    const length=data.length;
    var id=0;
    if(length===0){
        id=0;
    }else{

        id=length;
    }
    if((name!="") && (message!="")){
        data.push({"id":id,"from":name,"text":message,"time":time})
        clientData=data;
        //res.send(clientData)
    }
    
  // 
})
///////////////////////////////////////////////////////search
app.get("/search", function(req, res) {
  const search=req.query;
 //res.send(req.query.text)
  const found=data.find(function(obj){
    return obj.text.toLowerCase().includes(req.query.text);
  })
  if(found){
    res.json(found)
  }else{
     res.status(404);
  }
});
//////////////////////read last 10
app.get("/last-ten", function(req, res) {
  clientData=data;
  res.json(clientData.slice(0,10))
})
//////////////////////////////////////////////////////////////
app.get("/messages/delete/:id", function(req, res) {
 const id=req.params.id;
   
    const found=data.find(function(obj){
       
        return obj.id==id;
    })
 if(found){
      
      data.splice(data.indexOf(found),1)
       
      clientData=data;
      res.json(clientData)
       
    }else{
        res.send("not data found")
    }
});
//***********delete on root****** */
////search

////////////////z//////////////////////////////////beda end






app.listen(process.env.PORT);
