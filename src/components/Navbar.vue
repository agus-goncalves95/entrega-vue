<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Mi app de comida logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/productos">Productos</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/carrito">Carrito</router-link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link"><router-link to="/contacto">Contacto</router-link></a>
        </li>
      </ul> -->
<v-spacer></v-spacer>
<div>
  <router-link to="/" class="pr-4">Home</router-link>
  <router-link to="/admin">Admin</router-link>
</div>
    
<v-spacer></v-spacer>

    <div class="btn-login">
    <div class="pr-1">
    <v-btn depressed color="red"><router-link to="/login" >Login</router-link></v-btn>  
    </div>
    <div class="pr-1">
    <v-btn depressed color="grey"><router-link to="/register">Register</router-link></v-btn>
    </div>
    </div>

    </div> 
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-login{
   display: flex;
   flex-direction: row;
   justify-content: center;
}
a{
  text-decoration: none;
  color: black!important;
  /* font-size: 18px; */
}
a:hover{
  color: red  !important;
}

span a {
  color: white !important;
}
span a:hover{
  color: black !important;
}
</style>