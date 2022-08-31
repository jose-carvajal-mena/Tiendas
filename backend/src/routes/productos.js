const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Listar Productos
router.get('/productos',(request, response) =>{
    mysqlConnection.query('SELECT * FROM producto',(err, rows, fields)=>{
        if(!err){
            response.json(rows);
        }else{
            console.log(err);
        }
    });
});


//Nuevo Producto
router.post('/nuevo-producto',(req, res) => {
     const nombre = req.body.nombre;
     const precio = parseInt(req.body.precio); 
     const descripcion = req.body.descripcion; 
    mysqlConnection.query(
        'INSERT INTO producto(nombre,precio,descripcion) VALUES(?,?,?)',
        [nombre,precio,descripcion],(err, rows, fields)=>{
        if(!err){
            res.json({Status:'Producto guardado.'});
        }else{
            console.log(err);
        }
    });
});

//Eliminar Productos
router.delete('/eliminar-producto/:id',(req, res)=>{
    const { id } = req.params
    mysqlConnection.query('DELETE FROM producto WHERE id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'producto eliminado'})
        }else{
            console.log(err)
        }
    })
});

//Actualizar Productos
router.put('/actualiza-producto',(req, res)=>{
  
    const nombre = req.body.nombre; 
    const precio = parseInt(req.body.precio); 
    const descripcion  = req.body.descripcion; 
    const id = parseInt(req.body.id);

    mysqlConnection.query('UPDATE producto SET nombre=?,precio=?,descripcion=? WHERE id = ?',
    [nombre,precio, descripcion,id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Producto actualizado'})
        }else{
            console.log(err)
        }
    })
});

module.exports = router;