<script setup>
import { onMounted, ref } from "vue";

// Vetores
let vetor = ref([]);

let carregamento = ref(true);

// Variável para armazenar o termo da filtragem
let termoFiltro = ref('');

onMounted(async () => {

  for (let indice = 152; indice <= 251; indice++) {
    let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
    let pokemon = await requisicao.json();
    vetor.value.push(pokemon);
  }

  carregamento.value = false;

});

// Funções
function filtrar(){
  return vetor.value.filter(obj => obj.name.toLowerCase().includes(termoFiltro.value.toLowerCase()));
}


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

     <!-- {{ termoFiltro }} -->
    <!-- Filtro -->
    <div class="row">
      <div class="col-12">
        <input type="text" v-model="termoFiltro" class="text form-control pesquisa" placeholder="Qual pokemon você está procurando">
        <p v-if="filtrar().length == 0">Não foi encontrado nenhum pokemon</p>
        <p v-else-if="filtrar().length == 1">Foi encontrado apenas 1 pokemon</p>
        <p v-else>Foram encontrados {{ filtrar().length }} pokemons</p>
      </div>
    </div>

    <!-- Listagem -->

    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="v in filtrar()">
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
