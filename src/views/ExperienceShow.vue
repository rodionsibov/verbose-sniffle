<template>
  <h2>Experience Show</h2>
  <p>
    {{ description }}
  </p>
</template>

<script>
import sourceData from "./../data.json";

export default {
  props: {
    id: { type: Number, required: true },
  },

  computed: {
    description() {
      return sourceData.destinations
        .find((destination) => destination.id === this.id)
        .experiences.filter(
          (item) => item.slug === this.$route.params.experienceSlug
        )[0].description;
    },
  },
};
</script>

<style>
</style>