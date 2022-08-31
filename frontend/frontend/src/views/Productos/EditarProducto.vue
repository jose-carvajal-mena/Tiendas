<template>
  <div class="container">
    <h1>editar</h1>
    <div >
        
        <input v-model="form.nombre" type="text">
        <input v-model="form.precio" type="text">
        <textarea v-model="form.descripcion" style="width:200px; height:100px;"></textarea>
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
                nombre:this.datos[1],
                precio:this.datos[2],
                descripcion:this.datos[3]
            }
        }
    },
    methods:{
        actualizar(){
            axios.put('/actualiza-producto',this.form).then(res=>{
                console.log(res.data)
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>