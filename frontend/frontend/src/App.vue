<template>
<div id="app">
 

 <div class="row">
  <div class="col">
     <router-view>
      
     </router-view>
  </div>
 </div>
  </div>
</template>
<script>
  document.title = 'BuyList';

export default{

}

</script>
<style scoped>
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
