<template>
  <div class="container mt-4">
    <div class="card">
        <div class="card-header">
            <h3>Registro de Tienda</h3>
        </div>
        <div class="card-body">
          
          <div class="row">
            <div class="col mb-3">
                <label for="nombre" class="form-label">NOMBRE</label>
                <input v-model="form.nombre" type="text" class="form-control" id="nombre" >
            </div>
            <div class="col mb-3">
                <label for="sucursal" class="form-label">Sucursal</label>
                <input v-model="form.sucursal" type="text" class="form-control" id="sucursal" >
            </div>
          </div>
          <div class="row">
             <div class="col mb-3">
                <label for="direccion" class="form-label">DIRECCION</label>
                <input v-model="form.direccion" type="text" class="form-control" id="direccion" >
            </div>
             <div class="col mb-3">
                <label for="ciudad" class="form-label">CIUDAD</label>
                <input v-model="form.ciudad" type="text" class="form-control" id="ciudad" >
            </div>
             <div class="col mb-3">
                <label for="region" class="form-label">REGION</label>
                <input v-model="form.region" type="text" class="form-control" id="region" >
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
            sucursal:'',
            direccion:'',
            ciudad:'',
            region:''
        }
  }
},
methods:{
   save(){
        axios.post('/nueva-tienda',this.form).then(res=>{
            //console.log(res.data)
            this.$router.push('/usuarios')
            
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