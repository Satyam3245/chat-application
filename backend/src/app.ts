import express from 'express'
const app = express();
app.use(express.json())


app.get('/',(_, res)=>{
    res.status(200).json({
    success: true,
    message: "Server Healthy",
  });

})
export default app;