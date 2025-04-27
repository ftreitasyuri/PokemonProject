<script setup>
import { onMounted, ref } from "vue";

// Vetores
let vetor = ref([]);

let carregamento = ref(true);

onMounted(async () => {

  for (let indice = 1; indice <= 151; indice++) {
    let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
    let pokemon = await requisicao.json();
    vetor.value.push(pokemon);
  }

  carregamento.value = false;

});
</script>

<template>
  <!-- <h1>Primeira Geração</h1> -->
<!-- Debug -->
  <!-- <ul>
    <li v-for="v in vetor">
      {{ v.name }}
    </li>
  </ul> -->

  <div class="carregamento" v-if="carregamento">
    <img src="../complementos/carregamento.gif" alt="">
  </div>

  <main class="container " v-if="!carregamento">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="v in vetor">
        <div class="card" :class="v.types[0].type.name">
          <img :src="v.sprites.other.home.front_default" alt="Imagem do pokemon">
          <p>Name: {{ v.name }}</p>
          <p>First Type: {{ v.types[0].type.name }}</p>
        </div>
      </div>
    </div> 
  </main>

</template>

<!-- https://pokeapi.co/api/v2/pokemon/1 -->
