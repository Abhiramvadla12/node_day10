let http = require("http");
let fs = require("fs");
let path = require("path");
let server = http.createServer((req,res)=>{
    //getting all files present in the folder:-
    let files = fs.readdirSync("task");
    // console.log(files);
    //iterating the files names:-
    for(i of files){
        if(i.includes(".")){
            // console.log(path.join(__dirname,"task", i))
            fs.unlinkSync(path.join(__dirname,"task", i));
        }
        else{
            fs.rmSync(path.join(__dirname,"task", i),{recursive:true});
        }
    }
    res.end("ended successfully!!!!");
})
let port = 3002;
server.listen(port,()=>{
    console.log("server started");
})
//checking git in vs code