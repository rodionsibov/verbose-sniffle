<script>
</script>

<template>
  <div id="nav" class="bg-gray-700 text-gray-400 p-5 flex gap-4 text-sm border-b-4">
    <router-link class="hover:underline" to="/">Home</router-link>
    <router-link class="hover:underline" to="/brazil">Brazil</router-link>
    <router-link class="hover:underline" to="/panama">Panama</router-link>
    <router-link class="hover:underline" to="/hawaii">Hawaii</router-link>
    <router-link class="hover:underline" to="/jamaica">Jamaica</router-link>
    <router-link class="hover:underline" to="/about">About</router-link>
  </div>
  <div class="mx-auto w-3/4">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active, .router-link-exact-active {
  color: whitesmoke;
}
</style>
