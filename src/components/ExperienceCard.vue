<template>
  <div class="font-bold uppercase my-3">
    {{ experience.name }}
  </div>
  <div>
    <img class="mb-3" :src="`/images/${experience.image}`" :alt="experience.name" />
  </div>
  <div class="text-sm">
    {{ experience.description }}
  </div>
</template>

<script>
import sourceData from "./../data.json";

export default {
  props: {
    experience: { type: Object, required: true },
  },
};
</script>

<style>
</style>