<template>
  <div
    class="bg-gray-700 text-gray-400 p-5 flex items-center gap-4 text-sm border-b-4 fixed top-0 w-full mb-5 z-10"
  >
  <router-link to="/" class="text-xl font-bold text-white mr-8">
    Vue School Travel App
  </router-link>
    <router-link
      class="hover:underline"
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