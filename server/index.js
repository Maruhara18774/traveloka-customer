const express = require('express')
const app = express()
require('dotenv').config({ path: '../config/server.env' });
const mssql = require('mssql');
const PORT = process.env.PORT;
const cors = require('cors');
const dbContext = require('./src/DBContext')();
const bodyParse = require('body-parser')

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));
//app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT,()=>{
    console.log("Server is running at "+PORT);
})

app.post('/signin',(req,res)=>{

    const { username, password } = req.body;
    const checkUser = dbContext.TAIKHOAN.findOne({
        attributes: ['ID_TAIKHOAN'],
        where: {
            TEN_TAIKHOAN: username,
            MATKHAU: password
        }
    }).then((result, err) => {
        if (result) {
            res.send(result);
        }
        else {
            res.send("Không có tài khoản này");
        }
    });

})
app.get('/listApartment',(req,res)=>{
    const getAll = dbContext.NHA.findAll().then(
        (result,err)=>{
            res.send(result);
        }
    );
    
})
app.post('/detailApartment',(req,res)=>{

    const { id } = req.body;
    const checkUser = dbContext.NHA.findOne({
        where: {
            ID_NHA: id
        }
    }).then((result, err) => {
        if (result) {
            res.send(result);
        }
        else {
            res.send("Không có nhà này");
        }
    });

})

