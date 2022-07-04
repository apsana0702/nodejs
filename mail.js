var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:'sk.aps.0702@gmail.com',
        pass:'Apsana@123'
    }
});
var options = {
    from : 'sk.aps.0702@gmail.com',
    to : 'apsanashaik0101@gmail.com',
    subject : 'testing mail',
    text : 'my first trail' 
};
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('email is sent'+info.response);
    }
});