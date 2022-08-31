const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Listar Productos
router.get('/tiendas',(request, response) =>{
    mysqlConnection.query('SELECT * FROM tiendas',(err, rows, fields)=>{
        if(!err){
            response.json(rows);
        }else{
            console.log(err);
        }
    });
});


//Nuevo Producto
router.post('/nueva-tienda',(req, res) => {
     const nombre = req.body.nombre;
     const sucursal = req.body.sucursal; 
     const direccion = req.body.direccion; 
     const ciudad = req.body.ciudad; 
     const region = req.body.region; 

    mysqlConnection.query(
        'INSERT INTO tiendas(nombre,sucursal,direccion,ciudad,region) VALUES(?,?,?,?,?)',
        [nombre,sucursal,direccion,ciudad,region],(err, rows, fields)=>{
        if(!err){
            res.json({Status:'tienda guardado.'});
        }else{
            console.log(err);
        }
    });
});

//Eliminar Productos
router.delete('/eliminar-tienda/:id',(req, res)=>{
    const { id } = req.params
    mysqlConnection.query('DELETE FROM tiendas WHERE id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'tienda eliminado'})
        }else{
            console.log(err)
        }
    })
});

//Actualizar Productos
router.put('/actualiza-tienda',(req, res)=>{
  
    const nombre = req.body.nombre;
    const sucursal = req.body.sucursal; 
    const direccion = req.body.direccion; 
    const ciudad = req.body.ciudad; 
    const region = req.body.region; 
    const id = parseInt(req.body.id);

    mysqlConnection.query('UPDATE tiendas SET nombre=?,sucursal=?,direccion=?,ciudad=?,region=? WHERE id = ?',
    [nombre,sucursal, direccion,ciudad,region,id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Tienda actualizado'})
        }else{
            console.log(err)
        }
    })
});

module.exports = router;