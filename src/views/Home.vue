<template>
  <div class="">
    <h1>All Destinations</h1>
    <div class="flex flex-col lg:flex-row gap-4">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2 class="mb-3">
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
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