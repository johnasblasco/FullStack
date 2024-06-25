const express = require('express')
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')


const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://johnasblasco:XJqJKdAYkUHtvMBM@cluster0.bxlnnpb.mongodb.net/mern60minutes?retryWrites=true&w=majority&appName=Cluster0");

app.get("/getUsers",(req, res)=>{  
      
      // then / promises
      UserModel.find({})
      .then(result => {
            res.json(result);
      })
      .catch(err => {
            res.json(err);
      });

})

app.post("/createUser", async (req,res)=>{
      const user = req.body   
      const newUser = new UserModel(user);
      await newUser.save(); 


      res.json(user)

})

app.listen(3001, ()=>{
      console.log(`listening from the port 3001`)
})
