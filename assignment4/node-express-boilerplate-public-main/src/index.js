const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());
// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World!");
})
function checkError(num1,num2,result,operator){
    if(isNaN(num1) || isNaN(num2)){
        return `inputError`
    }
    if(operator=='divide' && num2==0){
        return "divideBy0Error"
    }
    if(Number(num1)<-1000000||Number(num2)<-1000000 || result<-1000000){
        return "UnderFlow"
    }
    if(Number(num1)>1000000 || Number(num2)>1000000 || result>1000000){
        return "Overflow"
    }
    return true;
}

app.post("/add",(req,res)=>{
    let sum=Number(req.body.num1)+Number(req.body.num2);
    let input=checkError(req.body.num1,req.body.num2,sum);
    switch(input){
        case"inputError":
            res.json({
                "status":"error",
                "message":"Invalid data types"
            })
            break;
        case "Underflow":
            res.json({
                "status":"error",
                "message":"UnderFlow"
            })
            break;
        case "Overflow":
            res.json({
                "status":"error",
                "message":"Overflow"
            })
            break;
            default:
                input=true
                break;
    }   

    if(input){
        res.json({
            "status":"success",
            "message":"The sum of given two numbers",
            "sum":sum
        })
    }
})

app.post("/sub",(req,res)=>{
    let sub=Number(req.body.num1)-Number(req.body.num2);
    let input=checkError(req.body.num1,req.body.num2,sub);
    switch(input){
        case"inputError":
            res.json({
                "status":"error",
                "message":"Invalid data types"
            })
            break;
        case "Underflow":
            res.json({
                "status":"error",
                "message":"UnderFlow"
            })
            break;
        case "Overflow":
            res.json({
                "status":"error",
                "message":"Overflow"
            })
            break;
            default:
                input=true
                break;
    }
    if(input){
        res.json({
            "status":"success",
            "message":"The difference of given two numbers",
            "sum":sub
        })
    }
})

app.post("/mul",(req,res)=>{
    let mul=Number(req.body.num1)*Number(req.body.num2);
    let input=checkError(req.body.num1,req.body.num2,mul);
    switch(input){
        case"inputError":
            res.json({
                "status":"error",
                "message":"Invalid data types"
            })
            break;
        case "Underflow":
            res.json({
                "status":"error",
                "message":"UnderFlow"
            })
            break;
        case "Overflow":
            res.json({
                "status":"error",
                "message":"Overflow"
            })
            break;
            default:
                input=true
                break;
    }
    if(input){
        res.json({
            "status":"success",
            "message":"The product of given numbers",
            "sum":mul
        })
    }
})

app.post("/divide",(req,res)=>{
    let div=Number(req.body.num1)/Number(req.body.num2);
    let input=checkError(req.body.num1,req.body.num2,div,"divide");
    switch(input){
        case"inputError":
            res.json({
                "status":"error",
                "message":"Invalid data types"
            })
            break;
        case "divideBy0Error":
            res.json({
                "status": "error",
                "message": "Cannot divide by zero"
            })
            break;
        case "Underflow":
            res.json({
                "status":"error",
                "message":"UnderFlow"
            })
            break;
        case "Overflow":
            res.json({
                "status":"error",
                "message":"Overflow"
            })
            break;
            default:
                input=true
                break;
    }
    if(input){
        res.json({
            "status":"success",
            "message":"The division of given numbers",
            "sum":div
        })
    }
})

app.post('/*',(req,res)=>{
    
    res.json({
        "status":"failure"
    })
    
})





app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;