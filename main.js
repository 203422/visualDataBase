if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();
var con;

function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
}

function login(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(user=='Alan' && password=='1234'){
        alert ("Datos correctos");   
        if(process.env.host != null || process.env.host != ''){
            location.href="./tabla.html";
        }else{
            location.href="./conexion.html";
        }
    }
    else{
        alert ("Datos incorrectos");   
    }
}

function addData() {

    con = require('./connect');
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ( "${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Query exitoso", rows);
    });

    var datos="<tr><td>"+nombre+"</td><td>"+ap_pat+"</td><td>"+ap_mat+"</td><td>"+edad+"</td></tr>";
    var b = document.createElement("TR");
   	b.innerHTML=datos;
    document.getElementById("tabla").appendChild(b);
    con.end(function () {
        // Conexión Finalizada 
    });
}