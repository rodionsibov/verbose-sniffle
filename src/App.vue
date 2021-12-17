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

</style>
