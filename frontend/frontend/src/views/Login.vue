<template>

  <div class="container-fluid ">
<div class="card w-50 m-auto">
  <div class="card-header">
    <h3>Login</h3>
  </div>
  <div class="card-body">

<div class="form-group ">
    <label for="usuario">USUARIO</label>
    <input v-model="form.usuario" type="text" class="form-control" placeholder="usuario">
  </div>
  <div class="form-group">
    <label for="clave">CLAVE</label>
    <input  v-model="form.clave" type="password" class="form-control" id="clave" placeholder="clave">
  </div>
  <div class="form-check">
     <router-link to="/registrar">Registrar</router-link>
  </div>
  

  </div>
  <div class="card-footer">
<button class="btn btn-primary" @click="ingresar">Entrar</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

data(){
  return{
    form:{
      usuario:'',
      clave:''
    }
  }
},
methods:{
  ingresar(){
    axios.post('/',this.form).then(res=>{
      window.location.href = '/usuarios'
    });
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
</style>
