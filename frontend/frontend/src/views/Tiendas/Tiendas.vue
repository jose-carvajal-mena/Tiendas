<template>
  <div class="container-fluid mt-4">

    <div class="row">
        <div class="col-2">
            <Menu/>
        </div>
        <div class="col">
            <div class="card">
            <div class="card-header">
                <h3>Tiendas </h3>
                <router-link to="/nueva-tienda"><button class="btn btn-success float-right"><i class="fas fa-plus"></i></button></router-link>
                                       
            </div>
            <div class="card-body">
                <table class="table table-bordered ">
                    <thead class="text-center">
                        
                        <th>Nombre</th>
                        <th>Sucursal</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Region</th>
                    </thead>
                    <tbody v-for="tienda in tiendas" :key="tienda.id">
                        <tr>
                            <td>{{tienda.nombre}}</td>
                            <td>{{tienda.sucursal}}</td>
                            <td>{{tienda.direccion}}</td>
                            <td>{{tienda.ciudad}}</td>
                            <td>{{tienda.region}}</td>
                            <td class="d-flex justify-content-center">
                                <router-link :to="{name:'EditarTienda',params:{datos:[tienda.id,tienda.nombre,tienda.sucursal,tienda.direccion,tienda.ciudad,tienda.region]}}" class="btn btn-info mx-1"><i class="fas fa-pen"></i></router-link>
                                <button @click="eliminar(tienda.id)" class="btn btn-danger mx-1"><i class="fas fa-trash-alt"></i></button>
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
        tiendas:[],
        form:{
            nombre:'',
            sucursal:'',
            direccion:'',
            ciudad:'',
            region:''
        }
    }
},
methods:{
    getTiendas(){
        axios.get('/tiendas').then(res=>{
            this.tiendas = res.data
            
        })
    },
   async save(){
        const datosTiendas  = await axios.post('/nueva-tienda',{form: this.form}).then(res=>{
            console.log(res.data)
        });
        
        this.getTiendas();
    },
    eliminar(id){
        axios.delete('/eliminar-tienda/'+id).then(res=>{
            console.log(res.data)
            this.getTiendas();
        })
    }

},
mounted(){
    this.getTiendas();
}
}
</script>

<style>
body{
  background-color: #eff0f2;
}
</style>