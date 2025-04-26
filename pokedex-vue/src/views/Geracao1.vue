<script setup>
import { onMounted, ref } from "vue";

// Vetores
let vetor = ref([]);

onMounted(async () => {

  for (let indice = 1; indice <= 151; indice++) {
    let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
    let pokemon = await requisicao.json();
    vetor.value.push(pokemon);
  }
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

  <main class="container ">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="v in vetor">
        <div class="card">
          <img :src="v.sprites.other.home.front_default" alt="Imagem do pokemon">
          <p>{{ v.name }}</p>
        </div>
      </div>
    </div> 
  </main>

</template>

<!-- https://pokeapi.co/api/v2/pokemon/1 -->
