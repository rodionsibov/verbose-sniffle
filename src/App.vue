<template>
  <TheNavigation />
  <div class="mx-auto w-3/5">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active,
.router-link-exact-active {
  color: whitesmoke;
}
</style>
