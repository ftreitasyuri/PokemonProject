<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>



      <nav>
        <RouterLink to="/">Primeira Geracação</RouterLink>
        |
        <RouterLink to="/geracao2">Segunda Geração</RouterLink>
        |
        <RouterLink to="/geracao3">Terceira Geração</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>

</style>
