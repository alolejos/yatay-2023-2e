<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { ref } from 'vue';

const array = ['manzana', 'banana', 'mandarina']

function filtrar(){
  // tomar el array... aplicarle el filtro en un nuevo nuevoArray y ese nuevoArray mostrarlo en la pantalla

}

let direccion = 'Av. Santa Fe 2121'
let color = ref('blue')
let activar = ref(false)

// v-if, v-else, v-show, v-for, v-bind, v-on, v-model

function cambiarColor(){
  if(color.value == 'blue'){
    color.value = 'green'
  }else{
    color.value = 'blue'
  }
}
</script>

<template>

    <h1>Etiqueta h1</h1>
    <h1 :class="color">{{ direccion }}</h1>
    <h1 :class="color">{{ direccion }}</h1>
    <br>
    <button @click="cambiarColor">Cambiar</button>
    {{ color }}
    
    <input type="text"  v-model="color">
</template>

<style scoped>
header {
  line-height: 1.5;
}

.verde{
  color: green;
}
.azul{
  color: blue
}

.red{
  color: red
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
