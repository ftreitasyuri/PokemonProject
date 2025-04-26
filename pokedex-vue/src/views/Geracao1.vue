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
  <h1>Primeira Geração</h1>

  <ul>
    <li v-for="v in vetor">
      {{ v.name }}
    </li>
  </ul>

</template>

<!-- https://pokeapi.co/api/v2/pokemon/1 -->
