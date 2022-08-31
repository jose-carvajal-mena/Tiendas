<template>
  <div class="container-fluid mt-4">

    <div class="row">
        <div class="col-2">
            <Menu/>
        </div>
        <div class="col">
            <div class="card">
            <div class="card-header">
                <h3>Productos </h3>
                <router-link to="/nuevo-producto"><button class="btn btn-success float-right"><i class="fas fa-plus"></i></button></router-link>
                                       
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
                                <router-link :to="{name:'EditarProducto',params:{datos:[producto.id,producto.nombre,producto.precio,producto.descripcion]}}" class="btn btn-info mx-1"><i class="fas fa-pen"></i></router-link>
                                <button @click="eliminar(producto.id)" class="btn btn-danger mx-1"><i class="fas fa-trash-alt"></i></button>
                         </td>
                        </tr>
                    </tbody>
                 </table>
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
        form:{
            nombre:'',
            precio:'',
            descripcion:''
        }
    }
},
methods:{
    getProductos(){
        axios.get('/productos').then(res=>{
            this.productos = res.data
            
        })
    },
   async save(){
        const datosProductos  = await axios.post('/',{form: this.form}).then(res=>{
            console.log(res.data)
        });
        
        this.getProductos();
    },
    eliminar(id){
        axios.delete('/eliminar-producto/'+id).then(res=>{
            console.log(res.data)
            this.getProductos();
        })
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