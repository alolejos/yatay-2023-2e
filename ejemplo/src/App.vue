<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'
let nombre = 'Curso VUEJS'
const listadoObjetos = ref([{id: 1, nombre: 'Palo', precio: 22}, {id: 2, nombre: 'Bolso', precio: 234}, {id: 3, nombre: 'Pelotas', precio: 3245},])
const usuario = {nombre: "Roberto", apellido: "Rodriguez"}
let numero = ref(0)
let numero1 = ref(0)
let prende = ref(true)
let producto = ref({
  id: 0,
  nombre: '',
  precio: 0
})
console.log(numero.value);
function editar(id){
  alert('El id es el número' + id)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <h1>PAGINA PRINCIPAL</h1>
    <h1>{{ nombre }}</h1>
    <h2>{{ listadoObjetos }}</h2>
    <h2>Nombre</h2><h3>{{ usuario.nombre }}</h3>
    <h2>Apellido</h2><h3>{{ usuario.apellido }}</h3>
    <h1 v-if="prende">ESTA PRENDIDO</h1>
    <h1 v-else="prende">ESTA APAGADO</h1>

    <button @click="listadoObjetos.push(producto)">Apagar</button>
    <div class="table">
      <tr v-for="producto in listadoObjetos">
        <td >{{ producto.nombre }}</td> 
        <td v-show="producto.precio < 1000">{{ producto.precio }}</td>
        <td><button @click="editar(producto.id)">editar</button></td>
        <td><button>borrar</button></td>
      </tr>
    </div>
    <label for="nombre">Ingrese Nombre:</label>
    <input v-model="producto.nombre">
    <input type="number" v-model="producto.precio">
    <br/>
    <hr>
</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
