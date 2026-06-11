import express from 'express'
const app = express();
const port = 3000;
app.use(express.json())


app.get('/',(_, res)=>{
    res.status(200).json({
    success: true,
    message: "Server Healthy",
  });

})





app.listen(port,()=>{
    console.log('The Server is Listing!')
})

export default app;