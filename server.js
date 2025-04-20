const express=require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose')
//route files
const brandRoutes = require('./routes/brand')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const customerRoutes = require('./routes/customer')
const orderRoutes = require('./routes/order')


dotenv.config({path:'./config/config.env'})
const app=express()
app.use(express.json())//for converting data in the body into JSON 
const PORT = process.env.PORT||5000

//configuring routes
app.use('/api/brands',brandRoutes)
app.use('/api/categories',categoryRoutes)
app.use('/api/products',productRoutes)
app.use('/api/customers',customerRoutes)
app.use('/api/orders',orderRoutes)

const DB_CONN_STRING = process.env.DATABASE_URL
mongoose.connect(DB_CONN_STRING)
const database = mongoose.connection
database.on('error', (error)=>{
console.log("Database connection error",error)
})
database.once('connected',()=>{
    console.log("Database connected succesfully")
})
app.listen(PORT,()=>{
    console.log("Server is listening on PORT:",PORT)
})

