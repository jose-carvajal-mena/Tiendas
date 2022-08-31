<template>
  <div class="container mt-4">
    <div class="card">
        <div class="card-header">
            <h3>Registro de Producto</h3>
        </div>
        <div class="card-body">
          
          <div class="row">
            <div class="col mb-3">
                <label for="nombre" class="form-label">NOMBRE</label>
                <input v-model="form.nombre" type="text" class="form-control" id="nombre" placeholder="Jabon...">
            </div>
            <div class="col mb-3">
                <label for="precio" class="form-label">PRECIO</label>
                <input v-model="form.precio" type="text" class="form-control" id="precio" placeholder="precio...">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
                <label for="descripcion" class="form-label">DESCRIPCION</label>
                <textarea v-model="form.descripcion"  class="form-control" id="descripcion" placeholder="descripcion..."></textarea>
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
            nombre:'',
            precio:'',
            descripcion:'',
        }
  }
},
methods:{
   save(){
        axios.post('/nuevo-producto',this.form).then(res=>{
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