<template>
  <section v-if="destination">
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
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      destination: null,
    };
  },
  methods: {
    async initData() {
      const res = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
      );
      this.destination = await res.json();
    },
  },
  async created() {
    this.initData();
  },
};
</script>

<style>
</style>