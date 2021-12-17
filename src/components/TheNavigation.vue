<template>
  <div id="nav" class="bg-gray-700 text-gray-400 p-5 flex gap-4 text-sm border-b-4">
    <router-link class="hover:underline" to="/">Home</router-link>
    <router-link class="hover:underline" to="/brazil">Brazil</router-link>
    <router-link class="hover:underline" to="/panama">Panama</router-link>
    <router-link class="hover:underline" to="/hawaii">Hawaii</router-link>
    <router-link class="hover:underline" to="/jamaica">Jamaica</router-link>
    <router-link class="hover:underline" to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: whitesmoke;
}
</style>