const express   =   require('express');
const jwt       =   require('jsonwebtoken');
var cors        =   require('cors');
const app       =   express();
var bodyParser  =   require('body-parser');
var config      =   require('./config/config');

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use("/email/images",express.static(__dirname + '\\assets\\images\\comm_mail'));

//var email       =   require('./model/comm_email');
var users       =   require('./model/users');

var authentication  =   require('./controller/authentication');
var foodItems       =   require('./controller/foodItems');
var sales           =   require('./controller/sales');

app.use('/authentication',authentication);
app.use('/foodItems',foodItems);
app.use('/sales',sales);

app.post('/api/login',(req,res)=>{
    var invalidLogin={
        message:"Invalid Credentials"
    };

    if (typeof req.body.email == "undefined" || req.body.password == "undefined") {
        res.json(invalidLogin);
    } else {
        var data={
            email:req.body.email,
            password:req.body.password
        };
        response = users.authentication(data,function(err,data){ 
            res.setHeader('Content-Type', 'application/json');
            const thisUser = data[0];
            if (data.length) {
                jwt.sign({userData:thisUser},config.jwtPrivateKey,{expiresIn:60*60},(err,token)=>{
                    /* console.log(jwt.decode(token).userData)
                    {
                        id: 63,
                        firstName: 'Lohit',
                        lastName: 'P',
                        contact: '9875647382',
                        email: 'double@gmail.com',
                        password: 'aviator'
                    } */
                    res.json({token});
                });
            } else {
                res.json(invalidLogin);
            }
        });
    }
    
});


function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader == "undefined"){
        res.sendStatus(403);
    }else{
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
}

app.listen(4000,()=>{
    console.log("listening on port 4000");
});