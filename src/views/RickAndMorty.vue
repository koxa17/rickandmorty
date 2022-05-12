<template>
  <div class="home">
     <h1>Rick And Morty</h1>
    <RickAndMortyCharacters></RickAndMortyCharacters>
  </div>
</template>

<script>

import RickAndMortyCharacters from "./RickAndMortyCharacters";
export default {
  name: 'RickAndMorty',
  components: {
    RickAndMortyCharacters
  },
  created() {
    this.$store.dispatch('getApiCharacter', 1)
  }
}
</script>
