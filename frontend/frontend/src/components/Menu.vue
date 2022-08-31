<template>

  <div class="container-fluid">
    
        <div class="card text-white bg-dark">
          <div class="card-header text-center">
          </div>
          <div class="card-body">
            <ul>
              <li><button @click="listaUsuarios"><i class="fa-solid fa-user-pen fa-2x" style="margin-left:13px;"></i>Usuarios</button></li>
              <li><button @click="presupuesto"><i class="fas fa-sack-dollar fa-2x"></i>Presupuesto</button></li>
              <li><button @click="tiendas"><i class="fas fa-store fa-2x"></i><br>Tiendas</button></li>
              <li><button @click="productos"><i class="fas fa-store fa-2x"></i><br>Productos</button></li>
            </ul>
          </div>
          <div class="card-footer">Usuario</div>
      </div>
  </div>
 
</template>
<script>
  document.title = 'BuyList';


export default{

methods:{
  listaUsuarios(){
    this.$router.push('/usuarios');
  },
  presupuesto(){
    this.$router.push('/presupuesto');
  },
  tiendas(){
    this.$router.push('/tiendas');
  },
  productos(){
    this.$router.push('/productos');
  }
}
}

</script>
<style scoped>
button{
  background-color:transparent;
  border:0;
  color:white;
  cursor: pointer;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.card{
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  border-radius: 0;
  -webkit-box-shadow: 2px 1px 8px 3px rgba(0,0,0,0.26); 
  box-shadow: 2px 1px 8px 3px rgba(0,0,0,0.26);
}
.card-body{
  font-family: 'Montserrat', sans-serif;
}
.card-footer{
  font-family: 'Montserrat', sans-serif;
}

ul li{
  list-style:none;
  margin-top:20px;
  text-align: center;
}
li{
  
  width: 100px;
}
ul{
   
  padding:0;
}

a{
  color:white;
}


</style>
