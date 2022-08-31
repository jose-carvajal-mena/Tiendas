<template>
  <div class="container">
    <h1>editar</h1>
    <div >
        <input v-model="form.rut" type="text">
        <input v-model="form.nombre" type="text">
        <input v-model="form.apellido" type="text">
        <input v-model="form.correo" type="text">
        <input v-model="form.usuario" type="text">
        <input v-model="form.clave" type="text">
    </div>
    <button @click="actualizar">Guardar</button>
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
                rut:this.datos[1],
                nombre:this.datos[2],
                apellido:this.datos[3],
                correo:this.datos[4],
                usuario:this.datos[5],
                clave:this.datos[6],
                tipo:this.datos[7]
            }
        }
    },
    methods:{
        actualizar(){
            axios.put('/',this.form).then(res=>{
                alert(res.data.Mensaje)
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>