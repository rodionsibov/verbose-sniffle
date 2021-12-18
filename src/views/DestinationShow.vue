<template>
  <section>
    <h1>
      {{ destination.name }}
    </h1>
    <div class="flex flex-col lg:flex-row gap-4">
      <img
        class="lg:w-1/2 object-cover border-8 border-white drop-shadow-xl"
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      />
      <p class="">
        {{ destination.description }}
      </p>
    </div>
  </section>
</template> 

<script>
import sourceData from "./../data.json";

export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
  async created() {
    const res = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    this.destination = await res.json()
  }
};
</script>

<style>
</style>