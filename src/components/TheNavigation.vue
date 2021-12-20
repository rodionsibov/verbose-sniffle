<template>
  <div
    class="bg-gray-700 text-gray-400 p-5 flex flex-col items-center gap-4 border-b-4 w-full mb-5 md:flex-row"
  >
  <router-link to="/" class="text-xl font-bold text-white mb-8 md:mb-0 md:mr-8 fixed md:relative md:bg-none top-0 z-10 bg-gray-700 p-3 w-full text-center md:text-left md:w-auto">
    Vue School Travel App
  </router-link>
    <router-link
      class="hover:underline uppercase tracking-wide md:normal-case md:text-sm"
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'Destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import sourceData from "./../data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: whitesmoke;
}
</style>