const express = require('express')
const app = express()
const port = 3000;
const mongoose = require("mongoose");


const dbConnect = async () => {
  try {
    

      mongoose.set('strictQuery', true);
      console.log('Connected s')
      const conn = await mongoose.connect("mongodb+srv://abderrazzak:puB54GRjeTY5ClUT@cluster0.wsylvuz.mongodb.net/?retryWrites=true&w=majority")
      console.log('Connected succefully ')
  } catch (error) {
      console.log(error);
  }
}

dbConnect()


