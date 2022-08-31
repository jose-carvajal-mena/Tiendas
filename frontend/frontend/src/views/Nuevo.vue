<template>
  <div class="container mt-4">
    <div class="card">
        <div class="card-header">
            <h3>Registro de Usuario</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col mb-3">
                <label for="rut" class="form-label">R.U.N.</label>
                <input v-model="form.rut" type="text" class="form-control" id="rut" placeholder="11.111.111-1">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
                <label for="nombre" class="form-label">NOMBRE</label>
                <input v-model="form.nombre" type="text" class="form-control" id="nombre" placeholder="Jhon...">
            </div>
            <div class="col mb-3">
                <label for="apellido" class="form-label">APELLIDO</label>
                <input v-model="form.apellido" type="text" class="form-control" id="apellido" placeholder="Smith...">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
                <label for="correo" class="form-label">CORREO</label>
                <input v-model="form.correo" type="email" class="form-control" id="correo" placeholder="jsmith@example.com...">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
                <label for="usuario" class="form-label">USUARIO</label>
                <input v-model="form.usuario" type="text" class="form-control" id="usuario" placeholder="jsmith..">
            </div>
            <div class="col mb-3">
                <label for="clave" class="form-label">CLAVE</label>
                <input v-model="form.clave" type="password" class="form-control" id="clave" placeholder="12345">
            </div>
            </div>
        </div>
        <div class="card-footer">
          <button @click="save" class="btn btn-primary float-right">Guardar</button>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
data(){
  return{
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
   save(){
        axios.post('/',this.form).then(res=>{
            //console.log(res.data)
            
        });
        this.resetForm()
    },
    resetForm(){
       for(let element in this.form){
        this.form[element] = ''
       }
    }
}
}
</script>

<style>

</style>