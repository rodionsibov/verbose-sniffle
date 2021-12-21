<template>
  <h1>Greetings {{ username }}</h1>
  <button class="bg-gray-800 text-white p-2 rounded hover:opacity-90" @click="logout">Logout</button>
  <router-link :to="{name: 'Invoices'}">
      <button class="bg-green-800 text-white p-2 rounded hover:opacity-90 ml-2">Invoices</button>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>