const express = require("express");
const cors = require('cors')
const bodyParser=require("body-parser")
const app = express();

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

//root
app.get('/', function(request, response) {
  //response.sendFile(__dirname + '/index.html');
  response.send("https://zubeda-chat-srver.glitch.me/messages")
});
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
    }else{
        res.send("no data found")
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
        res.send(clientData)
    }
    
  // 
})
//***********API on root****** */
app.get("/message/api",function(req,res){
   
        res.send(clientData)
    
        
})
////////////////z//////////////////////////////////beda end






app.listen(process.env.PORT);
