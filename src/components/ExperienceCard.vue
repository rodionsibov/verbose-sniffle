<template>
  <div>
    <img
      class="hover:opacity-90 mt-4"
      :src="`/images/${experience.image}`"
      :alt="experience.name"
    />
  </div>
  <div class="p-2 bg-gray-800 text-zinc-50 text-center text-sm tracking-wide">
    {{ experience.name }}
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