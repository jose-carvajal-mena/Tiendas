<template>
  <div class="container">
     <div class="card">
        <div class="card-header">
            <h3>Edicion de Tienda</h3>
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
          <button @click="actualizar" class="btn btn-primary float-right">Guardar</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        datos:{
            type:[]
        }
    },
    data(){
        return{
            form:{
                id:this.datos[0],
                nombre:this.datos[1],
                sucursal:this.datos[2],
                direccion:this.datos[3],
                ciudad:this.datos[4],
                region:this.datos[5]
            }
        }
    },
    methods:{
        actualizar(){
            axios.put('/actualiza-tienda',this.form).then(res=>{
                console.log(res.data)
                this.$router.push('/usuarios')
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>