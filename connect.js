const mysql = require('mysql2'); 
require('dotenv').config();

const host = process.env.host //document.getElementById('host').value;
const user = process.env.user //document.getElementById('user').value;
const password = process.env.password //document.getElementById('password').value;
const database = process.env.database //document.getElementById('database').value;
const port = process.env.port //document.getElementById('port').value;*/

/*const host = document.getElementById('host').value;
const user =  document.getElementById('user').value;
const password = document.getElementById('password').value;
const database = document.getElementById('database').value;
const port =  document.getElementById('port').value;*/

const connection = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database,
    port:port
});

connection.connect(function(err){
    if(err){
        alert(err);
        console.log(err.code);
        console.log(err.fatal);
        console.log('Error');
    }else{
        //document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port}`;
        setTimeout(function(){location.href='./tabla.html'}, 4000); 
    }
})

module.exports = connection;
