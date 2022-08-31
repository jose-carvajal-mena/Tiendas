const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.post('/',(request, response) =>{
    const usuario = request.body.usuario;
    const clave = request.body.clave;

    mysqlConnection.query('SELECT * FROM usuarios WHERE usuario=? AND clave=?',[usuario,clave],(err, rows, fields)=>{
        if(!err){
            if(rows.length === 0){
                response.json({Mensaje:'Usuario o clave incorrectos.'})
            }else if(rows.length > 0 && rows[0].usuario === usuario && rows[0].clave === clave){
                response.json({Mensaje:'Usuario logeado'})
            }
        }else{
            console.log(err);
        }
    });
});


router.get('/',(request, response) =>{
    mysqlConnection.query('SELECT * FROM usuarios',(err, rows, fields)=>{
        if(!err){
            response.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/',(req, res) => {
     const rut = req.body.rut;
     const nombre = req.body.nombre; 
     const apellido = req.body.apellido; 
     const correo  = req.body.correo; 
     const usuario = req.body.usuario; 
     const clave =  req.body.clave; 
     const tipo   = req.body.tipo;
    mysqlConnection.query(
        'INSERT INTO usuarios(rut,nombre,apellido,correo,usuario,clave,tipo) VALUES(?,?,?,?,?,?,?)',
        [rut,nombre,apellido,correo,usuario,clave,tipo],(err, rows, fields)=>{
        if(!err){
            res.json({Status:'Usuario guardado.'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id',(req, res)=>{
    const { id } = req.params
    mysqlConnection.query('DELETE FROM usuarios WHERE id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'eliminado'})
        }else{
            console.log(err)
        }
    })
});

router.put('/',(req, res)=>{
    const datos = req.body;
    console.log(datos)
    
    const rut = req.body.rut;
    const nombre = req.body.nombre; 
    const apellido = req.body.apellido; 
    const correo  = req.body.correo; 
    const usuario = req.body.usuario; 
    const clave =  req.body.clave; 
    const tipo   = req.body.tipo;
    const id = parseInt(req.body.id);

    mysqlConnection.query('UPDATE usuarios SET rut=?,nombre=?,apellido=?,correo=?,usuario=?,clave=?,tipo=? WHERE id = ?',
    [rut,nombre,apellido,correo,usuario,clave,tipo,id],(err,rows,fields)=>{
        if(!err){
            res.json({Mensaje:'actualizado'})
        }else{
            console.log(err)
        }
    })
});

module.exports = router;