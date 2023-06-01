const express = require('express');
const mycursor = require('./Config/connect');
const cors = require("cors");

const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json())

// Route to get all posts 
app.get("/api/get", (req,res)=>{
    mycursor.query("SELECT * FROM user_reg", (err,result)=>{
            if(err) {
                console.log(err)
            } 
        res.send(result)
        }
    )
})

// Route for creating the post

    app.post("/api/create", (req,res) => {

        const Name = req.body.name;
        const Username = req.body.username;
        const Password = req.body.password;
        const Email = req.body.email;
        const Mono = req.body.mono;
        
        console.log(Name,Username,Password,Email,Mono);
    
        const sqlinsert = "insert into user_reg (name, username, password, email, mono) values(?,?,?,?,?)";
    
        mycursor.query(sqlinsert,[Name,Username,Password,Email,Mono], (error ,result) =>{

            if(error) {
                console.log(error)
            } 
            console.log(result)
            res.end(JSON.stringify(result))
            res.send("Data Inserted Succefully");
        })    
    })


// Route for Send Adevertising Request
app.post("/api/adreq", (req,res) => {

    const UName = req.body.uname;
    const ADFile = req.body.adfile;
    const BRNDName = req.body.brandname;
    const Email = req.body.email;
    
    console.log(UName,ADFile,BRNDName);

    const sqlinsert = "insert into advertising (brand_name, image, img_by, email) values(?,?,?,?)";

    mycursor.query(sqlinsert,[UName,ADFile,BRNDName,Email], (error ,result) =>{

        if(error) {
            console.log(error)
        } 
        console.log(result)
        res.end(JSON.stringify(result))
        res.send("Data Inserted Succefully");
    })    
})

// Route to get all  Adevertising Request
app.get("/api/getadvertising", (req,res)=>{
    mycursor.query("SELECT * FROM advertising", (err,result)=>{
            if(err) {
                console.log(err)
            } 
        res.send(result)
        }
    )
})



// Route to get all User Data  
app.get("/api/get", (req,res)=>{
    mycursor.query("SELECT * FROM user_reg", (err,result)=>{
            if(err) {
                console.log(err)
            } 
        res.send(result)
        }
    )
})

// Route to delete a User

app.delete('/api/deleteuser/:id',(req,res)=>{
    const { id } = req.params;
    console.log(id);

mycursor.query("DELETE FROM user_reg WHERE id=?", id, (err,result)=>{
    if(err) {
        console.log(err)
        } 
        console.log(result)
        res.end(JSON.stringify(result))
        res.send("Data Delted Succefully");
    })
})
    

// Route for give review

app.post("/api/review", (req,res) => {

    const Name = req.body.name;
    const Description = req.body.description;

    
    console.log(Name,Description);

    const sqlinsert = "insert into review (name, description) values(?,?)";

    mycursor.query(sqlinsert,[Name,Description], (error ,result) =>{

        if(error) {
            console.log(error)
        } 
        console.log(result)
        res.end(JSON.stringify(result))
        res.send("Data Inserted Succefully");
    })    
})

// Route to get all  getreview
app.get("/api/getreview", (req,res)=>{
    mycursor.query("SELECT * FROM  review", (err,result)=>{
            if(err) {
                console.log(err)
            } 
        res.send(result)
        }
    )
})


// Route to Login  
app.post("/api/login", (req,res)=>{

    const ADMINName = req.body.adminname;
    const ADMINPassword = req.body.adminpassword;   
    
    console.log(ADMINName,ADMINPassword);

    mycursor.query("SELECT username,password FROM user_reg where username=? and password=?	",[ADMINName,ADMINPassword], (err,result)=>{
            if(result) {
                res.send(result)
                res.end(JSON.stringify(result))
                
                } 
                else{
               // console.log(err)
                res.send(err)
                res.end(JSON.stringify(err))
            }
        }
    )
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
