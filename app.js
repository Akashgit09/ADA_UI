const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/chatbot", async (req, res) => {
    const { message } = req.body;

    try {
        // Here you would implement your chatbot logic.
        // For demonstration, a simple response is sent back.
        const response = handleMessage(message);
        res.json({ reply: response });
    } catch (e) {
        res.status(500).json("chatbot error");
    }
});

function handleMessage(message) {
    // This is a placeholder for your chatbot logic.
    // For now, it just echoes the message.
    return `You said: ${message}`;
}

app.listen(8000,()=>{
    console.log("port connected");
})

