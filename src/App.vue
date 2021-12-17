<template>
  <TheNavigation />
  <div class="mx-auto w-11/12 sm:w-3/5 mb-20">
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

</style>
