<template>
  <div class="container-fluid mt-4">

    <div class="row">
        <div class="col-2">
            <Menu/>
        </div>
        <div class="col">
            <div class="card">
        <div class="card-header">
            <h3>Usuarios </h3>
            <i class="fa-solid fa-users float-right"></i>               
        </div>
        <div class="card-body">
            <table class="table table-bordered ">
            <thead class="text-center">
                <th>Rut</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Usuario</th>
                <th>Tipo Usuario</th>
                <th >Accion</th>
            </thead>
            <tbody v-for="usuario in usuarios" :key="usuario.id">
                <tr>
                    <td>{{usuario.rut}}</td>
                    <td>{{usuario.nombre}}</td>
                    <td>{{usuario.apellido}}</td>
                    <td>{{usuario.correo}}</td>
                    <td>{{usuario.usuario}}</td>
                    <td>{{usuario.tipo}}</td>
                    <td class="d-flex justify-content-center">
                        <router-link :to="{name:'Editar',params:{datos:[usuario.id,usuario.rut,usuario.nombre,usuario.apellido,usuario.correo,usuario.usuario,usuario.clave,usuario.tipo]}}" class="btn btn-info mx-1"><i class="fas fa-pen"></i></router-link>
                        <button @click="eliminar(usuario.id)" class="btn btn-danger mx-1"><i class="fas fa-trash-alt"></i></button>
                        <router-link to="/nuevo"><button class="btn btn-success float-right"><i class="fas fa-plus"></i></button></router-link>
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
        usuarios:[],
        form:{
            rut:'',
            nombre:'',
            apellido:'',
            correo:'',
            usuario:'',
            clave:'',
            tipo:0
        }
    }
},
methods:{
    getUsurios(){
        axios.get('/').then(res=>{
            this.usuarios = res.data
            if(this.usuarios.tipo === 1){
                
            }
        })
    },
   async save(){
        const datosUsuarios  = await axios.post('/',{form: this.form}).then(res=>{
            console.log(res.data)
        });
        this.field_name = ''
        this.getUsurios()
    },
    eliminar(id){
        axios.delete('/'+id).then(res=>{
            console.log(res.data)
            this.getUsurios();
        })
    }

},
mounted(){
    this.getUsurios()
}
}
</script>

<style>
body{
  background-color: #eff0f2;
}
</style>