<template>
  <div class="container-fluid mt-4">

    <div class="row">
        <div class="col-2">
            <Menu/>
        </div>
        <div class="col">
            <div class="card">
        <div class="card-header">
            <h3>Presupuesto </h3>
            <i class="fa-solid fa-users float-right"></i>               
        </div>
        <div class="card-body">
          <table class="table table-bordered ">
                    <thead class="text-center">
                        
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                    </thead>
                    <tbody v-for="producto in productos" :key="producto.id">
                        <tr>
                            <td>{{producto.nombre}}</td>
                            <td>{{producto.precio}}</td>
                            <td>{{producto.descripcion}}</td>
                            <td class="d-flex justify-content-center">
          <button class="btn btn-primary" @click="addProduct(producto.nombre,producto.precio,producto.descripcion)">Agregar</button> 
                                   </td>
                        </tr>
                    </tbody>
                 </table>
 
  <div class="form-group">
    <label for="exampleFormControlSelect2">Lista de Productos</label><br>
  <textarea v-model="cotizar" style="width: 50%; resize:none;">
  </textarea>
  
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Sub Total</label><br>
  <input type="text" disabled v-model="subtotal">
  
  </div>
  
        </div>
    </div>
        </div>
    </div>
    
    

  </div>
</template>

<script>
import axios from 'axios'
import Menu from '@/components/Menu.vue'
export default {
components:{
    Menu
},

data (){
    return{
        productos:[],
        cotizar:'',
        subtotal:0
        
    }
},
methods:{
    getProductos(){
        axios.get('/productos').then(res=>{
            this.productos = res.data
            
        })
    },
   addProduct(nombre,precio,descripcion){
    this.cotizar += nombre+' '+descripcion+' '+precio+'\n'
    this.subtotal += parseInt(precio)
   }

},
mounted(){
    this.getProductos()
}
}
</script>

<style>
body{
  background-color: #eff0f2;
}
</style>