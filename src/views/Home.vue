<template>
  <div class="">
    <h1>Home</h1>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
    >
      <h2>
        {{ destination.name }}
      </h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name">
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