<script setup>
import { RouterLink, RouterView } from 'vue-router'

// Importação bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './complementos/estilos.css';

// Importar componentes
import Navegacao from './componentes/BarraNavegacao.vue';

</script>

<template>
    
<!-- NavBar -->
 <Navegacao/>
  
<!-- Comando para visualizar conteudo das view -->
  <RouterView />
</template>

<style scoped>

</style>
