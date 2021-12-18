<template>
  <h2>Experience show</h2>
  <p></p>
</template>

<script>
import sourceData from "./../data.json";

export default {
  props: {
    id: { type: Number, required: true },
  },
  
  computed: {
      dest() {
          return sourceData.destinations.find(destination => destination.id === this.id)
      }
  }
};
</script>

<style>
</style>