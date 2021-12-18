<template>
  <div class="text-6xl my-10 font-bold text-red-500">
    Top Experiences in {{ id }}
  </div>
</template>

<script>
import sourceData from "./../data.json";

export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
    };
  },
  computed: {
      experiences() {
          return sourceData.destinations.find(destination => destination.id === this.id )
      }
  }
};
</script>

<style>
</style>