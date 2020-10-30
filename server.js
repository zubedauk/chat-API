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
const data=[{"id":0,"from":"Ahmad","text":"hello mama"},{"id":1,"from":"mama","text":"hi dear"}];
let clientData=[];
app.get("/messages/api",function(req,res){
   
        res.json(clientData)
    
        
})
//search

//root
app.get('/', function(request, response) {
  //response.sendFile(__dirname + '/index.html');
  response.send("https://zubeda-chat-srver.glitch.me/messages")
  response.send("https://zubeda-chat-srver.glitch.me/messages")
});
//

//show all existing messages
app.get("/messages",function(req,res){
    
    res.sendFile(__dirname+"/index.html")
    clientData=data;
  //res.send(clientData)
   
})
//extract from parameter(1)
app.get("/messages/:id",function(req,res){
    const id=req.params.id;
   
    const found=data.find(function(obj){
       
        return obj.id==id;
    })

    if(found){
       
        clientData=found;
        
        res.json(found)
    }
})
//*********add*/
app.post("/messages",function(req,res){
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
        data.push({"id":id,"from":name,"text":message})
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
    res.send("no found")
  }
});
//////////////////////read last 10
app.get("/last", function(req, res) {
}
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
