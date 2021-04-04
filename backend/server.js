import express from 'express';
import data from './data.js';
const app = express();


app.get('/api/menu/:id',(req,res) =>{
    const menu = data.menus.find(x => x._id === req.params.id);
    if(menu){
        res.send(menu);
    }else{
        res.status(404).send({message: 'Product Not Found'})
    }
})

app.get('/api/menu',(req, res)=>{
    res.send(data.menus);
})

const port= process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`SERVER IS READY SERVE at PORT ${port}`);
});


app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`);
})